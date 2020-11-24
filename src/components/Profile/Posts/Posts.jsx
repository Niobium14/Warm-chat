import React from "react";
import Post from "./Post/Post";
import css from "./Posts.module.css";
import ReduxProfileForm from "./ProfileForm/ProfileForm";

const Posts = React.memo((props) => {
  let onAddPost = (values) => {
    props.sentPost(values.newPostText);
  };
  return (
    <div className={css.posts}>
      <ReduxProfileForm onSubmit={onAddPost} />
      <Post posts={props.posts} />
    </div>
  );
});

export default Posts;
