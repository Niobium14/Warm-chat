import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/myRedusers/profile-reduser";
import ProfileTextarea from "./ProfileTextarea";

// CONTAINER FOR PROFILE TEXTAREA
const ProfileTextareaContainer = (props) => {
  // GETTING STATE
  let state = props.store.getState();

  // DISPATCH ADD POST ACTION CREATOR
  let sentPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  // DISPATCH UPDATE NEW POST TEXT ACTION CREATOR
  let postChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <ProfileTextarea
      sentPost={sentPost}
      postChange={postChange}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default ProfileTextareaContainer;
