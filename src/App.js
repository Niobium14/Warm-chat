import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div class="app-wrapper-content">
        <Route
          path="/messages"
          render={() => (
            <Messages
              dispatch={props.dispatch}
              messagesPage={props.state.messagesPage}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              dispatch={props.dispatch}
              profilePage={props.state.profilePage}
            />
          )}
        />
        <Route path="/news" />
        <Route path="/music" />
        <Route path="/settings" />
      </div>
    </div>
  );
};

export default App;
