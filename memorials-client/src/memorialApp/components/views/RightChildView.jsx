import React, { Component } from "react";
import { store } from "../../store";
import Exports from "./SubjectDetails";
import { UpArrow, LeftArrow, RightArrow } from "./Controls";

class RightChildView extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <UpArrow history={this.props.history} navTo={"main"} />
        <div>
          <LeftArrow history={this.props.history} navTo={"younger-child"} />
          <div
            className="full-window"
            onClick={() => this.props.history.push("/view/main")}
          >
            <Exports.SubjectDetails store={store} />
            <h2>
              Oldest<br></br>Child
            </h2>
          </div>
          <RightArrow history={this.props.history} navTo={"older-child"} />
        </div>
      </div>
    );
  }
}

export default RightChildView;
