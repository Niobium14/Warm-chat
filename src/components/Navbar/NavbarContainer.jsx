import * as axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { setUserData } from "../../redux/myRedusers/auth-reduser";
import { usersAPI } from "../../api/api";

class NavbarContainer extends Component {
  componentDidMount() {
    usersAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        this.props.setUserData(id, email, login);
      }
    });
  }
  render() {
    return <Navbar {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setUserData })(NavbarContainer);
