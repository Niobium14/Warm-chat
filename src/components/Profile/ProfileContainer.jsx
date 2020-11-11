import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
} from "../../redux/myReducers/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getUserProfile,
  getUserStatus,
} from "../../redux/selectors/profile-selector";
import { checkAuth, getUserId } from "../../redux/selectors/auth-selector";

class ProfileContainer extends Component {
  componentDidMount() {
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
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatusThunkCreator}
      />
    );
  }
}

let mapStateToProps = (state) => ({
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
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
