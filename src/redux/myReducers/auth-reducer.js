import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";

// TYPE FOR MESSAGES
const SET_USER_DATA = "SET-USER-DATA";

// INITIAL STATE
let initialState = {
  // USER ID
  userId: null,
  // EMAIL
  email: null,
  // LOGIN
  login: null,
  // AUTH CHECKOUT
  isAuth: false,
};

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //   FOLLOW
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

// FOLLOW ACTION CREATOR
export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

// SET NEW DATA
export const myDataThunkCreator = () => (dispatch) => {
  authAPI.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};

// LOGIN
export const loginThunkCreator = (email, password, rememberMe) => (
  dispatch
) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(myDataThunkCreator());
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit("singIn", { _error: message }));
    }
  });
};

// LOGOUT
export const logoutThunkCreator = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  });
};

export default authReducer;
