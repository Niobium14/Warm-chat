import React from "react";
import css from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={css.item}>
      <div className={css.data}>
        <img src={props.img} />
        <div className={css.name}>{props.name}</div>
      </div>
      {props.message}
      <div>{props.post_img}</div>
    </div>
  );
};

export default Post;
