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
  getUserJobComment,
  getUserProfile,
  getUserStatus,
} from "../../redux/selectors/profile-selector";
import { checkAuth, getUserId } from "../../redux/selectors/auth-selector";

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
  }
  render() {
    return (
      <Profile
        {...this.props}
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

let mapStateToProps = (state) => ({
  jobComment: getUserJobComment(state),
  profile: getUserProfile(state),
  status: getUserStatus(state),
  isAuth: checkAuth(state),
  authorizedUserId: getUserId(state),
});

// REDIRECT
export default compose(
  connect(mapStateToProps, {
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    updateCommentThunkCreator,
    savePhotoThunkCreator,
    saveProfileThunkCreator,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
