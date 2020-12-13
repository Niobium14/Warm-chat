import React from "react";
import css from "./Message.module.css";

type PropsType = {
  message: React.ReactNode;
};

const Message = (props: PropsType) => {
  return (
    <div className={css.frame}>
      <div className={css.dialog}>{props.message}</div>
    </div>
  );
};

export default Message;
