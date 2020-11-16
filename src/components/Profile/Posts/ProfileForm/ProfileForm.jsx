import React from "react";
import { reduxForm } from "redux-form";
import { maxLength, required } from "../../../../utils/validators";
import {
  CreateField,
  ProfileField,
} from "../../../common/FormValidation/Field";
import css from "./ProfileForm.module.css";

// MAX LENGTH
let maxLength15 = maxLength(20);

const ProfileForm = (props) => {
  return (
    <form className={css.profileArea} onSubmit={props.handleSubmit}>
      <div className={css.add}>Add new post</div>
      {CreateField(null, ProfileField, "newPostText", "text", "What's new?", [
        required,
        maxLength15,
      ])}
    </form>
  );
};

// REDUX FORM
const ReduxProfileForm = reduxForm({ form: "posts" })(ProfileForm);
export default ReduxProfileForm;
