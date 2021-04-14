import { connect, ConnectedProps } from "react-redux";
import {
  actions,
  getUsersThunkCreator,
  setPageThunkCreator,
  unfollowUserThunkCreator,
  followUserThunkCreator,
} from "../../redux/myReducers/friends-reducer";
import React, { Component } from "react";
import Friends from "./Friends";
import {
  checkIsFetching,
  getCurrentPage,
  getError,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  setFollowingInProgress,
} from "../../redux/selectors/users-selector";
import ErrorPage from "../common/Error/ErrorPage";
import { RootState } from "../../redux/redux-store";
import { usersType } from "../../types/types";

const follow = actions.follow;
const unfollow = actions.unfollow;
const toggleIsFetching = actions.toggleIsFetching;
const toggleFollowingProgress = actions.toggleFollowingProgress;

let mapStateToProps = (state: RootState): MapStatePropsType => {
  return {
    error: getError(state),
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: checkIsFetching(state),
    followingInProgress: setFollowingInProgress(state),
  };
};

type MapDispatchPropsType = {
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void;
  unfollowUserThunkCreator: (userId: number) => void;
  followUserThunkCreator: (userId: number) => void;
  setPageThunkCreator: (pageNumber: number, pageSize: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
  toggleFollowingProgress: (
    followingInProgress: boolean,
    userId: number,
    isFetching: boolean
  ) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

type MapStatePropsType = {
  error: string;
  users: Array<usersType>;
  pageSize: number;
  isFetching: boolean;
  currentPage: number;
  totalUsersCount: number;
  followingInProgress: Array<number>;
};

type PropsFromRedux = ConnectedProps<typeof connector>;
const connector = connect<MapStatePropsType, MapDispatchPropsType, RootState>(
  mapStateToProps,
  {
    follow,
    unfollow,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunkCreator,
    setPageThunkCreator,
    unfollowUserThunkCreator,
    followUserThunkCreator,
  }
);
type PropsType = PropsFromRedux;

class FriendsContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  setPage = (pageNumber: number) => {
    this.props.setPageThunkCreator(pageNumber, this.props.pageSize);
  };

  render() {
    if (this.props.error) {
      return <ErrorPage error={this.props.error} />;
    }
    return (
      <Friends
        setPage={this.setPage}
        users={this.props.users}
        follow={this.props.follow}
        pageSize={this.props.pageSize}
        unfollow={this.props.unfollow}
        isFetching={this.props.isFetching}
        currentPage={this.props.currentPage}
        totalUsersCount={this.props.totalUsersCount}
        toggleIsFetching={this.props.toggleIsFetching}
        followingInProgress={this.props.followingInProgress}
        followUserThunkCreator={this.props.followUserThunkCreator}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        unfollowUserThunkCreator={this.props.unfollowUserThunkCreator}
      />
    );
  }
}

export default connector(FriendsContainer);
