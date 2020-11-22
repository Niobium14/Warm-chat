import "./App.css";
import FriendsContainer from "./components/Friends/FriendsContainer";
import { Route, withRouter } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import React, { Component } from "react";
import { initializeApp } from "./redux/myReducers/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { withSuspense } from "./hoc/withSuspense";

const Login = React.lazy(() => import("./components/Login/Login"));
const Music = React.lazy(() => import("./components/Music/Music"));
const News = React.lazy(() => import("./components/News/News"));
// APP
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <NavbarContainer />
        <div class="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/friends" render={() => <FriendsContainer />} />
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/news" render={withSuspense(News)} />
          <Route path="/music" render={withSuspense(Music)} />
          <Route path="/singIn" render={withSuspense(Login)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
