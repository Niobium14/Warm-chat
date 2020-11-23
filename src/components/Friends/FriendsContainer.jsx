import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsersThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator,
  setPageThunkCreator,
} from "../../redux/myReducers/friends-reducer";
import React, { Component } from "react";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
import {
  checkIsFetching,
  checkToggleIsFetching,
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  setFollowingInProgress,
} from "../../redux/selectors/users-selector";

class FriendsContainer extends Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  setPage = (pageNumber) => {
    this.props.setPageThunkCreator(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Friends
            setPage={this.setPage}
            users={this.props.users}
            follow={this.props.follow}
            pageSize={this.props.pageSize}
            unfollow={this.props.unfollow}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            followingInProgress={this.props.followingInProgress}
            isFetching={this.props.isFetching}
            toggleIsFetching={this.props.toggleIsFetching}
            followUserThunkCreator={this.props.followUserThunkCreator}
            unfollowUserThunkCreator={this.props.unfollowUserThunkCreator}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: checkIsFetching(state),
    toggleIsFetching: checkToggleIsFetching(state),
    followingInProgress: setFollowingInProgress(state),
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsersThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator,
  setPageThunkCreator,
})(FriendsContainer);
