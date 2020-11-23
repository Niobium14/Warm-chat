/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BG from "./FriendsBG/FriendsBG";
import css from "./Friends.module.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { AllUsers } from "./Content/AllUsers";
import AllPages from "./Content/AllPages";

function Friends({
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  unfollowUserThunkCreator,
  followUserThunkCreator,
  currentPage,
  setPage,
}) {
  return (
    <div className={css.friendsPage}>
      {AllUsers(
        users,
        followingInProgress,
        unfollowUserThunkCreator,
        followUserThunkCreator
      )}
      {AllPages(totalUsersCount, pageSize, currentPage, setPage)}
      <BG />
    </div>
  );
}

export default compose(connect(null, {}), withAuthRedirect)(Friends);
