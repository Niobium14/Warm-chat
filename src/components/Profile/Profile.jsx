import React from "react";
import Posts from "./Posts/Posts";
import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={css.wrapper}>
      <ProfileInfo className={css.profile} />
      <Posts store={props.store} profilePage={props.profilePage} />
    </div>
  );
};

export default Profile;
