import React from "react";
import css from "./Chat.module.css";
import Message from "./Message/Message";
import ReduxMessagesForm from "./MessagesForm/MessagesForm";

type PropsType = {
  messages: any[];
  sentMessage: (arg0: any) => void;
};

const Chat = (props: PropsType) => {
  let messagesElement = props.messages.map((message) => (
    <Message message={message.message} />
  ));
  let onAddMessage = (values: any) => {
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
