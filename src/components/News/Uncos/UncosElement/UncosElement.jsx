import React from "react";
import css from "./UncosElement.module.css";

const UncosElement = (props) => {
  return (
    <div className={css.element}>
      <img src={props.img} />
      <div className={css.data}>
        <div className={css.title}>{props.title}</div>
        <div className={css.event}>{props.event}</div>
      </div>
    </div>
  );
};

export default UncosElement;
