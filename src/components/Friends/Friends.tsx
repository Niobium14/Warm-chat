/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import css from "./Friends.module.css";
import { compose } from "redux";
import { usersType } from "../../types/types";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { AllUsers } from "./Content/AllUsers";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";

type PropsType = {
  setPage: (pageNumber: number) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  unfollowUserThunkCreator: (userId: number) => void;
  followUserThunkCreator: (userId: number) => void;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: Array<usersType>;
  followingInProgress: Array<number>;
  isFetching: boolean;

};

function Friends(props: PropsType) {
  let fetching = props.isFetching;
  return (
    <div className={css.friendsPage}>
      {fetching ? (
        <Preloader />
      ) : (
        <>
          <AllUsers
            users={props.users}
            followingInProgress={props.followingInProgress}
            unfollowUserThunkCreator={props.unfollowUserThunkCreator}
            followUserThunkCreator={props.followUserThunkCreator}
          />
          <Paginator
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            setPage={props.setPage}
          />
        </>
      )}
    </div>
  );
}

export default compose(withAuthRedirect)(Friends);
