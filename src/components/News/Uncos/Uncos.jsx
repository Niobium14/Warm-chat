import React from "react";
import css from "./Uncos.module.css";
import UncosElement from "./UncosElement/UncosElement";

const Uncos = (props) => {
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
