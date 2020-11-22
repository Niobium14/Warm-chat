import React from "react";
import PostElement from "./PostElement/PostElement";

const Post = (props) => {
  let postsElement = props.posts.map((message) => (
    <PostElement message={message.message} img={message.img} name={message.name}/>
  ));
  return <div>{postsElement} </div>;
};
export default Post;

