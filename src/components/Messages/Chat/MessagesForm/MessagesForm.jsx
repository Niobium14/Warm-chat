import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../../utils/validators";
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
