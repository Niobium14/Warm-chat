/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import css from "./UncosElement.module.css";

type PropsType = {
  img: string | undefined;
  title: React.ReactNode;
  event: React.ReactNode;
};

const UncosElement = (props: PropsType) => {
  return (
    <div className={css.element}>
      <img src={props.img} />
      <div className={css.data}>
        <div className={css.title}>{props.title}</div>
        <div className={css.event}>{props.event}</div>
      </div>
    </div>
  );
};

export default UncosElement;
