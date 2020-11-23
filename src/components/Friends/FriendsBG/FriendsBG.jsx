import React, { Component } from "react";
import css from "./FriendsBG.module.css";
import bg from "../../../img/friends_bg1.png";

export default class BG extends Component {
  render() {
    return <img src={bg} className={css.bg} />;
  }
}
