import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { RootState } from "../../redux/redux-store";
import { uncosType } from "../../redux/myReducers/news-reducer";
import { getUncos } from "../../redux/selectors/news-selector";
import css from "./News.module.css";
import Uncos from "./Uncos/Uncos";

type PropsType = {
  uncos: Array<uncosType>;
};

type mapStateToPropsType = {
  uncos: Array<uncosType>;
};

let mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    uncos: getUncos(state),
  };
};

const connector = connect(mapStateToProps);

const News = (props: PropsType) => {
  return (
    <div className={css.newsPage}>
      <Uncos uncos={props.uncos} />
    </div>
  );
};

export default compose(connector, withAuthRedirect)(News);
