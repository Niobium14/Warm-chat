import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import Messages from "./components/Messages/Messages";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Route
            path="/messages"
            render={() => (
              <Messages dialogs={props.dialogs} messages={props.messages} />
            )}
          />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/news" />
          <Route path="/music" />
          <Route path="/settings" />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

// component={News}
// component={Music}
// component={Settings}
