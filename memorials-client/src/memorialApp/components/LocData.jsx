import React, { Component } from "react";
import { connect } from "react-redux";
import LocationService from "../api/locationService";

class LocData extends Component {
  constructor(props) {
    super(props);

    this.showPosition = this.showPosition.bind(this);

    if (navigator.geolocation) {
      this.getWatch();
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  render() {
    return (
      <div className="location-data">
        <button className="btn btn-sm btn-success" onClick={this.getWatch}>
          Actual Location (Reset)
        </button>
        <p>{`Device Latitude: ${this.props.deviceLocation.latitude}`}</p>
        <p>{`Device Longitude: ${this.props.deviceLocation.longitude}`}</p>
        <p>{`Country: ${this.props.deviceLocation.cemeteryCountry}`}</p>
        <p>{`State: ${this.props.deviceLocation.cemeteryState}`}</p>
        <p>{`City: ${this.props.deviceLocation.cemeteryCity}`}</p>
        <p>{`County: ${this.props.deviceLocation.cemeteryCounty}`}</p>
      </div>
    );
  }

  getWatch = () => {
    this.props.enableRecordButton();
    navigator.geolocation.getCurrentPosition(this.showPosition);
    // navigator.geolocation.watchPosition(this.showPosition);
  };

  showPosition = (position) => {
    LocationService.getLocationInfo(
      position.coords.latitude,
      position.coords.longitude
    ).then((response) => {
      let cemeteryCountry =
        response.data.countryName === "United States of America"
          ? "United States"
          : response.data.countryName;
      let deviceLocationResponse = {
        latitude: response.data.latitude.toFixed(5),
        longitude: response.data.longitude.toFixed(5),
        cemeteryCity: response.data.city,
        cemeteryState: response.data.principalSubdivision,
        cemeteryCounty: response.data.localityInfo.administrative[2].name,
        cemeteryCountry: cemeteryCountry,
      };
      this.props.setDeviceLocation(deviceLocationResponse);
    });
  };
}

const mapStateToProps = (state) => {
  return {
    deviceLocation: {
      latitude: state.deviceLocation.latitude,
      longitude: state.deviceLocation.longitude,
      cemeteryCountry: state.deviceLocation.cemeteryCountry,
      cemeteryState: state.deviceLocation.cemeteryState,
      cemeteryCity: state.deviceLocation.cemeteryCity,
      cemeteryCounty: state.deviceLocation.cemeteryCounty,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDeviceLocation: (deviceLocationResponse) => {
      const action = {
        type: "SET_TO_DEVICE_LOCATION",
        deviceLocation: deviceLocationResponse,
        firstName: "",
        middleName: "",
        lastName: "",
        maidenName: "",
        birthYear: "",
        deathYear: "",
        cemeteryName: "",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocData);
