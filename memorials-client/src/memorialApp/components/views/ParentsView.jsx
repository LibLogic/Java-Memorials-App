import React, { Component } from "react";
import { SmallSubjectDetails } from "./SubjectDetails";

class ParentsView extends Component {
  render() {
    return (
      <div>
        <div
          className="half-window"
          onClick={() => this.props.history.push("/view/main")}
        >
          <SmallSubjectDetails className="small-details" />
          <h2>Father</h2>
        </div>
        <div
          className="half-window"
          onClick={() => this.props.history.push("/view/main")}
        >
          <SmallSubjectDetails className="small-details" />
          <h2>Mother</h2>
        </div>
      </div>
    );
  }
}

export default ParentsView;
