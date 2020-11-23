import React from "react";
import css from "./Preloader.module.css";
import preloader from "../../../img/preloader.svg";
import PreloaderBG from "./PreloaderBG/PreloaderBG";

const Preloader = () => {
  return (
    <div className="">
      <img src={preloader} className={css.preloader} />
      <PreloaderBG />
    </div>
  );
};

export default Preloader;
