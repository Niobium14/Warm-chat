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
              store={props.store}
              messagesPage={props.store.getState().messagesPage}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              store={props.store}
              profilePage={props.store.getState().profilePage}
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
