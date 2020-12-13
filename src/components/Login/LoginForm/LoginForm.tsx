/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators";
import { CreateField, SingInField } from "../../common/FormValidation/Field";
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
        {CreateField(null, SingInField, "email", "text", "Email", [
          required,
          maxLength30,
        ])}
      </div>
      <div>
        {CreateField(null, SingInField, "password", "password", "password", [
          required,
          maxLength30,
        ])}
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
        <label htmlFor="rememberMe" className={css.remember}>
          remember me
        </label>
      </div>
      {props.captchaUrl && (
        <div className={css.captchaForm}>
          <label htmlFor="captcha">
            <img src={props.captchaUrl} className={css.captchaImg} />
          </label>
          {CreateField(
            "captcha",
            SingInField,
            "captcha",
            "text",
            "Text from image",
            [required]
          )}
        </div>
      )}
      <button className={css.login}>Login</button>
    </form>
  );
};

const ReduxLoginForm = reduxForm<any, PropsType>({ form: "singIn" })(LoginForm);
export default ReduxLoginForm;
