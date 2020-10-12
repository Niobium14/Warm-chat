import React from "react";
import css from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={css.frame}>
      <div className={css.dialog}>{props.message}</div>
    </div>
  );
};

export default Message;
