// TYPE FOR MESSAGES
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

// INITIAL STATE
let initialState = {
  dialogs: [
    { id: 1, name: "Adam Kironn" },
    { id: 2, name: "Mathias Crossley" },
    { id: 3, name: "Jocelyn Ponce" },
    { id: 4, name: "Neha Obrien" },
    { id: 5, name: "Siana Lucero" },
    { id: 6, name: "Diane Hopper" },
  ],
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
  ],
  newMessageText: "",
};

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const messagesReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      // ADD MESSAGE
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      // TEXT FROM TEXTAREA (MESSAGES)
      return {
        ...state,
        newMessageText: action.newMessageText,
      };
    }
    default:
      return state;
  }
};

// REDIRECT 
// ADD MESSAGE ACTION CREACTOR
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
// UPDATE NEW MESSAGE TEXT ACTION CREACTOR
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text,
});

export default messagesReduser;
