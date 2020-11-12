import React from "react";
import css from "./Navbar.module.css";

const UserName = (props) => {
  return (
    <div className={css.singBlock}>
      <a className={css.login}>{props.login}</a> -
      <a className={css.logout} onClick={props.logoutThunkCreator}>
        Logout
      </a>
    </div>
  );
};

export default UserName;
