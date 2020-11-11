import React from "react";
import css from "./Chat.module.css";
import Message from "./Message/Message";
import ReduxMessagesForm from "./MessagesForm/MessagesForm";

const Chat = (props) => {
  let messagesElement = props.messages.map((message) => (
    <Message message={message.message} />
  ));
  let onAddMessage = (values) => {
    props.sentMessage(values.newMessage);
  };
  return (
    <div className={css.chat}>
      <div className={css.messages}>
        <div>{messagesElement}</div>
      </div>
      <ReduxMessagesForm onSubmit={onAddMessage} />
    </div>
  );
};

export default Chat;
