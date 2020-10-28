import React from "react";
import css from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from '../../img/header_logo.png'

const Navbar = (props) => {
  return (
    <header className={css.header}>
      <img src={logo} className={css.logo} />
      <nav className={css.nav}>
        <div className={css.item}>
          <NavLink to="/profile" activeClassName={css.activeLink}>
            Profile
          </NavLink>
        </div>
        <div className={`${css.item} ${css.active}`}>
          <NavLink to="/messages" activeClassName={css.activeLink}>
            Messages
          </NavLink>
        </div>
        <div className={css.item}>
          <NavLink to="/friends" activeClassName={css.activeLink}>
            Friends
          </NavLink>
        </div>
        <div className={css.item}>
          <NavLink to="/news" activeClassName={css.activeLink}>
            News
          </NavLink>
        </div>
        <div className={css.item}>
          <NavLink to="/music" activeClassName={css.activeLink}>
            Music
          </NavLink>
        </div>
        <div className={css.singBlock}>
          {props.isAuth ? (
            <a className={css.login}>{props.login}</a>
          ) : (
            <NavLink to="/singIn" activeClassName={css.activeLink}>
              Sing in
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
