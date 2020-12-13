import React from "react";
import css from "./Error.module.css";

type ErrorType = {
  modalError: string | null;
};

const RedError = (props: ErrorType) => {
  return <div className={css.red}>{props.modalError}</div>;
};
const GreenError = (props: ErrorType) => {
  return <div className={css.green}>{props.modalError}</div>;
};
const PurpleError = (props: ErrorType) => {
  return <div className={css.purple}>{props.modalError}</div>;
};
const BlueError = (props: ErrorType) => {
  return <div className={css.blue}>{props.modalError}</div>;
};

type ModalErrorType = {
  color: string;
  modalError: string | null;
};

const ModalError = (props: ModalErrorType) => {
  return (
    <div className="">
      {props.color === "red" && <RedError modalError={props.modalError} />}
      {props.color === "blue" && <BlueError modalError={props.modalError} />}
      {props.color === "green" && <GreenError modalError={props.modalError} />}
      {props.color === "purple" && (
        <PurpleError modalError={props.modalError} />
      )}
    </div>
  );
};

export default ModalError;
