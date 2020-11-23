import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators";
import { CreateField, SingInField } from "../../common/FormValidation/Field";
import css from "./LoginForm.module.css";

// MAX LENGTH
let maxLength30 = maxLength(30);
let maxLength15 = maxLength(15);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {CreateField(SingInField, "email", "text", "Email", [
          required,
          maxLength30,
        ])}
      </div>
      <div>
        {CreateField(SingInField, "password", "text", "password", [
          required,
          maxLength30,
        ])}
        <Field
          component={SingInField}
          name={"password"}
          type="text"
          placeholder="password"
          validate={[required, maxLength15]}
        />
      </div>
      {props.error && <div className={css.error}>{props.error}</div>}
      <div className={css.recall}>
        {CreateField(
          "rememberMe",
          "input",
          "rememberMe",
          "checkbox",
          null,
          null
        )}
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
