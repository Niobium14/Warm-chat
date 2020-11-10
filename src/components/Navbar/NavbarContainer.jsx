import * as axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import {
  myDataThunkCreator,
  logoutThunkCreator,
} from "../../redux/myReducers/auth-reducer";

class NavbarContainer extends Component {
  componentDidMount() {
    this.props.myDataThunkCreator();
  }
  render() {
    return <Navbar {...this.props}/>;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  myDataThunkCreator,
  logoutThunkCreator,
})(NavbarContainer);
