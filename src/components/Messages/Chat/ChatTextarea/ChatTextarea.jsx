import React from "react";
import css from "./ChatTextarea.module.css";

const ChatTextarea = (props) => {
  let newMessage = React.createRef();

  let sentMessage = () => {
    let action = {type: "ADD-MESSAGE"};
    props.dispatch(action);
  };

  let onMessageChange = () => {
    let text = newMessage.current.value;
    let action = {type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: text};
    props.dispatch(action);
  };

  return (
    <div className={css.area}>
      <textarea
        ref={newMessage}
        className={css.textarea}
        onChange={onMessageChange}
        value={props.newMessageText}
      ></textarea>
      <button className={css.send} onClick={sentMessage}>
        SEND
      </button>
    </div>
  );
};

export default ChatTextarea;
