/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import css from "./Profile.module.css";

function Profile(props) {
  return (
    <div className={css.profilePae}>
        <ProfileInfo
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatusThunkCreator}
        />
        <PostsContainer />
    </div>
  );
}

export default Profile;
