import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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

export default compose(connect(null, {}), withAuthRedirect)(News);
