import React from "react";
import css from "./Post.module.css";
import PostElement from "./PostElement/PostElement";

const Post = (props) => {
  let postsElement = props.posts.map((message) => (
    <PostElement message={message.message} img={message.img} name={message.name}/>
  ));
  return <div className={css.posts}>{postsElement} </div>;
};
export default Post;

