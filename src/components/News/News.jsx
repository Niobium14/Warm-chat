import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import css from "./News.module.css";
import UncosContainer from "./Uncos/UncosContainer";

const News = (props) => {
  return (
    <div className={css.newsPage}>
      <UncosContainer />
    </div>
  );
};

export default compose(connect(null, {}), withAuthRedirect)(News);
