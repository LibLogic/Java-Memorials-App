import React, { Component } from "react";
// import Routes { BrowserRouter as Routes } from "react-dom";
import "./todos.css";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className=" navbar navbar-expand-md navbar-dark bg-dark">
          <h2 className="navbar-brand">LibLogic</h2>
          <ul className="navbar-nav">
            <li className="nav-link">Home</li>
            <li className="nav-link">Todos</li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li className="nav-link">Login</li>
            <li className="nav-link">Logout</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
