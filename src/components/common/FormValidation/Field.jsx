/* eslint-disable no-unused-expressions */
import React from "react";
import { Field } from "redux-form";
import { maxLength, required } from "../../../utils/validators";
import css from "./Field.module.css";

export const ProfileField = ({ input, meta, ...props }) => {
  let hasError = meta.touched && meta.error;
  return (
    <>
      <div className={css.profileError}>
        {hasError && <span>{meta.error}</span>}
      </div>
      <div className={hasError ? css.profileAreaError : css.profileArea}>
        <textarea
          className={css.profileTextarea}
          {...input}
          {...meta}
          {...props}
        />
        <button className={hasError ? css.sendError : css.send}>SEND</button>
      </div>
    </>
  );
};
export const MessagesField = ({ input, meta, ...props }) => {
  let hasError = meta.touched && meta.error;
  return (
    <>
      <div className={css.messagesError}>
        {hasError && <span>{meta.error}</span>}
      </div>
      <div className={hasError ? css.messagesAreaError : css.messagesArea}>
        <textarea
          className={css.messagesTextarea}
          {...input}
          {...meta}
          {...props}
        />
        <button className={hasError ? css.sendMessagesError : css.send}>
          SEND
        </button>
      </div>
    </>
  );
};
export const SingInField = ({ input, meta, ...props }) => {
  let hasError = meta.touched && meta.error;
  return (
    <>
      <div className={hasError ? css.singInAreaError : css.singInArea}>
        <input className={css.singInTextarea} {...input} {...meta} {...props} />
      </div>
      <div className={css.singInError}>
        {hasError && <span>{meta.error}</span>}
      </div>
    </>
  );
};
export const InformationField = ({ input, meta, ...props }) => {
  return (
    <div className={css.InformationArea}>
      <input
        className={css.InformationTextarea}
        {...input}
        {...meta}
        {...props}
      />
    </div>
  );
};
export const CreateField = (
  id = null,
  component,
  name,
  type,
  placeholder,
  validate
) => (
  <Field
    id={id}
    component={component}
    name={name}
    type={type}
    placeholder={placeholder}
    validate={validate}
  />
);
