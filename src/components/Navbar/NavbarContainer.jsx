import * as axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { myDataThunkCreator } from "../../redux/myRedusers/auth-reduser";
import { authAPI } from "../../api/api";

class NavbarContainer extends Component {
  componentDidMount() {
    this.props.myDataThunkCreator();
  }
  render() {
    return <Navbar {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { myDataThunkCreator })(
  NavbarContainer
);
