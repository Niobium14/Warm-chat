import { InferActionsTypes, RootState } from "./../redux-store";
import { ThunkAction } from "redux-thunk";
import { myDataThunkCreator } from "./auth-reducer";

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
    case "INITIALIZED_SUCCESS": {
      return {
        ...state,
        initialized: true,
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
  initializedSuccess: () =>
    ({
      type: "INITIALIZED_SUCCESS",
    } as const),
  // SHOW ERROR ACTION CREATOR
  showError: (error: string) =>
    ({
      type: "SHOW_ERROR",
      error,
    } as const),
};


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
      dispatch(actions.initializedSuccess());
    });
  } catch (error) {
    dispatch(actions.showError("Something goes wrong"));
  }
};

export default appReducer;
