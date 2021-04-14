/* eslint-disable eqeqeq */
import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
  updateCommentThunkCreator,
  saveProfileThunkCreator,
  savePhotoThunkCreator,
} from "../../redux/myReducers/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getError,
  getUserJobComment,
  getUserProfile,
  getUserStatus,
  getFetching,
} from "../../redux/selectors/profile-selector";
import { checkAuth, getUserId } from "../../redux/selectors/auth-selector";
import ErrorPage from "../common/Error/ErrorPage";

let mapStateToProps = (state) => ({
  isFetching: getFetching(state),
  jobComment: getUserJobComment(state),
  error: getError(state),
  profile: getUserProfile(state),
  status: getUserStatus(state),
  isAuth: checkAuth(state),
  authorizedUserId: getUserId(state),
});

const connector = connect(mapStateToProps, {
  getProfileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
  updateCommentThunkCreator,
  savePhotoThunkCreator,
  saveProfileThunkCreator,
});

class ProfileContainer extends Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
    if (this.props.error != prevProps.error) {
      this.refreshProfile();
    }
  }
  searchBarProps = {
    // make sure all required component's inputs/Props keys&types match
    profile: this.props.profile,
  };
  render() {
    if (this.props.error) {
      return <ErrorPage error={this.props.error} />;
    }
    return (
      <Profile
        isFetching={this.props.isFetching}
        error={this.props.error}
        savePhoto={this.props.savePhotoThunkCreator}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        jobComment={this.props.jobComment}
        status={this.props.status}
        updateStatus={this.props.updateStatusThunkCreator}
        updateComment={this.props.updateCommentThunkCreator}
        saveProfile={this.props.saveProfileThunkCreator}
      />
    );
  }
}

// REDIRECT
export default compose(
  connector,
  withRouter,
  withAuthRedirect
)(ProfileContainer);
