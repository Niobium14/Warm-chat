import React from "react";
import css from "./Chat.module.css";
import { connect } from "react-redux";
import Message from "./Message/Message";
import ReduxMessagesForm from "./MessagesForm/MessagesForm";
import { addMessageActionCreator } from "../../../redux/myRedusers/messages-reduser";

// CHAT
const Chat = (props) => {
  // MAP MESSAGES
  let messagesElement = props.messages.map((message) => (
    <Message message={message.message} />
  ));

  // SEND NEW MESSAGE
  let onSendMessage = (value) => {
    props.sentMessage(value.newMessage);
  };
  // RETURN
  return (
    <div className={css.chat}>
      <div className={css.messages}>
        <div>{messagesElement}</div>
      </div>
      <ReduxMessagesForm onSubmit={onSendMessage} />
    </div>
  );
};

// MAP DISPATCH TO PROPS
let mapDispatchToProps = (dispatch) => {
  return {
    // DISPATCH ADD MESSAGE ACTION CREATOR
    sentMessage: (newMessage) => {
      dispatch(addMessageActionCreator(newMessage));
    },
  };
};

// MAP DISPATCH TO PROPS
let mapStateToProps = (state) => {};

// CONTAINER FOR CHAT TEXTAREA
const ChatReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatReduxContainer;
