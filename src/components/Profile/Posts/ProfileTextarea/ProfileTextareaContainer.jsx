import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/myRedusers/profile-reduser";
import ProfileTextarea from "./ProfileTextarea";

// LOGIC FOR CONTAINER
let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    // DISPATCH ADD POST ACTION CREATOR
    sentPost: () => {
      dispatch(addPostActionCreator());
    },

    // DISPATCH UPDATE NEW POST TEXT ACTION CREATOR
    postChange: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
  };
};

// CONTAINER FOR CHAT TEXTAREA
const ProfileTextareaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileTextarea);

export default ProfileTextareaContainer;
