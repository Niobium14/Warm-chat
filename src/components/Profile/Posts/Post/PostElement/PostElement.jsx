/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import css from "./PostElement.module.css";

const PostElement = (props) => {
  return (
    <div className={css.element}>
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

export default PostElement;
