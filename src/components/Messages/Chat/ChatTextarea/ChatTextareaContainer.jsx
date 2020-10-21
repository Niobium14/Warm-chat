import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../redux/myRedusers/messages-reduser";
import ChatTextarea from "./ChatTextarea";

// CONTAINER FOR CHAT TEXTAREA
const ChatTextareaContainer = (props) => {
  // GETTING STATE
  let state = props.store.getState();

  // DISPATCH ADD MESSAGE ACTION CREATOR
  let sentMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  // DISPATCH UPDATE NEW POST TEXT ACTION CREATOR
  let messageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <ChatTextarea
      sentMessage={sentMessage}
      messageChange={messageChange}
      newMessageText={state.messagesPage.newMessageText}
    />
  );
};

export default ChatTextareaContainer;
