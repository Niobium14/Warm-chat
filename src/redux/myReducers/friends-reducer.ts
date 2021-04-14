import { BaseThunkType, InferActionsTypes, RootState } from "./../redux-store";
import { ThunkAction } from "redux-thunk";
/* eslint-disable eqeqeq */
import { followUnfollowCase } from "../../components/common/Helpers/helpers";
import { usersType } from "../../types/types";
import { ResponseCodes } from "../../api/api";
import { usersAPI } from "../../api/GetUsers";

// INITIAL STATE
let initialState = {
  // all users
  users: [] as Array<usersType>,
  // number of portion of items
  pageSize: 4,
  // page size (how many items will be returned in response)
  totalUsersCount: 0,
  // current page
  currentPage: 1,
  // LOADING
  isFetching: false,
  followingInProgress: [] as Array<number>,
  // ERROR
  error: null as null | string,
};

type initialStateType = typeof initialState;

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const friendsReducer = (
  state: initialStateType = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    //   FOLLOW
    case "FOLLOW": {
      return {
        ...state,
        users: followUnfollowCase(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    }
    // UNFOLLOW
    case "UNFOLLOW": {
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
    case "SET_USERS": {
      return { ...state, users: action.users };
    }
    // SET CURRENT PAGE
    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    // SET CURRENT PAGE
    case "SET_TOTAL_USERS_COUNT": {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    // GIF
    case "TOGGLE_FOLLOWING_PROGRESS": {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    // GIF
    case "TOGGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
    case "SHOW_ERROR": {
      // (ADD)SHOW ERROR
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

// action creators
type ActionType = InferActionsTypes<typeof actions>;
export const actions = {
  // SHOW ERROR ACTION CREATOR
  showError: (error: string) =>
    ({
      type: "SHOW_ERROR",
      error,
    } as const),
  // FOLLOW ACTION CREATOR
  follow: (userId: number) =>
    ({
      type: "FOLLOW",
      userId,
    } as const),
  // UNFOLLOW ACTION CREATOR
  unfollow: (userId: number) =>
    ({
      type: "UNFOLLOW",
      userId,
    } as const),
  // SET CURRENT PAGE ACTION CREATOR
  setCurrentPage: (currentPage: number) =>
    ({
      type: "SET_CURRENT_PAGE",
      currentPage,
    } as const),
  // SET USERS ACTION CREATOR
  setUsers: (users: Array<usersType>) =>
    ({
      type: "SET_USERS",
      users,
    } as const),
  // SET TOTAL USERS COUNT ACTION CREATOR
  setTotalUsersCount: (totalUsersCount: number) =>
    ({
      type: "SET_TOTAL_USERS_COUNT",
      totalUsersCount,
    } as const),
  // SET TOTAL USERS COUNT ACTION CREATOR
  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: "TOGGLE_IS_FETCHING",
      isFetching,
    } as const),
  // SET TOTAL USERS COUNT ACTION CREATOR
  toggleFollowingProgress: (
    followingInProgress: boolean,
    userId: number,
    isFetching: boolean
  ) =>
    ({
      type: "TOGGLE_FOLLOWING_PROGRESS",
      followingInProgress,
      userId,
      isFetching,
    } as const),
};

// THUNKS
type ThunkType = BaseThunkType<ActionType>;

export const getUsersThunkCreator = (
  currentPage: number,
  pageSize: number
): ThunkType => {
  return async (dispatch) => {
    try {
      dispatch(actions.toggleIsFetching(true));
      let data = await usersAPI.getUsers(currentPage, pageSize);
      dispatch(actions.toggleIsFetching(false));
      dispatch(actions.setUsers(data.items));
      dispatch(actions.setTotalUsersCount(data.totalCount));
    } catch (error) {
      dispatch(actions.showError("Something goes wrong"));
    }
  };
};

export const setPageThunkCreator = (
  pageNumber: number,
  pageSize: number
): ThunkType => {
  return async (dispatch) => {
    try {
      dispatch(actions.setCurrentPage(pageNumber));
      dispatch(actions.toggleIsFetching(true));
      let data = await usersAPI.getUsers(pageNumber, pageSize);
      dispatch(actions.toggleIsFetching(false));
      dispatch(actions.setUsers(data.items));
    } catch (error) {
      dispatch(actions.showError("Something goes wrong"));
    }
  };
};

const _followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  action: any
) => {
  try {
    dispatch(actions.toggleFollowingProgress(true, userId, true));
    let data = await apiMethod(userId);
    if (data.resultCode === ResponseCodes.Success) {
      dispatch(action(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId, false));
  } catch (error) {
    dispatch(actions.showError("Something goes wrong"));
  }
};

export const unfollowUserThunkCreator = (userId: number): ThunkType => {
  return async (dispatch) => {
    try {
      _followUnfollowFlow(
        dispatch,
        userId,
        usersAPI.unfollowUser.bind(userId),
        actions.unfollow
      );
      dispatch(actions.toggleFollowingProgress(false, userId, false));
    } catch (error) {
      dispatch(actions.showError("Something goes wrong"));
    }
  };
};

export const followUserThunkCreator = (userId: number): ThunkType => {
  return async (dispatch) => {
    try {
      _followUnfollowFlow(
        dispatch,
        userId,
        usersAPI.followUser.bind(userId),
        actions.follow
      );
    } catch (error) {
      dispatch(actions.showError("Something goes wrong"));
    }
  };
};

export default friendsReducer;
