import React, { Component } from "react";
import css from "./MessagesBG.module.css";
import bg_3 from "../../../img/bg_3.png";

export default class MessagesBG extends Component {
  render() {
    return (
      <div className={css.module}>
        <img src={bg_3} className={css.bg_3} />
      </div>
    );
  }
}
