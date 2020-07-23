import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../store";
import Coords from "./Coords";
// import { UpArrow } from "./Controls";
import FlowerModal from "./FlowerModal";
import FBModal from "./FBModal";
import SubjectDetails from "./SubjectDetails";
import Flowers from "./Flowers";
import personIcon from "../images/personIcon.png";
import Person from "../images/person.png";
import headstoneIcon from "../images/headstoneIcon.png";

class MainView extends Component {
  constructor() {
    super();

    this.state = {
      leftBy: "",
      personInfoBox: true,
      headstoneImage: true,
      headstoneInfoBox: false,
      personImage: false,
    };
  }

  render() {
    return (
      <div className="container">
        <Coords store={store} />
        {/* <UpArrow history={this.props.history} navTo={"/view/family"} /> */}
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
                    {this.state.headstoneImage && (
                      <img
                        className="headstone-img"
                        src={this.props.subjectData.graveInfo.stoneImg}
                        alt="Headstone"
                      />
                    )}
                    {this.state.personImage && (
                      <img className="person-img" src={Person} alt="person" />
                    )}
                    <div className="icon-box">
                      {this.state.personInfoBox && (
                        <div className="person-icon-box">
                          <img
                            onDoubleClick={this.swapMainView}
                            className="person-icon"
                            src={personIcon}
                            alt="Person"
                          />
                        </div>
                      )}
                      {this.state.headstoneInfoBox && (
                        <div className="headstone-icon-box">
                          <img
                            onDoubleClick={this.swapMainView}
                            className="headstone-icon"
                            src={headstoneIcon}
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
    this.setState({
      personInfoBox: !this.state.personInfoBox,
      headstoneImage: !this.state.headstoneImage,
      headstoneInfoBox: !this.state.headstoneInfoBox,
      personImage: !this.state.personImage,
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
