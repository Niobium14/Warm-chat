import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { maxLength, required } from "../../../../utils/validators";
import { createField, Textarea } from "../../../common/FormValidation/Field";
import { SubmitInterface } from "../Chat";
import css from "../Chat.module.css";
let maxLength15 = maxLength(20);

type PropsInterface = {};

const MessagesForm: React.FC<
  InjectedFormProps<SubmitInterface, PropsInterface> & PropsInterface
> = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit} className={css.form}>
      {createField<SubmitInterfaceKeys>(
        "newMessage",
        "text",
        [required, maxLength15],
        Textarea,
        "Message..."
      )}
    </form>
  );
};

// KEYS
type SubmitInterfaceKeys = Extract<keyof SubmitInterface, string>;

const ReduxMessagesForm = reduxForm<SubmitInterface, PropsInterface>({
  form: "messages",
})(MessagesForm);
export default ReduxMessagesForm;
