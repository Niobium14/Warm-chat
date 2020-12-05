import { usersAPI } from "../../api/api";
import { followUnfollowCase } from "../../components/common/Helpers/helpers";

// TYPE FOR MESSAGES
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS";

// INITIAL STATE
let initialState = {
  // all users
  users: [],
  // number of portion of items
  pageSize: 4,
  // page size (how many items will be returned in response)
  totalUsersCount: 0,
  // current page
  currentPage: 1,
  // LOADING
  followingInProgress: [],
};

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    //   FOLLOW
    case FOLLOW: {
      return {
        ...state,
        users: followUnfollowCase(state.users, action.userId, "id", {
          followed: true,
        }),
        //   users: state.users.map((user) => {
        //     if (user.id === action.userId) {
        //       return { ...user, followed: true };
        //     }
        //     return user;
        //   }),
        // };
      };
    }
    // UNFOLLOW
    case UNFOLLOW: {
      return {
        ...state,
        // users: [...state.users]
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }
    // SET USERS
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    // SET CURRENT PAGE
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    // SET CURRENT PAGE
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    // GIF
    case TOGGLE_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    // GIF
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

// FOLLOW ACTION CREACTOR
export const follow = (userId) => ({ type: FOLLOW, userId });
// UNFOLLOW ACTION CREACTOR
export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});
// SET CURRENT PAGE ACTION CREACTOR
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
// SET USERS ACTION CREACTOR
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
// SET TOTAL USERS COUNT ACTION CREACTOR
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
// SET TOTAL USERS COUNT ACTION CREACTOR
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
// SET TOTAL USERS COUNT ACTION CREACTOR
export const toggleFollowingProgress = (followingInProgress, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  followingInProgress,
  userId,
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.data.items));
    dispatch(setTotalUsersCount(data.data.totalCount));
  };
};

export const setPageThunkCreator = (pageNumber, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.data.items));
  };
};

const followUnfollowFlow = async (dispatch, userId, apiMetchod, action) => {
  dispatch(toggleFollowingProgress(true, userId));
  let data = await apiMetchod(userId);
  if (data.data.resultCode === 0) {
    dispatch(action(userId));
  }
  dispatch(toggleFollowingProgress(false));
};

export const unfollowUserThunkCreator = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollowUser.bind(userId),
      unfollow
    );
  };
};

export const followUserThunkCreator = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.followUser.bind(userId),
      follow
    );
  };
};

export default friendsReducer;