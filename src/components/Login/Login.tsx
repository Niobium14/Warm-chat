import React from "react";
import ReduxLoginForm from "./LoginForm/LoginForm";
import css from "./Login.module.css";
import { connect, ConnectedProps } from "react-redux";
import { loginThunkCreator } from "../../redux/myReducers/auth-reducer";
import { Redirect } from "react-router-dom";
import ErrorPage from "../common/Error/ErrorPage";
import { RootState } from "../../redux/redux-store";

// SUBMIT INTERFACE
export interface SubmitInterface {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
}

const Login: React.FC<mapStateToPropsType & mapDispatchPropsType> = (props) => {
  const onSubmit = (formData: SubmitInterface) => {
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

// MAP STATE ... TYPE
type mapStateToPropsType = {
  error: string;
  captchaUrl: any;
  isAuth: boolean;
};
// MAP DISPATCH ... TYPE
type mapDispatchPropsType = {
  loginThunkCreator: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void;
};
// MAP STATE
let mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    error: state.auth.error,
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { loginThunkCreator })(Login);
