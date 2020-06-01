import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: -1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        {!this.state.isLoggedIn && (
          <div className="alert alert-warning">Invalid Credentials</div>
        )}
        <form className="form-inline" style={{ display: "block" }}>
          User Name:
          <input
            className="form-control"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password:
          <input
            className="form-control"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-success" onClick={this.loginClicked}>
            Login
          </button>
        </form>
      </div>
    );
  }

  loginClicked() {
    if (this.state.username === "Tom" && this.state.password === "dummy") {
      AuthenticationService.registerUser(
        this.state.username,
        this.state.password
      );
      this.props.history.push(`/welcome/${this.state.username}`);
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  }

  handleChange(e) {
    //register user
    this.setState({ [e.target.name]: e.target.value });
  }
}

export default Login;
