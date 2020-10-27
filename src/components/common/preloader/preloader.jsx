import React from "react";
import css from "./preloader.module.css"
import preloader from "../../../img/preloader.svg";

const Preloader = () => {
  return <img src={preloader} className={css.preloader} />;
};

export default Preloader;
