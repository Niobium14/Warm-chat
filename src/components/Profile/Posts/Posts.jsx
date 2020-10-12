import React from "react";
import ProfileBG from "./ProfileBG/ProfileBG";
import ProfileTextarea from "./ProfileTextarea/ProfileTextarea";
import Post from "./Post/Post";
import css from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={css.posts}>
      <ProfileBG />
      <ProfileTextarea
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
      <Post posts={props.profilePage.posts} />
    </div>
  );
};

export default Posts;
