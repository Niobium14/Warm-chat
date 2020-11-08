import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../../validation/validation";
import css from "./ProfileForm.module.css";

// MAX LENGTH 
let maxLength15 = maxLength(20);

const ProfileForm = (props) => {
  return (
    <form className={css.profileArea} onSubmit={props.handleSubmit}>
      <div className={css.add}>Add new post</div>
      <div className={css.area}>
        <Field
          className={css.textarea}
          component={"input"}
          name={"newPost"}
          type={"text"}
          placeholder="What's new?"
          validate={[required, maxLength15]}
        />
        <button className={css.send}>SEND</button>
      </div>
    </form>
  );
};

// REDUX FORM
const ReduxProfileForm = reduxForm({ form: "posts" })(ProfileForm);
export default ReduxProfileForm;
