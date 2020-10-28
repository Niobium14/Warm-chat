import React from "react";
import "./App.css";
import FriendsContainer from "./components/Friends/FriendsContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <NavbarContainer />
      <div class="app-wrapper-content">
        <Route path="/messages" render={() => <MessagesContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/friends" render={() => <FriendsContainer />} />
        <Route path="/news" />
        <Route path="/music" />
      </div>
    </div>
  );
};

export default App;
