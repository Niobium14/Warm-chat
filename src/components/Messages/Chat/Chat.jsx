import React from "react";
import css from "./Chat.module.css";
import Message from "./Message/Message";
import ChatTextareaContainer from "./ChatTextarea/ChatTextareaContainer";

const Chat = (props) => {
  let messagesElement = props.messages.map((message) => (
    <Message message={message.message} />
  ));
  return (
    <div className={css.chat}>
      <div className={css.messages}>
        <div>{messagesElement}</div>
      </div>
      <ChatTextareaContainer />
    </div>
  );
};

export default Chat;
