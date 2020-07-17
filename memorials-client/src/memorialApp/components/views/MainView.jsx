import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../../store/";
import Coords from "../Coords";
// import Exports from "./SubjectDetails";
import SubjectDetails from "./SubjectDetails";

import Flowers from "../Flowers";

class MainView extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <Coords store={store} />
        <div>
          <div className="full-window">
            <SubjectDetails store={store} />
            {true && (
              <div>
                <div>
                  <img
                    style={{ marginBottom: "6px" }}
                    src={this.props.subjectData.graveInfo.stoneImg}
                    alt="Headstone"
                  />
                  <button
                    className="btn btn-sm btn-success flower"
                    onClick={this.addFlower}
                  >
                    Leave a Virtual Flower
                  </button>
                  <h6 className="loc-info">
                    {`${this.props.subjectData.cemeteryName}`}
                    <br />
                    {`${this.props.subjectData.city}, ${this.props.subjectData.state}`}
                  </h6>
                </div>
                <Flowers store={store} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    subjectData: {
      ...state.subjectData,
      cemeteryName: state.subjectData.cemeteryName,
      city: state.subjectData.city,
      state: state.subjectData.state,
      graveInfo: {
        ...state.subjectData.graveInfo,
        stoneImg: state.subjectData.graveInfo.stoneImg,
      },
    },
  };
};

export default connect(mapStateToProps)(MainView);
