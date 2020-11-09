import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../validation/validation";
import { SingInField } from "../../common/FormValidation/Field";
import css from "./LoginForm.module.css";

let maxLength12 = maxLength(12);
let maxLength8 = maxLength(8);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={SingInField}
          name={"login"}
          type="text"
          placeholder="login"
          validate={[required, maxLength12]}
        />
      </div>
      <div>
        <Field
          component={SingInField}
          name={"password"}
          type="text"
          placeholder="password"
          validate={[required, maxLength8]}
        />
      </div>
      <div className={css.recall}>
        <Field
          id="recall"
          component={"input"}
          type={"checkbox"}
          name={"recall"}
        />
        <label className={css.remember} for="recall">
          remember me
        </label>
      </div>
      <button className={css.login}>Login</button>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "singIn" })(LoginForm);
export default ReduxLoginForm;
