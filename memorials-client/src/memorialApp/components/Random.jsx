import React, { Component } from "react";
import { connect } from "react-redux";
// import LocationService from "../../api/locationService";

class Random extends Component {
  // constructor(props) {
  //   super(props);

  //   this.showPosition = this.showPosition.bind(this);

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.showPosition);
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // }

  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="saved-data">
          <button className="btn btn-sm btn-success">
            Get Saved User Coordinates
          </button>
          <p>{`Device Latitude: ${this.props.savedCoords.latitude}`}</p>
          <p>{`Device Longitude: ${this.props.savedCoords.longitude}`}</p>
          <button className="btn btn-sm btn-success">Submit to Form</button>
          {/* <p>{`Country: ${this.props.deviceLocation.country}`}</p>
          <p>{`State: ${this.props.deviceLocation.state}`}</p>
          <p>{`City: ${this.props.deviceLocation.city}`}</p>
          <p>{`County: ${this.props.deviceLocation.county}`}</p> */}
        </div>
      </div>
    );
  }

  //   showPosition = (position) => {
  //     LocationService.getLocationInfo(
  //       position.coords.latitude,
  //       position.coords.longitude
  //     ).then((response) => {
  //       let country =
  //         response.data.countryName === "United States of America"
  //           ? "United States"
  //           : response.data.countryName;
  //       let deviceLocationResponse = {
  //         latitude: response.data.latitude,
  //         longitude: response.data.longitude,
  //         city: response.data.city,
  //         state: response.data.principalSubdivision,
  //         county: response.data.localityInfo.informative[2].name,
  //         country: country,
  //       };
  //       this.props.setDeviceLocation(deviceLocationResponse);
  //     });
  //   };
}

const mapStateToProps = (state) => {
  return {
    savedCoords: {
      latitude: state.savedCoords.latitude,
      longitude: state.savedCoords.longitude,
      // country: state.randomCoords.country,
      // state: state.randomCoords.state,
      // city: state.randomCoordsa.city,
      // county: state.randomCoords.county,
      // cemeteryName: state.randomCoords.cemeteryName,
    },
    // subjectData: {
    //   country: state.subjectData.country,
    //   state: state.subjectData.state,
    //   city: state.subjectData.city,
    //   county: state.subjectData.county,
    //   cemeteryName: state.subjectData.cemeteryName,
    // },
    // deviceLocation: {
    //   latitude: state.deviceLocation.latitude,
    //   longitude: state.deviceLocation.longitude,
    //   country: state.deviceLocation.country,
    //   state: state.deviceLocation.state,
    //   city: state.deviceLocation.city,
    //   county: state.deviceLocation.county,
    // },
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setDeviceLocation: (deviceLocationResponse) => {
//       const action = {
//         type: "SET_DEVICE_LOCATION",
//         deviceLocation: deviceLocationResponse,
//       };
//       dispatch(action);
//     },
//   };
// };

export default connect(mapStateToProps)(Random);
