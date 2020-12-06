import React from "react";
import css from "./Error.module.css";

export const RedError = ({ error }) => {
  return <div className={css.red}>{error}</div>;
};
export const GreenError = ({ error }) => {
  return <div className={css.green}>{error}</div>;
};
export const PurpleError = ({ error }) => {
  return <div className={css.purple}>{error}</div>;
};
export const BlueError = ({ error }) => {
  return <div className={css.blue}>{error}</div>;
};

const ModalError = ({ color, error }) => {
  if (color === "red") {
    return <RedError error={error} />;
  } else if (color === "blue") {
    return <BlueError error={error} />;
  } else if (color === "green") {
    return <GreenError error={error} />;
  } else if (color === "purple") {
    return <PurpleError error={error} />;
  }
};

export default ModalError;