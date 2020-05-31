import React, { Component } from "react";

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
      <div>
        {this.state.isLoggedIn === true && <div>Login Successful</div>}
        {!this.state.isLoggedIn && <div>Invalid Credentials</div>}
        User Name:
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }

  loginClicked() {
    if (this.state.username === "Tom" && this.state.password === "dummy") {
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
