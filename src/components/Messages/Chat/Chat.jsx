import React from "react";
import ChatTextarea from "./ChatTextarea/ChatTextarea";
import css from "./Chat.module.css";
import Message from "./Message/Message";

const Chat = (props) => {
  let messagesElement = props.messagesPage.messages.map((message) => (
    <Message message={message.message} />
  ));
  return (
    <div className={css.chat}>
      <div className={css.messages}>
        <div>{messagesElement}</div>
      </div>
      <ChatTextarea
        dispatch={props.dispatch}
        newMessageText={props.messagesPage.newMessageText}
      />
    </div>
  );
};

export default Chat;
