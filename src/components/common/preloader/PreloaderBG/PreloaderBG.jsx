import React from "react";
import css from "./PreloaderBG.module.css";
import white from "../../../../img/Just-white-square.png";

const PreloaderBG = () => {
  return <img src={white} className={css.white} />;
};

export default PreloaderBG;
