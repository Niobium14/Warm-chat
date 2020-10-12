import React from "react";
import css from "./ChatTextarea.module.css";

const ChatTextarea = (props) => {
  let newMessage = React.createRef();

  let sentMessage = () => {
    props.addMessage();
    props.updateNewMessageText("");
  };

  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessageText(text);
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
