import React, { Component } from "react";

export class UpArrow extends Component {
  render() {
    return (
      <p
        className="arrow up-arrow"
        onClick={() => this.props.history.push(this.props.navTo)}
      >
        {"<"}
      </p>
    );
  }
}

export class DownArrow extends Component {
  render() {
    return (
      <p
        className="arrow down-arrow"
        onClick={() => this.props.history.push(this.props.navTo)}
      >
        {"<"}
      </p>
    );
  }
}

export class LeftArrow extends Component {
  render() {
    return (
      <p
        className="arrow left-arrow"
        onClick={() => this.props.history.push(this.props.navTo)}
      >
        {"<"}
      </p>
    );
  }
}

export class RightArrow extends Component {
  render() {
    return (
      <p
        className="arrow right-arrow"
        onClick={() => this.props.history.push(this.props.navTo)}
      >
        {"<"}
      </p>
    );
  }
}
