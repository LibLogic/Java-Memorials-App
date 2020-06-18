import React, { Component } from "react";
import Parents from "./Parents";
import { DownArrow } from "./Controls";

class TopView extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <Parents history={this.props.history} />
        <DownArrow history={this.props.history} navTo={"main"} />
      </div>
    );
  }
}

export default TopView;
