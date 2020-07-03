import React, { Component } from "react";
import { store } from "../../store/";
import Exports from "./SubjectDetails";
import { UpArrow, DownArrow, LeftArrow, RightArrow } from "./Controls";

class MainView extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <UpArrow history={this.props.history} navTo={"parents"} />
        <div>
          <LeftArrow history={this.props.history} navTo={"younger-sibling"} />
          <div className="full-window">
            <Exports.SubjectDetails store={store} />
            <h2>
              Main
              <br />
              Subject
            </h2>
          </div>
          <RightArrow history={this.props.history} navTo={"older-sibling"} />
        </div>
        <DownArrow history={this.props.history} navTo={"children"} />
      </div>
    );
  }
}

export default MainView;
