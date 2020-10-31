import React from "react";
import "./App.css";
import FriendsContainer from "./components/Friends/FriendsContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Login from "./components/Login/Login";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <NavbarContainer />
      <div class="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/messages" render={() => <MessagesContainer />} />
        <Route path="/friends" render={() => <FriendsContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/singIn" render={() => <Login />} />
      </div>
    </div>
  );
};

export default App;
