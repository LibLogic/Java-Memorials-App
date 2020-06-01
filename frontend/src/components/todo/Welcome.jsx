import React, { Component } from "react";
import { Link } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <p>
          Welcome {this.props.match.params.name}. You can manage your todos{" "}
          <Link to="/todos">here</Link>
        </p>
      </>
    );
  }
}

export default Welcome;
