import React from "react";
import css from "./Preloader.module.css";
import preloader from "../../../img/preloader.svg";

const Preloader = () => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={preloader} className={css.preloader} />;
};

export default Preloader;
