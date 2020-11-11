import React from "react";
import css from "./News.module.css";
import BG from "./NewsBG/NewsBG";
import UncosContainer from "./Uncos/UncosContainer";

const News = (props) => {
  return (
    <div className={css.newsPage}>
      <BG />
      <UncosContainer />
    </div>
  );
};

export default News;
