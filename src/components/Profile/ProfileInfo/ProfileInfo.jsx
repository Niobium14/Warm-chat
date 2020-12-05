/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import css from "./ProfileInfo.module.css";
import profile_bg from "../../../img/profile_bg.jpg";
import userDefault from "../../../img/user-default.png";
import Preloader from "../../common/Preloader/Preloader";
import photo from "../../../img/gallery.png";
import { AboutUser } from "./AboutUser/AboutUser";

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
      <img src={profile_bg} className={css.background} />
      <div className={css.profile_picture}>
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
              onChange={onPhotoSelected}
              className={css.choosePhoto}
            />
          </div>
        )}
      </div>
      <AboutUser {...props} />
    </div>
  );
};

export default ProfileInfo;
