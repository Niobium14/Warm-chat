import React from "react";
import PostContainer from "./Post/PostContainer";
import css from "./Posts.module.css";
import ProfileBG from "./ProfileBG/ProfileBG";
import ProfileTextareaContainer from "./ProfileTextarea/ProfileTextareaContainer";

const Posts = (props) => {
  return (
    <div className={css.posts}>
      <ProfileBG />
      <ProfileTextareaContainer />
      <PostContainer />
    </div>
  );
};

export default Posts;
