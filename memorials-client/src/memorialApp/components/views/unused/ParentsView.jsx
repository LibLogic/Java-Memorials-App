import React, { Component } from "react";
import { store } from "../../store";
import Exports from "./SubjectDetails";

class ParentsView extends Component {
  render() {
    return (
      <div>
        <div
          className="half-window"
          onClick={() => this.props.history.push("/view/main")}
        >
          <Exports.SmallSubjectDetails
            className="small-details"
            store={store}
          />
          <h2>Father</h2>
        </div>
        <div
          className="half-window"
          onClick={() => this.props.history.push("/view/main")}
        >
          <Exports.SmallSubjectDetails
            className="small-details"
            store={store}
          />
          <h2>Mother</h2>
        </div>
      </div>
    );
  }
}

export default ParentsView;
