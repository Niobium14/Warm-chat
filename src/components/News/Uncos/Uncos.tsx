import React from "react";
import { uncosType } from "../../../redux/myReducers/news-reducer";
import css from "./Uncos.module.css";
import UncosElement from "./UncosElement/UncosElement";

type PropsType = {
  uncos: Array<uncosType>;
};

const Uncos = (props: PropsType) => {
  let uncosElement = props.uncos.map((element) => (
    <UncosElement
      title={element.title}
      img={element.img}
      event={element.event}
    />
  ));
  return <div className={css.uncos}>{uncosElement}</div>;
};

export default Uncos;
