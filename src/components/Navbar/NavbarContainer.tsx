import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import Navbar from "./Navbar";
import {
  myDataThunkCreator,
  logoutThunkCreator,
} from "../../redux/myReducers/auth-reducer";
import { checkAuth, getLogin } from "../../redux/selectors/auth-selector";
import { RootState } from "../../redux/redux-store";

type mapStateToPropsType = {
  isAuth: boolean;
  login: null | string;
};

let mapStateToProps = (state: RootState): mapStateToPropsType => ({
  isAuth: checkAuth(state),
  login: getLogin(state),
});

type PropsFromRedux = ConnectedProps<typeof connector>;
const connector = connect(mapStateToProps, {
  myDataThunkCreator,
  logoutThunkCreator,
});
type PropsType = PropsFromRedux;

class NavbarContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.myDataThunkCreator();
  }
  render() {
    return <Navbar {...this.props} />;
  }
}

export default connector(NavbarContainer);
