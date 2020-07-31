import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../store";
import Coords from "./Coords";
import FlowerModal from "./FlowerModal";
import FBModal from "./FBModal";
import SubjectDetails from "./SubjectDetails";
import Flowers from "./Flowers";
import Poems from "./Poems";
import personIcon from "../images/personIcon.png";
import Person from "../images/person.png";
import headstoneIcon from "../images/headstoneIcon.png";

class MainView extends Component {
  constructor() {
    super();

    this.state = {
      leftBy: "",
      zoom: false,
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
                      <div>
                        <img
                          className={`headstone-img ${
                            this.state.zoom ? "image-zoom" : ""
                          }`}
                          src={this.props.subjectData.graveInfo.stoneImg}
                          alt="Headstone"
                          onClick={this.zoomImage}
                        />
                        <h6>
                          {`${this.props.subjectData.cemeteryName}`}
                          <br />
                          {`${this.props.subjectData.city}, ${this.props.subjectData.state}`}
                        </h6>
                        <Flowers
                          store={store}
                          showModal={this.props.showModal}
                          zoom={this.state.zoom}
                        />
                      </div>
                    )}

                    {this.state.personImage && (
                      <div
                        style={{
                          overflow: "hidden",
                        }}
                      >
                        <div className="poem-scroll">
                          <img
                            className="person-img"
                            src={
                              process.env.PUBLIC_URL +
                                this.props.subjectData.photos.main || Person
                            }
                            alt="person"
                          />
                          <Poems store={store} />
                        </div>
                      </div>
                    )}

                    <div className="icon-box">
                      {this.state.personInfoBox && (
                        <div className="person-icon-box">
                          <img
                            onClick={this.swapMainView}
                            className="person-icon"
                            src={personIcon}
                            alt="Person"
                          />
                        </div>
                      )}
                      {this.state.headstoneInfoBox && (
                        <div className="headstone-icon-box">
                          <img
                            onClick={this.swapMainView}
                            className="headstone-icon"
                            src={headstoneIcon}
                            alt="Headstone"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )) || <h3>Cemetery Not Found Here</h3>}
          </div>
        </div>
      </div>
    );
  }

  zoomImage = () => {
    this.setState({
      zoom: !this.state.zoom,
    });
  };

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
    let currentIndex = this.props.currentIndex;
    this.props.addFlower(leftBy, currentIndex);

    this.setState({
      leftBy: "",
    });
  };
}

const mapStateToProps = (state) => {
  return {
    ...state,
    currentIndex: state.currentIndex,
    showModal: state.showModal,
    subjectData: {
      ...state.subjectData,
      cemeteryName: state.subjectData.cemeteryName,
      city: state.subjectData.city,
      state: state.subjectData.state,
      photos: {
        ...state.subjectData.photos,
        main: state.subjectData.photos.main,
      },
      donors: {
        ...state.subjectData.donors,
        restHome: state.subjectData.donors.restHome,
        individual: [...state.subjectData.donors.individual],
      },
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
    addFlower: (leftBy, currentIndex) => {
      const action = {
        type: "ADD_FLOWER",
        currentIndex: currentIndex,
        showModal: false,
        leftBy: leftBy || "Anonymous",
        date: new Date().toLocaleDateString("en-US"),
        showFBModal: true,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
