import React from "react";
import ReduxLoginForm from "./LoginForm/LoginForm";
import css from "./Login.module.css";
import { connect } from "react-redux";
import { loginThunkCreator } from "../../redux/myReducers/auth-reducer";
import { Redirect } from "react-router-dom";
import ErrorPage from "../common/Error/ErrorPage";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunkCreator(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  if (this.props.error) {
    return <ErrorPage error={this.props.error} />;
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
    error: state.auth.error,
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  loginThunkCreator,
})(Login);
