import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={css.wrapper}>
      <ProfileInfo
        className={css.profile}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatusThunkCreator}
      />
      <PostsContainer />
    </div>
  );
};

export default Profile;
