/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators";
import { SingInField } from "../../common/FormValidation/Field";
import css from "./LoginForm.module.css";

// MAX LENGTH
let maxLength30 = maxLength(30);
let maxLength15 = maxLength(15);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={SingInField}
          name={"email"}
          type="text"
          placeholder="Email"
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <Field
          component={SingInField}
          name={"password"}
          type="text"
          placeholder="password"
          type="password"
          validate={[required, maxLength15]}
        />
      </div>
      {props.error && <div className={css.error}>{props.error}</div>}
      <div className={css.recall}>
        <Field
          id="rememberMe"
          component="input"
          type="checkbox"
          name="rememberMe"
        />
        <label for="rememberMe" className={css.remember}>
          remember me
        </label>
      </div>
      <button className={css.login}>Login</button>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "singIn" })(LoginForm);
export default ReduxLoginForm;
