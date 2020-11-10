import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../redux/myReducers/messages-reducer";
import ChatTextarea from "./ChatTextarea";

// LOGIC FOR CONTAINER
let mapStateToProps = (state) => {
  return {
    newMessageText: state.messagesPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
      // DISPATCH ADD MESSAGE ACTION CREATOR
    sentMessage: () => {
      dispatch(addMessageActionCreator());
    },
      // DISPATCH UPDATE NEW POST TEXT ACTION CREATOR

    messageChange: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
  
    },
  };
};

// CONTAINER FOR CHAT TEXTAREA
const ChatTextareaContainer = connect(mapStateToProps, mapDispatchToProps)(ChatTextarea);

export default ChatTextareaContainer;
