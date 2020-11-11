import { myDataThunkCreator } from "./auth-reducer";

// TYPE FOR MESSAGES
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

// INITIAL STATE
let initialState = {
  // INITIALIZED
  initialized: false,
};

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    //   FOLLOW
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

// FOLLOW ACTION CREATOR
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

// SET NEW DATA
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(myDataThunkCreator());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
