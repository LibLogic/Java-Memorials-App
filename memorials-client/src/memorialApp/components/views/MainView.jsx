import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../../store/";
import Coords from "../Coords";
import Exports from "./SubjectDetails";
import { UpArrow, DownArrow, LeftArrow, RightArrow } from "./Controls";

class MainView extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <Coords store={store} />
        <UpArrow history={this.props.history} navTo={"parents"} />
        <div>
          <LeftArrow history={this.props.history} navTo={"younger-sibling"} />
          <div className="full-window">
            <Exports.SubjectDetails store={store} />
            {/* <div>
              <img src="./flower.png" alt="" />
            </div> */}
            {this.props.subjectData.city && (
              <div>
                <img
                  style={{ marginBottom: "6px" }}
                  src={this.props.subjectData.graveInfo.stoneImg}
                  alt="Headstone"
                />
                <h6>
                  {`${this.props.subjectData.cemeteryName}`}
                  <br />
                  {`${this.props.subjectData.city}, ${this.props.subjectData.state}`}
                </h6>
              </div>
            )}
          </div>
          <RightArrow history={this.props.history} navTo={"older-sibling"} />
        </div>
        <DownArrow history={this.props.history} navTo={"children"} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    subjectData: {
      cemeteryName: state.subjectData.cemeteryName,
      city: state.subjectData.city,
      state: state.subjectData.state,
      graveInfo: {
        stoneImg: state.subjectData.graveInfo.stoneImg,
      },
    },
  };
};

export default connect(mapStateToProps)(MainView);
