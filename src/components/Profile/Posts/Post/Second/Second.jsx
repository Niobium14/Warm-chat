import React from "react";
import css from "./Second.module.css";

const Second = (props) => {
  return (
    <div className={css.second}>
      <div className={css.data}>
        <div className={css.name}>{props.name}</div>
        <div className={css.frame}>
          <div className={css.message}>{props.message}</div>
        </div>
      </div>
      <img src={props.img} />
    </div>
  );
};

export default Second;
