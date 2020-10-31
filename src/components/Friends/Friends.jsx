import React, { Component } from "react";
import BG from "./FriendsBG/FriendsBG";
import css from "./Friends.module.css";
import userDefault from "../../img/user-default.png";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

const Friends = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={css.friendsPage}>
      <div className={css.users}>
        <div className={css.listName}>
          <h3>Your list of users</h3>
        </div>
        {props.users.map((user) => (
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
                  <div className={css.location}>
                    {"Country"} - {"City"}
                  </div>
                  <div className={css.status}>{user.status}</div>
                </div>
              </div>
              <div className={css.button}>
                {user.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    className={css.followBn}
                    onClick={() => {
                      props.followUserThunkCreator(user.id);
                    }}
                  >
                    <span>FOLLOW</span>
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    className={css.unfollowBn}
                    onClick={() => {
                      props.unfollowUserThunkCreator(user.id);
                    }}
                  >
                    <span>UNFOLLOW</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={css.numbers}>
        {pages.map((p) => {
          return (
            <text
              className={
                props.currentPage === p
                  ? `${css.item} ${css.activePage}`
                  : css.item
              }
              onClick={(e) => {
                props.setPage(p);
              }}
            >
              {p}
            </text>
          );
        })}
      </div>
      <BG />
    </div>
  );
};

export default Friends;
