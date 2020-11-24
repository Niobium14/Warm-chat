/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import css from "./Friends.module.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { AllUsers } from "./Content/AllUsers";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";

function Friends({
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  unfollowUserThunkCreator,
  followUserThunkCreator,
  currentPage,
  setPage,
  isFetching,
}) {
  return (
    <div className={!isFetching && css.friendsPage}>
      {isFetching ? (
        <Preloader />
      ) : (
        AllUsers(
          users,
          followingInProgress,
          unfollowUserThunkCreator,
          followUserThunkCreator
        )
      )}
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        setPage={setPage}
      />
    </div>
  );
}

export default compose(connect(null, {}), withAuthRedirect)(Friends);
