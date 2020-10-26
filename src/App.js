import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import FriendsContainer from "./components/Friends/FriendsContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div class="app-wrapper-content">
        <Route path="/messages" render={() => <MessagesContainer />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/friends" render={() => <FriendsContainer />} />
        <Route path="/news" />
        <Route path="/music" />
      </div>
    </div>
  );
};

export default App;
