import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../store";
import Coords from "./Coords";
import FlowerModal from "./FlowerModal";
import FBModal from "./FBModal";
import SubjectDetails from "./SubjectDetails";
import Flowers from "./Flowers";
import person from "../images/person.png";
import lgPerson from "../images/lg-person.png";
import headstone from "../images/headstone.png";

class MainView extends Component {
  constructor() {
    super();

    this.state = {
      leftBy: "",
      pib: true,
      hi: true,
      hib: false,
      pi: false,
    };
  }

  render() {
    return (
      <div className="container">
        <Coords store={store} />
        <div>
          <div className="full-window">
            <FlowerModal
              leftBy={this.state.leftBy}
              processFlower={this.processFlower}
              store={store}
              handleChange={this.handleChange}
            />
            <FBModal store={store} />
            <SubjectDetails store={store} />
            {(this.props.subjectData.graveInfo.stoneImg && (
              <div style={{ marginTop: "-14px" }}>
                <div>
                  <div className="image-box">
                    {this.state.hi && (
                      <img
                        className="headstone-img"
                        src={this.props.subjectData.graveInfo.stoneImg}
                        alt="Headstone"
                      />
                    )}
                    {this.state.pi && (
                      <img
                        className="subject-img"
                        src={lgPerson}
                        alt="person"
                      />
                    )}
                    <div className="icon-box">
                      {this.state.pib && (
                        <div className="person-icon-box">
                          <img
                            onDoubleClick={this.swapMainView}
                            className="person-icon"
                            src={person}
                            alt="Person"
                          />
                        </div>
                      )}
                      {this.state.hib && (
                        <div className="headstone-icon-box">
                          <img
                            onDoubleClick={this.swapMainView}
                            className="headstone-icon"
                            src={headstone}
                            alt="Headstone"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h6 className="loc-info">
                      {`${this.props.subjectData.cemeteryName}`}
                      <br />
                      {`${this.props.subjectData.city}, ${this.props.subjectData.state}`}
                    </h6>
                    <button
                      className="btn btn-sm btn-success flower-btn"
                      onClick={this.props.showModal}
                    >
                      Leave a Virtual Flower
                    </button>
                  </div>
                </div>
                <Flowers store={store} />
              </div>
            )) || <h3>Cemetery Not Found Here</h3>}
          </div>
        </div>
      </div>
    );
  }

  swapMainView = () => {
    console.log("swapMainView ran");
    this.setState({
      pib: !this.state.pib,
      hi: !this.state.hi,
      hib: !this.state.hib,
      pi: !this.state.pi,
    });
  };

  handleChange = (e) => {
    this.setState({
      leftBy: e.target.value,
    });
  };

  processFlower = (leftBy) => {
    let siteId = this.props.subjectData.siteId;
    this.props.addFlower(leftBy, siteId);

    this.setState({
      leftBy: "",
    });
  };
}

const mapStateToProps = (state) => {
  return {
    subjectData: {
      ...state.subjectData,
      siteId: state.subjectData.siteId,
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
    addFlower: (leftBy, siteId) => {
      const action = {
        type: "ADD_FLOWER",
        leftBy: leftBy || "Anonymous",
        date: new Date().toLocaleDateString("en-US"),
        showModal: false,
        showFBModal: true,
        siteId: siteId,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
