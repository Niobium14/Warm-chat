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
} from "../../redux/myRedusers/friends-reduser";
import React, { Component } from "react";
import Friends from "./Friends";
import Preloader from "../common/preloader/preloader";
import { usersAPI } from "../../api/api";

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
    users: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    toggleIsFetching: state.friendsPage.toggleIsFetching,
    followingInProgress: state.friendsPage.followingInProgress,
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
