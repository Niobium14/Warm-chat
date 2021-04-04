/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators";
import { CreateField, Input } from "../../common/FormValidation/Field";
import css from "./LoginForm.module.css";

// MAX LENGTH
let maxLength30 = maxLength(30);
// let maxLength15 = maxLength(15);

interface PropsType {
  captchaUrl: null | string;
}
const LoginForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {CreateField("email", "text", Input, [required, maxLength30], "Email")}
      </div>
      <div>
        {CreateField(
          "password",
          "password",
          Input,
          [required, maxLength30],
          "Password"
        )}
      </div>
      {props.error && <div className={css.error}>{props.error}</div>}
      <div className={css.recall}>
        {CreateField("rememberMe", "checkbox", [], "input", null)}
        <label htmlFor="rememberMe" className={css.remember}>
          remember me
        </label>
      </div>
      {props.captchaUrl && (
        <div className={css.captchaForm}>
          <label htmlFor="captcha">
            <img src={props.captchaUrl} className={css.captchaImg} />
          </label>
          name, type, validate, component, placeholder
          {CreateField("captcha", "text", [required], Input, "Text from image")}
        </div>
      )}
      <button className={css.login}>Login</button>
    </form>
  );
};

const ReduxLoginForm = reduxForm<any, PropsType>({ form: "singIn" })(LoginForm);
export default ReduxLoginForm;
