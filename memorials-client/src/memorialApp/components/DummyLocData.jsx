import React, { Component } from "react";
import { connect } from "react-redux";
import LocationService from "../../api/locationService";
import { store } from "../store";

class DummyLocData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: 0,
    };
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="saved-data">
          <button className="btn btn-sm btn-success" onClick={this.incToNext}>
            Get Saved User Coordinates
          </button>
          <p>{`Device Latitude: ${
            this.props.savedCoords[this.state.key].latitude
          }`}</p>
          <p>{`Device Longitude: ${
            this.props.savedCoords[this.state.key].longitude
          }`}</p>
          {/* <button
            className="btn btn-sm btn-success"
            onClick={() => this.getLocArea(this.state.key)}
          >
            Submit to Form
          </button> */}
        </div>
      </div>
    );
  }

  incToNext = () => {
    let i = (this.state.key + 1) % store.getState().savedCoords.length;
    this.setState({
      key: i,
    });
    this.getLocArea(this.state.key);
  };

  getLocArea = (key) => {
    LocationService.getLocationInfo(
      this.props.savedCoords[key].latitude,
      this.props.savedCoords[key].longitude
    ).then((response) => {
      let country =
        response.data.countryName === "United States of America"
          ? "United States"
          : response.data.countryName;
      let dummyLocationResponse = {
        latitude: this.props.savedCoords[key].latitude,
        longitude: this.props.savedCoords[key].longitude,
        firstName: this.props.savedCoords[key].firstName,
        middleName: this.props.savedCoords[key].middleName,
        lastName: this.props.savedCoords[key].lastName,
        birthYear: this.props.savedCoords[key].birthYear,
        deathYear: this.props.savedCoords[key].deathYear,
        city: response.data.city,
        state: response.data.principalSubdivision,
        county: response.data.localityInfo.informative[2].name,
        country: country,
      };
      this.props.setLocArea(dummyLocationResponse);
    });
  };
}

const mapStateToProps = (state) => {
  return {
    savedCoords: state.savedCoords,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLocArea: (data) => {
      const action = {
        type: "SET_LOC_AREA",
        latitude: data.latitude,
        longitude: data.longitude,
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        birthYear: data.birthYear,
        deathYear: data.deathYear,
        city: data.city,
        state: data.state,
        county: data.county,
        country: data.country,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DummyLocData);
