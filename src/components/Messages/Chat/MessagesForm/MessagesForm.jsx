import React from "react";
import css from "./MessagesForm.module.css";
import { Field, reduxForm } from "redux-form";

const MessagesForm = (props) => {
  return (
    <form className={css.area} onSubmit={props.handleSubmit}>
      <Field
        className={css.textarea}
        component={"input"}
        name={"newMessage"}
        type="text"
        placeholder="Message..."
      />
      <button className={css.send}>SEND</button>
    </form>
  );
};

const ReduxMessagesForm = reduxForm({ form: "messages" })(MessagesForm);
export default ReduxMessagesForm;
