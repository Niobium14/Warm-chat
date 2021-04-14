import { InferActionsTypes } from "../redux-store";
export type dialogsType = {
  id: number;
  name: string;
};
export type messagesType = {
  id: number;
  message: string;
};
// INITIAL STATE
let initialState = {
  dialogs: [
    { id: 1, name: "Adam Kironn" },
    { id: 2, name: "Mathias Crossley" },
    { id: 3, name: "Jocelyn Ponce" },
    { id: 4, name: "Neha Obrien" },
    { id: 5, name: "Siana Lucero" },
    { id: 6, name: "Diane Hopper" },
  ] as Array<dialogsType>,
  messages: [
    {
      id: 1,
      message:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
    {
      id: 2,
      message:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
    {
      id: 3,
      message: "The standard chunk of Lorem Ipsum used since the 1500s.",
    },
  ] as Array<messagesType>,
};

type initialState = typeof initialState;

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const messagesReducer = (
  state: initialState = initialState,
  action: ActionType
): initialState => {
  switch (action.type) {
    case "ADD_MESSAGE": {
      // ADD MESSAGE
      let newMessage = {
        id: 5,
        message: action.newMessage,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

// action creators
type ActionType = InferActionsTypes<typeof actions>;
export const actions = {
  // ADD MESSAGE ACTION CREATOR
  addMessageActionCreator: (newMessage: string) =>
    ({
      type: "ADD_MESSAGE",
      newMessage,
    } as const),
};
export default messagesReducer;
