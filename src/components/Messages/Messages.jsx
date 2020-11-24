import React, { Component } from "react";
import css from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Chat from "./Chat/Chat";

const Messages = (props) => {
  let dialogsElement = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  return (
    <div className={css.messages}>
      <div className={css.dialogs}>
        <div className={css.dialogsItems}>{dialogsElement}</div>
        <div className={css.line} />
        <Chat messages={props.messages} sentMessage={props.sentMessage} />
      </div>
    </div>
  );
};
export default Messages;
