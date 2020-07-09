import React, { Component } from "react";
import { connect } from "react-redux";

class Coords extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="location-data">
          <p>{`Device Latitude: ${this.props.deviceLocation.latitude}`}</p>
          <p>{`Device Longitude: ${this.props.deviceLocation.longitude}`}</p>
          <p>{`Grave Latitude: ${this.props.subjectData.graveInfo.latitude}`}</p>
          <p>{`Grave Longitude: ${this.props.subjectData.graveInfo.longitude}`}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    subjectData: {
      cemeteryName: state.subjectData.cemeteryName,
      graveInfo: {
        latitude: state.subjectData.graveInfo.latitude,
        longitude: state.subjectData.graveInfo.longitude,
        stoneImg: state.subjectData.graveInfo.stoneImg,
      },
    },
    deviceLocation: {
      latitude: state.deviceLocation.latitude,
      longitude: state.deviceLocation.longitude,
    },
  };
};

export default connect(mapStateToProps)(Coords);
