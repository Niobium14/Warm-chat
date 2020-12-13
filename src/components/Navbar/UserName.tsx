/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import css from "./Navbar.module.css";

type PropsType = {
  login: React.ReactNode;
  logoutThunkCreator:
    | ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void)
    | undefined;
};

const UserName = (props: PropsType) => {
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
