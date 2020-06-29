import React, { Component } from "react";
import ParentsView from "./ParentsView";
import { DownArrow } from "./Controls";

class TopView extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <ParentsView history={this.props.history} />
        <DownArrow history={this.props.history} navTo={"main"} />
      </div>
    );
  }
}

export default TopView;
