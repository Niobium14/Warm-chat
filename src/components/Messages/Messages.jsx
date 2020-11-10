import React, { Component } from "react";
import css from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessagesBG from "./MessagesBG/MessagesBG";
import Chat from "./Chat/Chat";
import { Redirect } from "react-router-dom";

const Messages = (props) => {
  let dialogsElement = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  return (
    <div className={css.messages}>
      <div className={css.dialogs}>
        <div className={css.dialogsItems}>{dialogsElement}</div>
        <div className={css.line} />
        <Chat messages={props.messages} />
      </div>
      <MessagesBG />
    </div>
  );
};
export default Messages;
