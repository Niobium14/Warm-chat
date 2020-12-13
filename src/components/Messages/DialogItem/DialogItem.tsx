import React from "react";
import css from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

type PropsType = {
  id: string | number;
  name: React.ReactNode;
};

const DialogItem = (props: PropsType) => {
  let path = "/messages/" + props.id;

  return (
    <div className={css.dialog + " " + css.active}>
      <NavLink to={path} className={css.name} activeClassName={css.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
