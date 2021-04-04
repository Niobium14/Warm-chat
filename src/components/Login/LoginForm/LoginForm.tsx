/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators";
import { createField, Input } from "../../common/FormValidation/Field";
import { SubmitInterface } from "../Login";
import css from "./LoginForm.module.css";

// MAX LENGTH
let maxLength30 = maxLength(30);

interface PropsInterface {
  captchaUrl: null | string;
}
const LoginForm: React.FC<
  InjectedFormProps<SubmitInterface, PropsInterface> & PropsInterface
> = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<SubmitInterfaceKeys>("email", "text", [required, maxLength30], Input, "Email")}
      </div>
      <div>
        {createField<SubmitInterfaceKeys>(
          "password",
          "password",
          [required, maxLength30],
          Input,
          "Password"
        )}
      </div>
      {props.error && <div className={css.error}>{props.error}</div>}
      <div className={css.recall}>
        {createField<SubmitInterfaceKeys>("rememberMe", "checkbox", [], "input", undefined)}
        <label htmlFor="rememberMe" className={css.remember}>
          remember me
        </label>
      </div>
      {props.captchaUrl && (
        <div className={css.captchaForm}>
          <label htmlFor="captcha">
            <img src={props.captchaUrl} className={css.captchaImg} />
          </label>
          {createField<SubmitInterfaceKeys>("captcha", "text", [required], Input, "Text from image")}
        </div>
      )}
      <button className={css.login}>Login</button>
    </form>
  );
};

// KEYS
type SubmitInterfaceKeys = Extract<keyof SubmitInterface, string>;

// MAIN REDUX FORM
const ReduxLoginForm = reduxForm<SubmitInterface, PropsInterface>({
  form: "singIn",
})(LoginForm);
export default ReduxLoginForm;
