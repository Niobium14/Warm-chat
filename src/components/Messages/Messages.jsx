import React, { Component } from "react";
import css from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessagesBG from "./MessagesBG/MessagesBG";
import Chat from "./Chat/Chat";

const Messages = (props) => {
  let dialogsElement = props.messagesPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  return (
    <div className={css.messages}>
      <div className={css.dialogs}>
        <div className={css.dialogsItems}>{dialogsElement}</div>
        <div className={css.line}></div>
        <Chat
          addMessage={props.addMessage}
          messagesPage={props.messagesPage}
          updateNewMessageText={props.updateNewMessageText}
        />
      </div>
      <MessagesBG />
    </div>
  );
};
export default Messages;
