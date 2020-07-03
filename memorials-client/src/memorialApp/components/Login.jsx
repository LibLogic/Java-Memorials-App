import React, { Component } from "react";
import AuthenticationService from "../../api/AuthenticationService.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validLogin: -1,
      username: "Tom",
      password: "pass",
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  render(props) {
    return (
      <div className="container">
        <h1>Login</h1>
        {!this.state.validLogin && (
          <div className="alert alert-warning">Invalid Credentials</div>
        )}
        <form
          className="form-inline"
          onSubmit={this.loginClicked}
          style={{ display: "block" }}
        >
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
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </form>
      </div>
    );
  }

  loginClicked(e) {
    e.preventDefault();
    AuthenticationService.getJwtToken(this.state.username, this.state.password)
      .then((response) => {
        AuthenticationService.registerUser(
          this.state.username,
          response.data.token
        );
        this.props.setLoggedInStatus(true);
        this.props.history.push(`/search`);
      })
      .catch(() => {
        this.setState({ validLogin: false });
        this.props.setLoggedInStatus(false);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
}

export default Login;
