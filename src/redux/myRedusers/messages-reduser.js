// TYPE FOR MESSAGES
const ADD_MESSAGE = "ADD-MESSAGE";

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
};

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      // ADD MESSAGE
      let body = action.newMessage;
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body}],
      };
    }
    default:
      return state;
  }
};

// ADD MESSAGE ACTION CREACTOR
export const addMessageActionCreator = (newMessage) => ({
  type: ADD_MESSAGE,
  newMessage,
});

export default messagesReducer;
