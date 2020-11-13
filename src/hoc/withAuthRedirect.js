import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export function withAuthRedirect(Component) {
  class RedirectContainer extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/singIn"} />;
      return <Component {...this.props} />;
    }
  }
  let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
  });
  let ConnectedAuthContainer = connect(mapStateToPropsForRedirect)(
    RedirectContainer
  );
  return ConnectedAuthContainer;
}
