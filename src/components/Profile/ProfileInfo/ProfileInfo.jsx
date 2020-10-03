import React from "react";
import css from "./ProfileInfo.module.css";
import profile_bg from "../../../photos/profile_bg.jpg";
import profile_pic from "../../../photos/profile_pic.jpg";

const ProfileInfo = () => {
  return (
    <div className={css.profile}>
      <div className={css.main}>
        <img src={profile_bg} className={css.profile_bg} />
        <div className={css.about}>
          <img src={profile_pic} className={css.profile_pic} />
          <div className={css.name}>Bethany Hummerpoln</div>
        </div>
      </div>
      <div className={css.information}>
        <div className={css.description}></div>
      </div>
    </div>
  );
};

export default ProfileInfo;
