import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../../validation/validation";
import { ProfileField } from "../../../common/FormValidation/Field";
import css from "./ProfileForm.module.css";

// MAX LENGTH
let maxLength15 = maxLength(20);

const ProfileForm = (props) => {
  return (
    <form className={css.profileArea} onSubmit={props.handleSubmit}>
      <div className={css.add}>Add new post</div>
      <Field
        component={ProfileField}
        name={"newPost"}
        type={"text"}
        placeholder="What's new?"
        validate={[required, maxLength15]}
      />
    </form>
  );
};

// REDUX FORM
const ReduxProfileForm = reduxForm({ form: "posts" })(ProfileForm);
export default ReduxProfileForm;
