import React from "react";
import css from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Chat from "./Chat/Chat";
import {
  dialogsType,
  messagesType,
} from "../../redux/myReducers/messages-reducer";

type PropsType = {
  dialogs: Array<dialogsType>;
  messages: Array<messagesType>;
  sentMessage: (newMessage: string) => void;
};
const Messages = (props: PropsType) => {
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
