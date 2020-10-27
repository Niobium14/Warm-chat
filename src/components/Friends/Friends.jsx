import React, { Component } from "react";
import BG from "./FriendsBG/FriendsBG";
import css from "./Friends.module.css";
import userDefault from "../../img/user-default.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

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
                    {"user.location.country"} - {"user.location.city"}
                  </div>
                  <div className={css.status}>"{user.status}"</div>
                </div>
              </div>
              <div className={css.button}>
                {user.followed ? (
                  <button
                    className={css.followBn}
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "cb0df379-06e2-48ad-b9ae-b5c5e59d5a4d",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(user.id);
                          }
                        });
                    }}
                  >
                    <text>FOLLOW</text>
                  </button>
                ) : (
                  <button
                    className={css.unfollowBn}
                    onClick={() => {
                      axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "cb0df379-06e2-48ad-b9ae-b5c5e59d5a4d",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(user.id);
                        }
                      });

                    }}
                  >
                    <text>UNFOLLOW</text>
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
