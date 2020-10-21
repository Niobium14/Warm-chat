import React from "react";
import Post from "./Post/Post";
import css from "./Posts.module.css";
import ProfileBG from "./ProfileBG/ProfileBG";
import ProfileTextareaContainer from "./ProfileTextarea/ProfileTextareaContainer";

const Posts = (props) => {
  return (
    <div className={css.posts}>
      <ProfileBG />
      <ProfileTextareaContainer store={props.store} />
      <Post posts={props.profilePage.posts} />
    </div>
  );
};

export default Posts;
