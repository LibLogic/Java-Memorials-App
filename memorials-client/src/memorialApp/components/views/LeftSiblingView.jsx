import React, { Component } from "react";
import { store } from "../../store";
import Exports from "./SubjectDetails";
import { LeftArrow, RightArrow } from "./Controls";

class LeftSiblingView extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        {/* <UpArrow history={this.props.history} navTo={"main"} /> */}
        <div>
          <LeftArrow history={this.props.history} navTo={"/view/main"} />
          <div
            className="full-window"
            onClick={() => this.props.history.push("/view/main")}
          >
            <Exports.SubjectDetails store={store} />
            <h2>
              More<br></br>Photos
            </h2>
          </div>
          <RightArrow history={this.props.history} navTo={"older-sibling"} />
        </div>
      </div>
    );
  }
}

export default LeftSiblingView;
