import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../store";
import Coords from "./Coords";
import FlowerModal from "./FlowerModal";
import FBModal from "./FBModal";
import SubjectDetails from "./SubjectDetails";
import Flowers from "./Flowers";
import Poems from "./Poems";
import treeIcon from "../images/treeIcon.png";
import personIcon from "../images/personIcon.png";
import Person from "../images/defaultPerson.png";
import Headstone from "../images/defaultHeadstone.png";
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
      <div>
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

            <div className="flower-container">
              {this.state.headstoneImage && (
                <div>
                  {!this.state.zoom && (
                    <button
                      className="btn btn-sm btn-success flower-btn"
                      onClick={this.props.showModal}
                    >
                      Leave a Virtual Flower
                    </button>
                  )}
                  <img
                    className={`headstone-img ${
                      this.state.zoom ? "image-zoom" : ""
                    }`}
                    src={
                      process.env.PUBLIC_URL +
                        "/" +
                        this.props.subjectData.headStonePhoto || Headstone
                    }
                    alt="Headstone"
                    onClick={this.zoomImage}
                  />
                  <h6>
                    {`${this.props.subjectData.cemeteryName}`}
                    <br />
                    {`${this.props.subjectData.cemeteryCity}, ${this.props.subjectData.cemeteryState}`}
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
                  {Person && (
                    <div
                      style={{ position: "relative" }}
                      className="poem-scroll"
                    >
                      <div className="icon-box-left">
                        <img
                          className="tree-img"
                          src={treeIcon}
                          alt="Tree"
                          onClick={() => {
                            this.props.history.push("/view/family");
                          }}
                        />
                        <img
                          className="person-img"
                          src={
                            process.env.PUBLIC_URL +
                              this.props.subjectData.photos.photo || Person
                          }
                          alt="person"
                        />
                      </div>

                      <Poems store={store} />
                    </div>
                  )}
                </div>
              )}
              <div className="icon-box-right">
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
    this.props.addFlower(leftBy);

    this.setState({
      leftBy: "",
    });
  };
}

const mapStateToProps = (state) => {
  return {
    ...state,
    headStonePhoto: state.headStonePhoto,
    showModal: state.showModal,
    subjectData: {
      ...state.subjectData,
      cemeteryName: state.subjectData.cemeteryName,
      cemeteryCity: state.subjectData.cemeteryCity,
      cemeteryState: state.subjectData.cemeteryState,
      photos: {
        ...state.subjectData.photos,
        photo: state.subjectData.photos.photo,
      },
      sponsors: {
        ...state.subjectData.sponsors,
        sponsor: state.subjectData.sponsors.sponsor,
        donors: [...state.subjectData.sponsors.donors],
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
