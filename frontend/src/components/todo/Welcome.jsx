import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

class Welcome extends Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
    };

    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
  }
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <p>
          Welcome {sessionStorage.getItem("authenticatedUser")}. You can manage
          your todos <Link to="/todos">here</Link>
        </p>
        <p>Click here to get a customized welcome message.</p>
        <button
          className="btn btn-success"
          onClick={this.retrieveWelcomeMessage}
        >
          Get Welcome Message
        </button>
        <p></p>
        <p>{this.state.message}</p>
      </>
    );
  }

  retrieveWelcomeMessage() {
    HelloWorldService.executeHelloWorldPathService(
      sessionStorage.getItem("authenticatedUser")
    )
      .then((response) =>
        this.setState({
          message: response.data.message,
        })
      )
      .catch((error) => console.log("There was a problem"));
  }
}

export default Welcome;
