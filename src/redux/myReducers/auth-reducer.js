import { stopSubmit } from "redux-form";
import { authAPI, captchaAPI } from "../../api/api";

// TYPE FOR MESSAGES
const SET_USER_DATA = "SET-USER-DATA";
const GET_CAPTCHA_SUCCESS = "GET-CAPTCHA-SUCCESS";

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
  // CAPTCHA
  captchaUrl: null,
};

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //   FOLLOW
    case SET_USER_DATA:
    case GET_CAPTCHA_SUCCESS: {
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
// GET CAPTCHA CREATOR
export const getCaptcha = (captchaUrl) => ({
  type: GET_CAPTCHA_SUCCESS,
  payload: { captchaUrl },
});

// SET NEW DATA
export const myDataThunkCreator = () => async (dispatch) => {
  let response = await authAPI.authMe();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

// LOGIN
export const loginThunkCreator = (
  email,
  password,
  rememberMe,
  captcha
) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(myDataThunkCreator());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaThunkCreator());
    }
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("singIn", { _error: message }));
  }
};

// LOGOUT
export const logoutThunkCreator = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

// LOGOUT
export const getCaptchaThunkCreator = () => async (dispatch) => {
  let response = await captchaAPI.getCaptcha();
  const captchaUrl = response.data.url;
  dispatch(getCaptcha(captchaUrl));
};

export default authReducer;
