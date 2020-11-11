import React from "react";
import { connect } from "react-redux";
import Uncos from "./Uncos";

let mapStateToProps = (state) => {
  return {
    uncos: state.newsPage.uncos,
  };
};
const UncosContainer = connect(mapStateToProps)(Uncos);
export default UncosContainer;
