/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import css from "./ProfileInfo.module.css";
import profile_bg from "../../../img/profile_bg.jpg";
import userDefault from "../../../img/user-default.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preloader from "../../common/Preloader/Preloader";
import photo from "../../../img/gallery.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const onPhotoSelected = (photo) => {
    if (photo.target.files.length) {
      props.savePhoto(photo.target.files[0]);
    }
  };
  return (
    <div className={css.profile}>
      <div className={css.main}>
        <img src={profile_bg} className={css.profile_bg} />
        <div className={css.changer}>
          <img
            src={
              props.profile.photos.small != null
                ? props.profile.photos.large
                : userDefault
            }
            className={props.isOwner ? css.ownerPic : css.userPic}
          />
          {props.isOwner && (
            <div className={css.text}>
              <label for="file-input" className={css.photoPoop}>
                <img src={photo} />
              </label>
              <input
                id="file-input"
                type="file"
                className={css.choosePhoto}
                onChange={onPhotoSelected}
              />
            </div>
          )}
        </div>
        <div className={css.aboutUser}>
          <div className={css.about}>
            <div className={css.name}>{props.profile.fullName}</div>
            <ProfileStatus
              status={props.status}
              updateStatus={props.updateStatus}
            />
          </div>
          <div className={css.jobInfo}>
            <div className={css.line} />
            <div className={css.jobStatus}>
              <text className={css.jobSet}>Job status:</text>
              {props.profile.lookingForAJob ? (
                <text className={css.aboutStatus}>Looking for a job</text>
              ) : (
                <text className={css.aboutStatus}>Dont need a job</text>
              )}
            </div>
            <div className={css.jobComment}>
              <text className={css.jobSet}>Comment:</text>
              <text className={css.aboutStatus}>
                {props.profile.lookingForAJobDescription || "No comment"}
              </text>
            </div>
          </div>
        </div>
      </div>
      <div className={css.information}>
        <div className={css.description}></div>
      </div>
    </div>
  );
};

export default ProfileInfo;
