import React from "react";
import { Field, reduxForm } from "redux-form";
import css from "./LoginForm.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"input"}
          name={"login"}
          type="text"
          placeholder="login"
        />
      </div>
      <div>
        <Field
          component={"input"}
          name={"password"}
          type="text"
          placeholder="password"
        />
      </div>
      <div>
        <Field component={"input"} type={"checkbox"} name={"recall"} /> remember
        me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "singIn" })(LoginForm);
export default ReduxLoginForm;
