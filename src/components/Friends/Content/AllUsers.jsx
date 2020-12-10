/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import css from "../Friends.module.css";
import userDefault from "../../../img/user-default.png";
import { NavLink } from "react-router-dom";

export function AllUsers(
  users,
  followingInProgress,
  unfollowUserThunkCreator,
  followUserThunkCreator
) {
  debugger
  return (
    <div className={css.users}>
      <div className={css.listName}>
        <h3>Your list of users</h3>
      </div>
      {users.map((user) => (
        <div className={css.form} key={user.id}>
          <div className={css.content}>
            <NavLink to={"/profile/" + user.id} className={css.person}>
              <img
                src={
                  user.photos.small != null ? user.photos.small : userDefault
                }
              />
            </NavLink>
            <div className={css.data}>
              <div className={css.fullName}>{user.name}</div>
              <div className={css.inData}>
                <div className={css.status}>
                  {user.status ? user.status : "No status"}
                </div>
                <div className={css.status}>{user.status}</div>
              </div>
            </div>
            <div className={css.button}>
              {user.followed ? (
                <button
                  disabled={followingInProgress.some((id) => id === user.id)}
                  className={css.unfollowBn}
                  onClick={() => {
                    unfollowUserThunkCreator(user.id);
                  }}
                >
                  <span>UNFOLLOW</span>
                </button>
              ) : (
                <button
                  disabled={followingInProgress.some((id) => id === user.id)}
                  className={css.followBn}
                  onClick={() => {
                    followUserThunkCreator(user.id);
                  }}
                >
                  <span>FOLLOW</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
