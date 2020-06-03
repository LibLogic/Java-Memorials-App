import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  render(props) {
    return (
      <div className="container">
        <h1>Login</h1>
        <form className="form-inline" style={{ display: "block" }}>
          {" "}
          User Name:{" "}
          <input
            className="form-control"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />{" "}
          Password:{" "}
          <input
            className="form-control"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button
            type="button"
            className="btn btn-success"
            onClick={this.loginClicked}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  loginClicked() {
    if (this.state.username === "Tom" && this.state.password === "pass") {
      AuthenticationService.registerUser(
        this.state.username,
        this.state.password
      );
      this.props.setLoggedInStatus(true);
      this.props.history.push("/welcome");
    } else {
      this.props.setLoggedInStatus(false);
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
}

export default Login;
