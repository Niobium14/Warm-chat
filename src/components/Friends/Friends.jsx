/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import css from "./Friends.module.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import AllUsers from "./Content/AllUsers";
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";
const Friends = (props) => {
  return (
    <div className={!props.isFetching && css.friendsPage}>
        {props.isFetching ? (
          <Preloader />
        ) : (
          <AllUsers
            users={props.users}
            followingInProgress={props.followingInProgress}
            unfollowUserThunkCreator={props.unfollowUserThunkCreator}
            followUserThunkCreator={props.followUserThunkCreator}
          />
        )}
          <Paginator
            className={css.pages}
            currentPage={props.currentPage}
            setPage={props.setPage}
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
          />
      </div>
  );
};

export default compose(connect(null, {}), withAuthRedirect)(Friends);
