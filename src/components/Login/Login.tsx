import React from "react";
import ReduxLoginForm from "./LoginForm/LoginForm";
import css from "./Login.module.css";
import { connect, ConnectedProps } from "react-redux";
import { loginThunkCreator } from "../../redux/myReducers/auth-reducer";
import { Redirect } from "react-router-dom";
import ErrorPage from "../common/Error/ErrorPage";
import { RootState } from "../../redux/redux-store";

type mapStateToPropsType = {
  error: string;
  captchaUrl: any;
  isAuth: boolean;
};

let mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    error: state.auth.error,
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

const connector = connect(mapStateToProps, { loginThunkCreator });
type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsType = PropsFromRedux;

const Login = (props: PropsType) => {
  const onSubmit = (formData: any) => {
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
  if (props.error) {
    return <ErrorPage error={props.error} />;
  }
  
  return (
    <div>
      <h1 className={css.singInName}>Sing In</h1>
      <ReduxLoginForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};

export default connector(Login);
