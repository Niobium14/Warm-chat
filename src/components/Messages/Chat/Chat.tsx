import React from "react";
import css from "./Chat.module.css";
import Message from "./Message/Message";
import ReduxMessagesForm from "./MessagesForm/MessagesForm";
import { messagesType } from "../../../redux/myReducers/messages-reducer";

type PropsType = {
  messages: Array<messagesType>;
  sentMessage: (newMessage: string) => void;
};

// SUBMIT INTERFACE
export interface SubmitInterface {
  newMessage: string;
}

const Chat = (props: PropsType) => {
  let messagesElement = props.messages.map((message) => (
    <Message message={message.message} />
  ));
  let onAddMessage = (value: SubmitInterface) => {
    props.sentMessage(value.newMessage);
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
