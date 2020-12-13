/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import css from "./Navbar.module.css";
import logo from "../../img/header_logo.png";
import NavElements from "./NavElements";
import UserName from "./UserName";

type PropsType = {
  isAuth: any;
  login: React.ReactNode;
  logoutThunkCreator:
    | ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void)
    | undefined;
};

const Navbar = (props: PropsType) => {
  return (
    <header className={props.isAuth && css.header}>
      <img src={logo} className={props.isAuth ? css.logo : css.warmChat} />
      {props.isAuth && <NavElements />}
      {props.isAuth && <UserName {...props} />}
    </header>
  );
};

export default Navbar;
