import React from "react";
import { reduxForm } from "redux-form";
import { maxLength, required } from "../../../../utils/validators";
import { createField, Textarea } from "../../../common/FormValidation/Field";
import css from "../Chat.module.css";
let maxLength15 = maxLength(20);

type PropsType = {
  handleSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
};

const MessagesForm = (props: PropsType) => {
  return (
    <form onSubmit={props.handleSubmit} className={css.form}>
      {createField(
        "newMessage",
        "text",
        [required, maxLength15],
        Textarea,
        "Message..."
      )}
    </form>
  );
};

const ReduxMessagesForm = reduxForm({ form: "messages" })(MessagesForm);
export default ReduxMessagesForm;
