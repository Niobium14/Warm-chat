import { authAPI } from "../../api/api";

// TYPE FOR MESSAGES
const SET_USER_DATA = "SET-USER-DATA";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

// INITIAL STATE
let initialState = {
  // USER IG
  userId: null,
  // EMAIL
  email: null,
  // LOGIN
  login: null,
  // LOADING
  isFetching: false,
  // AUTH CHECKOUT
  isAuth: false,
};

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const authReduser = (state = initialState, action) => {
  switch (action.type) {
    //   FOLLOW
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
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
export const setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});
// SET TOTAL USERS COUNT ACTION CREACTOR
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const myDataThunkCreator = () => {
  return (dispatch) => {
    authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setUserData(id, email, login));
      }
    });
  };
};

export default authReduser;
