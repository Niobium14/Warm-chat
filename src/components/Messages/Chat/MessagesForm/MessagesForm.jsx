import React from "react";
import css from "./MessagesForm.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../../validation/validation";
import { MessagesField } from "../../../common/FormValidation/Field";

let maxLength15 = maxLength(20);


const MessagesForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={MessagesField}
        name={"newMessage"}
        type="text"
        placeholder="Message..."
        validate={[required, maxLength15]}
      />
    </form>
  );
};

const ReduxMessagesForm = reduxForm({ form: "messages" })(MessagesForm);
export default ReduxMessagesForm;
