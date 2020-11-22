/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import css from "./Gradient.module.css";

export const TwoGradient = ({background1, background2}) => {
  return (
    <div className={css.background}>
      <img src={background1} className={css.background1} />
      <img src={background2} className={css.background2} />
    </div>
  );
};

export const OneGradient = ({background}) => {
  return (
    <div className={css.background}>
      <img src={background} className={css.background2} />
    </div>
  );
};

