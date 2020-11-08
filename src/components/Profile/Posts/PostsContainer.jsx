import React from "react";
import css from "./Posts.module.css";
import { connect } from "react-redux";
import ProfileBG from "./ProfileBG/ProfileBG";
import PostContainer from "./Post/PostContainer";
import { addPostActionCreator } from "../../../redux/myRedusers/profile-reduser";
import ReduxProfileForm from "./ProfileForm/ProfileForm";

const Posts = (props) => {
  // ONCLICK FOR TEXTAREA
  let onSentPost = (value) => {
    props.sentPost(value.newPost);
  };
  return (
    <div className={css.posts}>
      <ProfileBG className={css.BG} />
      <ReduxProfileForm onSubmit={onSentPost} />
      <PostContainer />
    </div>
  );
};

let mapDispatchToProps = (dispatch) => {
  return {
    // DISPATCH ADD POST ACTION CREATOR
    sentPost: (newPost) => {
      dispatch(addPostActionCreator(newPost));
    },
  };
};

let mapStateToProps = (state) => {};

// CONTAINER FOR CHAT TEXTAREA
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
