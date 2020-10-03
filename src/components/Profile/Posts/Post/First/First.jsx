import React from "react";
import css from "./First.module.css";

const First = (props) => {
  return (
    <div className={css.first}>
      <img src={props.img} />
      <div className={css.data}>
        <div className={css.name}>{props.name}</div>
        <div className={css.frame}>
          <div className={css.message}>{props.message}</div>
        </div>
      </div>
    </div>
  );
};

export default First;
