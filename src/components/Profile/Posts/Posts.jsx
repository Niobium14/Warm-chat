import React from "react";
import Post from "./Post/Post";
import css from "./Posts.module.css";
import ReduxProfileForm from "./ProfileForm/ProfileForm";
import userDefault from "./../../../img/user-default.png";

const Posts = React.memo((props) => {
  let onAddPost = (values) => {
    props.sentPost(
      values.newPostText,
      props.profile.photos.small != null
        ? props.profile.photos.large
        : userDefault
    );
  };
  return (
    <div className={css.posts}>
      <ReduxProfileForm onSubmit={onAddPost} />
      <Post profile={props.profile} posts={props.posts} />
    </div>
  );
});

export default Posts;
