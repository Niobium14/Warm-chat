import { RootState } from "./../redux-store";
import { ThunkAction } from "redux-thunk";
import { stopSubmit } from "redux-form";
import { authAPI, captchaAPI } from "../../api/api";

// TYPE FOR MESSAGES
const SET_USER_DATA = "SET-USER-DATA";
const GET_CAPTCHA_SUCCESS = "GET-CAPTCHA-SUCCESS";
const SHOW_ERROR = "SHOW-ERROR";

// INITIAL STATE
type initialStateType = {
  // USER ID
  userId: null | number;
  // EMAIL
  email: null | string;
  // LOGIN
  login: null | string;
  // AUTH CHECKOUT
  isAuth: boolean;
  // CAPTCHA
  captchaUrl: null | string;
  // ERROR
  error: null | string;
};

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
  // ERROR
  error: null,
};

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const authReducer = (
  state: initialStateType = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    //   FOLLOW
    case SET_USER_DATA:
    case GET_CAPTCHA_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SHOW_ERROR: {
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

type ActionType = setUserDataType | getCaptchaType | showErrorType;
// FOLLOW ACTION CREATOR
export type setUserDataType = {
  type: typeof SET_USER_DATA;
  payload: {
    userId: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
  };
};
// FOLLOW ACTION CREATOR
export const setUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): setUserDataType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
// GET CAPTCHA CREATOR
type getCaptchaType = {
  type: typeof GET_CAPTCHA_SUCCESS;
  payload: { captchaUrl: string };
};
// GET CAPTCHA CREATOR
export const getCaptcha = (captchaUrl: string): getCaptchaType => ({
  type: GET_CAPTCHA_SUCCESS,
  payload: { captchaUrl },
});
// SHOW ERROR ACTION CREATOR
type showErrorType = {
  type: typeof SHOW_ERROR;
  error: string;
};
export const showError = (error: string): showErrorType => ({
  type: SHOW_ERROR,
  error,
});

type ThunkType = ThunkAction<void, RootState, unknown, ActionType>;
// SET NEW DATA
export const myDataThunkCreator = (): ThunkType => async (dispatch) => {
  try {
    let response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setUserData(id, email, login, true));
    }
  } catch (error) {
    dispatch(showError("Something goes wrong"));
  }
};

// LOGIN
export const loginThunkCreator = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
): ThunkType => async (dispatch: any) => {
  try {
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
  } catch (error) {
    dispatch(showError("Something goes wrong"));
  }
};

// LOGOUT
export const logoutThunkCreator = (): ThunkType => async (dispatch) => {
  try {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  } catch (error) {
    dispatch(showError("Something goes wrong"));
  }
};

// LOGOUT
export const getCaptchaThunkCreator = (): ThunkType => async (dispatch) => {
  try {
    let response = await captchaAPI.getCaptcha();
    const captchaUrl = response.data.url;
    dispatch(getCaptcha(captchaUrl));
  } catch (error) {
    dispatch(showError("Something goes wrong"));
  }
};

export default authReducer;
