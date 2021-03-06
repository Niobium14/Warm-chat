import "./App.css";
import FriendsContainer from "./components/Friends/FriendsContainer";
import { Redirect, Route, withRouter } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Login from "./components/Login/Login";
import React, { Component } from "react";
import { initializeApp } from "./redux/myReducers/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import MessagesContainer from "./components/Messages/MessagesContainer";
import Preloader from "./components/common/Preloader/Preloader";
import { RootState } from "./redux/redux-store";

type MapStateType = ReturnType<typeof mapStateToProps>;

type MapDispatchType = {
  initializeApp: () => void;
};

const SuspendedProfile = withSuspense(ProfileContainer);

// APP
class App extends Component<MapDispatchType & MapStateType> {
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
        <div className="app-wrapper-content">
          <Route path="/" render={() => <Redirect to={"/profile"} />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route
            path="/friends"
            render={() => <FriendsContainer pageTitle="friends" />}
          />
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/singIn" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
