import React, { Component } from "react";
import { SubjectDetails } from "./SubjectDetails";
import { UpArrow, DownArrow, LeftArrow, RightArrow } from "./Controls";

class MainView extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     subject: 'Tom "0" Hodgkinson',
  //     mother: 'Elizabeth "1" Hodgkinson',
  //     father: 'Thomas "1" Hodgkinson',
  //     siblings: {
  //       "-5": "Marcia Hodgkinson",
  //       "-4": "John Hodgkinson",
  //       "-3": "Daniel Hodgkinson",
  //       "-2": "Earl Hodgkinson",
  //       "1": "Thomas Hodgkinson",
  //       "2": "Catherine Hodgkinson",
  //     },
  //     children: {
  //       "5": "Tom Hodgkinson",
  //       "4": "Kelly Hodgkinson",
  //       "3": "Carlene Hodgkinson",
  //       "2": "Stephen Hodgkinson",
  //       "1": "Carleton Hodgkinson",
  //     },
  //   };
  // }
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <UpArrow history={this.props.history} navTo={"parents"} />
        <div>
          <LeftArrow history={this.props.history} navTo={"younger-sibling"} />
          <div className="full-window">
            <SubjectDetails />
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
