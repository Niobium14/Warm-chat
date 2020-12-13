import React from "react";
import { reduxForm } from "redux-form";
import { maxLength, required } from "../../../../utils/validators";
import {
  CreateField,
  MessagesField,
} from "../../../common/FormValidation/Field";

let maxLength15 = maxLength(20);

type PropsType = {
  handleSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
};

const MessagesForm = (props: PropsType) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {CreateField(null, MessagesField, "newMessage", "text", "Message...", [
        required,
        maxLength15,
      ])}
    </form>
  );
};

const ReduxMessagesForm = reduxForm({ form: "messages" })(MessagesForm);
export default ReduxMessagesForm;
