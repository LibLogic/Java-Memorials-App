import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../store";
import Coords from "./Coords";
import Modal from "./Modal";
import FBModal from "./FBModal";
import SubjectDetails from "./SubjectDetails";

import Flowers from "./Flowers";

class MainView extends Component {
  constructor() {
    super();

    this.state = {
      leftBy: "",
    };
  }

  render() {
    return (
      <div className="container">
        <Coords store={store} />
        <div>
          <div className="full-window">
            <Modal
              leftBy={this.state.leftBy}
              processFlower={() => this.processFlower(this.state.leftBy)}
              store={store}
              handleChange={this.handleChange}
            />
            <FBModal store={store} />
            <SubjectDetails store={store} />
            {(this.props.subjectData.graveInfo.stoneImg && (
              <div>
                <div>
                  <img
                    style={{ marginBottom: "6px" }}
                    src={this.props.subjectData.graveInfo.stoneImg}
                    alt="Headstone"
                  />
                  <button
                    className="btn btn-sm btn-success flower"
                    onClick={this.props.showModal}
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
            )) || <h3>Nothing Found Here</h3>}
          </div>
        </div>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      leftBy: e.target.value,
    });
  };

  processFlower = (leftBy) => {
    this.props.addFlower(leftBy);
    this.setState({
      leftBy: "",
    });
    console.log("saving flower");
  };
}

const mapStateToProps = (state) => {
  return {
    subjectData: {
      ...state.subjectData,
      cemeteryName: state.subjectData.cemeteryName,
      city: state.subjectData.city,
      state: state.subjectData.state,
      showModal: state.subjectData.showModal,
      graveInfo: {
        ...state.subjectData.graveInfo,
        stoneImg: state.subjectData.graveInfo.stoneImg,
      },
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => {
      const action = {
        type: "OPEN_MODAL",
        showModal: true,
      };
      dispatch(action);
    },
    addFlower: (leftBy) => {
      const action = {
        type: "ADD_FLOWER",
        leftBy: leftBy,
        date: new Date().toLocaleDateString("en-US"),
        showModal: false,
        showFBModal: true,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
