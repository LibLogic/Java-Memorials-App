import React, { Component } from "react";
import { connect } from "react-redux";

class Coords extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="location-data">
          {/* <p>{`Grave Latitude: ${this.props.subjectData.latitude}`}</p>
          <p>{`Grave Longitude: ${this.props.subjectData.longitude}`}</p> */}

          <p>{`Grave Latitude: ${this.props.deviceLocation.latitude}`}</p>
          <p>{`Grave Longitude: ${this.props.deviceLocation.longitude}`}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    subjectData: {
      cemeteryName: state.subjectData.cemeteryName,
      // graveInfo: {
      latitude: state.subjectData.latitude,
      longitude: state.subjectData.longitude,
      stoneImg: state.subjectData.stoneImg,
      // },
    },
    deviceLocation: {
      latitude: state.deviceLocation.latitude,
      longitude: state.deviceLocation.longitude,
    },
  };
};

export default connect(mapStateToProps)(Coords);
