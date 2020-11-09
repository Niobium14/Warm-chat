import React from "react";
import ReduxLoginForm from "./LoginForm/LoginForm";
import css from "./Login.module.css";

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1 className={css.singInName}>Sing In</h1>
      <ReduxLoginForm onSubmit={onSubmit} {...props} />
    </div>
  );
};

export default Login;
