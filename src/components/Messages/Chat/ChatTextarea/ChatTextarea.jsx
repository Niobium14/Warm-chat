import React from "react";
import css from "./ChatTextarea.module.css";

const ChatTextarea = (props) => {
  // GETTING REF FOR TEXTAREA
  let newMessage = React.createRef();

  // ONCLICK FOR TEXTAREA
  let onSentMessage = () => {
    props.sentMessage();
  };

  // ONCHANGE FOR TEXTAREA
  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.messageChange(text);
  };

  return (
    <div className={css.area}>
      <textarea
        ref={newMessage}
        className={css.textarea}
        onChange={onMessageChange}
        value={props.newMessageText}
      ></textarea>
      <button className={css.send} onClick={onSentMessage}>
        SEND
      </button>
    </div>
  );
};

export default ChatTextarea;
