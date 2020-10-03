import React, { Component } from "react";
import css from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {
  let dialogsElement = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElement = props.messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogsElement}</div>
      <div className={css.line}></div>
      <div className={css.messages}>{messagesElement} </div>
    </div>
  );
};
export default Messages;
