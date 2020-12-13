import { RootState } from "./../redux-store";
import { ThunkAction } from "redux-thunk";
import { myDataThunkCreator } from "./auth-reducer";

// TYPE FOR MESSAGES
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const SHOW_ERROR = "SHOW-ERROR";

// INITIAL STATE
let initialState = {
  // INITIALIZED
  initialized: false,
  // ERROR
  error: null as string | null,
};

type initialStateType = typeof initialState;
// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const appReducer = (
  state: initialStateType = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    //   FOLLOW
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
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

type ActionType = initializedSuccessType | showErrorType;
// TYPE OF FOLLOW ACTION CREATOR
export type initializedSuccessType = {
  type: typeof INITIALIZED_SUCCESS;
};
// FOLLOW ACTION CREATOR
export const initializedSuccess = (): initializedSuccessType => ({
  type: INITIALIZED_SUCCESS,
});

// TYPE OF SHOW ERROR ACTION CREATOR
export type showErrorType = {
  type: typeof SHOW_ERROR;
  error: string;
};

// SHOW ERROR ACTION CREATOR
export const showError = (error: string): showErrorType => ({
  type: SHOW_ERROR,
  error,
});
// SET NEW DATA
export const initializeApp = (): ThunkAction<
  void,
  RootState,
  unknown,
  ActionType
> => (dispatch: any) => {
  try {
    let promise = dispatch(myDataThunkCreator());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  } catch (error) {
    dispatch(showError("Something goes wrong"));
  }
};

export default appReducer;
