import React, { Component } from "react";
import BG from "./FriendsBG/FriendsBG";
import css from "./Friends.module.css";
import userDefault from "../../img/user-default.png";
import * as axios from "axios";

export default class Friends extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  setPage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

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
          {this.props.users.map((user) => (
            <div className={css.form} key={user.id}>
              <div className={css.content}>
                <div className={css.person}>
                  <img
                    src={
                      user.photos.small != null
                        ? user.photos.small
                        : userDefault
                    }
                  />
                </div>
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
                        this.props.unfollow(user.id);
                      }}
                    >
                      <text>FOLLOW</text>
                    </button>
                  ) : (
                    <button
                      className={css.unfollowBn}
                      onClick={() => {
                        this.props.follow(user.id);
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
                  this.props.currentPage === p
                    ? `${css.item} ${css.activePage}`
                    : css.item
                }
                onClick={(e) => {
                  this.setPage(p);
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
  }
}
