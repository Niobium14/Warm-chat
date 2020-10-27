import React from "react";
import Posts from "./Posts/Posts";
import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={css.wrapper}>
      <ProfileInfo className={css.profile} profile={props.profile}/>
      <Posts  />
    </div>
  );
};

export default Profile;
