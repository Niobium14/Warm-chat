import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div className={css.wrapper}>
      <ProfileInfo
        error={props.error}
        saveProfile={props.saveProfile}
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        className={css.profile}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        jobComment={props.jobComment}
        updateComment={props.updateComment}
      />
      <PostsContainer />
    </div>
  );
}

export default Profile;
