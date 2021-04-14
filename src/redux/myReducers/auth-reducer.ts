import { BaseThunkType, InferActionsTypes, RootState } from "./../redux-store";
import { ThunkAction } from "redux-thunk";
import { stopSubmit } from "redux-form";
import {
  ResponseCaptcha,
  ResponseCodes,
} from "../../api/api";
import { captchaAPI } from "../../api/GetCaptcha";
import { authAPI } from "../../api/AuthMe";

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
    case "SET_USER_DATA":
    case "GET_CAPTCHA_SUCCESS": {
      return {
        ...state,
        ...action.payload,
      };
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
  // FOLLOW ACTION CREATOR
  setUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: "SET_USER_DATA",
      payload: { userId, email, login, isAuth },
    } as const),
  // GET CAPTCHA CREATOR
  getCaptcha: (captchaUrl: string) =>
    ({
      type: "GET_CAPTCHA_SUCCESS",
      payload: { captchaUrl },
    } as const),
  // SHOW ERROR ACTION CREATOR
  showError: (error: string) =>
    ({
      type: "SHOW_ERROR",
      error,
    } as const),
};

// THUNKS
type ThunkType = BaseThunkType<ActionType>;

// SET NEW DATA
export const myDataThunkCreator = (): ThunkType => async (dispatch) => {
  try {
    let data = await authAPI.authMe();
    if (data.resultCode === ResponseCodes.Success) {
      let { id, login, email } = data.data;
      dispatch(actions.setUserData(id, email, login, true));
    }
  } catch (error) {
    dispatch(actions.showError("Something goes wrong"));
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
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResponseCodes.Success) {
      dispatch(myDataThunkCreator());
    } else {
      if (data.resultCode === ResponseCaptcha.CaptchaIsRequired) {
        dispatch(getCaptchaThunkCreator());
      }
      let message = data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit("singIn", { _error: message }));
    }
  } catch (error) {
    dispatch(actions.showError("Something goes wrong"));
  }
};

// LOGOUT
export const logoutThunkCreator = (): ThunkType => async (dispatch) => {
  try {
    let data = await authAPI.logout();
    if (data.resultCode === ResponseCodes.Success) {
      dispatch(actions.setUserData(null, null, null, false));
    }
  } catch (error) {
    dispatch(actions.showError("Something goes wrong"));
  }
};

// LOGOUT
export const getCaptchaThunkCreator = (): ThunkType => async (dispatch) => {
  try {
    let data = await captchaAPI.getCaptcha();
    const captchaUrl = data.url;
    dispatch(actions.getCaptcha(captchaUrl));
  } catch (error) {
    dispatch(actions.showError("Something goes wrong"));
  }
};

export default authReducer;
