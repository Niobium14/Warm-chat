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
        <Friends {...this.props} setPage={this.setPage} /> 
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
