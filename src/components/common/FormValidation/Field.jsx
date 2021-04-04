/* eslint-disable no-unused-expressions */
import React from "react";
import { Field } from "redux-form";
import { maxLength, required } from "../../../utils/validators";
import css from "./Field.module.css";

// ProfileField MessagesField - textarea
// SingInField InformationField - input

export const Textarea = (props) => {
  //const {input, meta, child, ...restProps} = props;
  const { input, meta, ...restProps } = props;
  let hasError = meta.touched && meta.error;

  return (
    <>
      <div className={css.textareaMessageError}>
        {hasError && <span>{meta.error}</span>}
      </div>
      <div className={hasError ? css.textareaError : css.textarea}>
        <textarea
          className={css.mainTextarea}
          {...input}
          {...input}
          {...restProps}
        />
        <button className={hasError ? css.sendError : css.send}>SEND</button>
      </div>
    </>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  let hasError = meta.touched && meta.error;
  return (
    <>
      <div className={hasError ? css.inputAreaError : css.inputArea}>
        <input
          className={css.input}
          {...input}
          {...input}
          {...restProps}
        />
      </div>
      <div className={css.inputMessageError}>
        {hasError && <span>{meta.error}</span>}
      </div>
    </>
  );
};

export const CreateField = (name, type, validate, component, placeholder) => (
  <Field
    name={name}
    type={type}
    validate={validate}
    component={component}
    placeholder={placeholder}
  />
);
