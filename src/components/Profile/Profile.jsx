import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
  return (
    <div className={css.wrapper}>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <ProfileInfo
          isFetching={props.isFetching}
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
      )}
      <PostsContainer profile={props.profile} />
    </div>
  );
};

export default Profile;
