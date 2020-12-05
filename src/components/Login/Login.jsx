import React from "react";
import ReduxLoginForm from "./LoginForm/LoginForm";
import css from "./Login.module.css";
import { connect } from "react-redux";
import { loginThunkCreator } from "../../redux/myReducers/auth-reducer";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunkCreator(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha,
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1 className={css.singInName}>Sing In</h1>
      <ReduxLoginForm
        captchaUrl={props.captchaUrl}
        onSubmit={onSubmit}
        {...props}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  loginThunkCreator,
})(Login);