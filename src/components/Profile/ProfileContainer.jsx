import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  setUserProfile,
  getProfileThunkCreator,
} from "../../redux/myRedusers/profile-reduser";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfileThunkCreator(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

// REDIRECT
export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfileThunkCreator,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
