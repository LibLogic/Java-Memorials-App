import React, { Component } from "react";
import { connect } from "react-redux";
import LocationService from "../api/locationService";
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
      <div className="saved-data">
        <button className="btn btn-sm btn-success" onClick={this.incToNext}>
          Browse Saved Users
        </button>
      </div>
    );
  }

  incToNext = () => {
    this.props.disableRecordButton();
    let i = (this.state.key + 1) % store.getState().sitesData.length;
    this.setState({
      key: i,
    });
    this.getLocArea(this.state.key);
  };

  getLocArea = (key) => {
    LocationService.getLocationInfo(
      this.props.sitesData[key].graveInfo.latitude,
      this.props.sitesData[key].graveInfo.longitude
    ).then((response) => {
      let country =
        response.data.countryName === "United States of America"
          ? "United States"
          : response.data.countryName;

      let county = "";
      if (response.data.localityInfo.informative[2]) {
        county = response.data.localityInfo.informative[2].name;
      }

      let dummyLocationResponse = {
        latitude: this.props.sitesData[key].graveInfo.latitude,
        longitude: this.props.sitesData[key].graveInfo.longitude,
        firstName: this.props.sitesData[key].firstName,
        middleName: this.props.sitesData[key].middleName,
        lastName: this.props.sitesData[key].lastName,
        birthYear: this.props.sitesData[key].birthYear,
        deathYear: this.props.sitesData[key].deathYear,
        city: response.data.city,
        state: response.data.principalSubdivision,
        county: county,
        country: country,
      };
      this.props.setLocArea(dummyLocationResponse);
    });
  };
}

const mapStateToProps = (state) => {
  return {
    sitesData: state.sitesData,
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
