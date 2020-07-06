import React, { Component } from "react";
import { connect } from "react-redux";
import locationService from "../../api/locationService";

class LocData extends Component {
  constructor() {
    super();
    getDeviceCoords();
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="location-data">
          <p>{`Device Latitude: ${this.props.deviceLocation.latitude}`}</p>
          <p>{`Device Longitude: ${this.props.deviceLocation.longitude}`}</p>
          <p>{`Country: ${this.props.subjectData.country}`}</p>
          <p>{`State: ${this.props.subjectData.state}`}</p>
          <p>{`City: ${this.props.subjectData.city}`}</p>
          <p>{`County: ${this.props.subjectData.county}`}</p>
        </div>
      </div>
    );
  }
}

const getDeviceCoords = () => {
  const showPosition = (position) => {
    locationService
      .getLocationInfo(position.coords.latitude, position.coords.longitude)
      .then((response) => {
        console.log(response.data.city);
        console.log(response.data.principalSubdivision);
        console.log(response.data.localityInfo.informative[2].name);
        console.log(response.data.countryName);
      });
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

const mapStateToProps = (state) => {
  return {
    subjectData: {
      country: state.subjectData.country,
      state: state.subjectData.state,
      city: state.subjectData.city,
      county: state.subjectData.county,
    },
    deviceLocation: {
      latitude: state.deviceLocation.latitude,
      longitude: state.deviceLocation.longitude,
    },
  };
};

export default connect(mapStateToProps)(LocData);
