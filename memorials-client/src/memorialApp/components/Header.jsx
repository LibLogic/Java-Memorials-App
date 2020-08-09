import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className=" navbar navbar-expand-md navbar-dark bg-dark">
          <h2 className="navbar-brand">
            <Link to="/search">AngelCloud</Link>
          </h2>
          <ul className="navbar-nav">
            {this.props.loggedInStatus && (
              <li>
                <Link className="nav-link" to="/browse">
                  Browse
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!this.props.loggedInStatus && (
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}

            {this.props.loggedInStatus && (
              <li>
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
