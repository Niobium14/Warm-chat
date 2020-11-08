import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import css from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessagesBG from "./MessagesBG/MessagesBG";
import ChatReduxContainer from "./Chat/ChatContainer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const Messages = (props) => {
  let dialogsElement = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  return (
    <div className={css.messages}>
      <div className={css.dialogs}>
        <div className={css.dialogsItems}>{dialogsElement}</div>
        <div className={css.line} />
        <ChatReduxContainer messages={props.messages} />
      </div>
      <MessagesBG />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
  };
};

// REDIRECT AND CONNECT
export default compose(connect(mapStateToProps), withAuthRedirect)(Messages);
