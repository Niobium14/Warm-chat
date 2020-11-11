import * as axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import {
  myDataThunkCreator,
  logoutThunkCreator,
} from "../../redux/myReducers/auth-reducer";
import { checkAuth, getLogin } from "../../redux/selectors/auth-selector";

class NavbarContainer extends Component {
  componentDidMount() {
    this.props.myDataThunkCreator();
  }
  render() {
    return <Navbar {...this.props}/>;
  }
}

let mapStateToProps = (state) => ({
  isAuth: checkAuth(state),
  login: getLogin(state),
});

export default connect(mapStateToProps, {
  myDataThunkCreator,
  logoutThunkCreator,
})(NavbarContainer);
