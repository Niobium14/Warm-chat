// TYPE FOR MESSAGES
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";

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
};

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const friendsReduser = (state = initialState, action) => {
  switch (action.type) {
    //   FOLLOW
    case FOLLOW: {
      return {
        ...state,
        // users: [...state.users]
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
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
    default:
      return state;
  }
};

// FOLLOW ACTION CREACTOR
export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
// UNFOLLOW ACTION CREACTOR
export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW,
  userId,
});
// SET CURRENT PAGE ACTION CREACTOR
export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
// SET USERS ACTION CREACTOR
export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users,
});
// SET TOTAL USERS COUNT ACTION CREACTOR
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

export default friendsReduser;
