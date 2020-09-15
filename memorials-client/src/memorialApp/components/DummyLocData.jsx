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
    let i = (this.state.key + 1) % store.getState().sites.length;
    this.setState({
      key: i,
    });
    this.getLocArea(this.state.key);
  };

  getLocArea = (key) => {
    LocationService.getLocationInfo(
      this.props.sites[key].latitude,
      this.props.sites[key].longitude

      // this.props.sites[key].graveInfo.latitude,
      // this.props.sites[key].graveInfo.longitude
    ).then((response) => {
      let cemeteryCountry =
        response.data.countryName === "United States of America"
          ? "United States"
          : response.data.countryName;

      let cemeteryCounty = "";
      if (response.data.localityInfo.administrative[2].name) {
        cemeteryCounty = response.data.localityInfo.administrative[2].name;
      }

      let dummyLocationResponse = {
        latitude: this.props.sites[key].latitude,
        longitude: this.props.sites[key].longitude,

        // latitude: this.props.sites[key].graveInfo.latitude,
        // longitude: this.props.sites[key].graveInfo.longitude,

        firstName: this.props.sites[key].burials[0].firstName,
        middleName: this.props.sites[key].burials[0].middleName,
        lastName: this.props.sites[key].burials[0].lastName,
        birthYear: this.props.sites[key].burials[0].birthYear,
        deathYear: this.props.sites[key].burials[0].deathYear,
        cemeteryCity: response.data.city,
        cemeteryState: response.data.principalSubdivision,
        cemeteryCounty: cemeteryCounty,
        cemeteryCountry: cemeteryCountry,
      };
      this.props.setLocArea(dummyLocationResponse);
    });
  };
}

const mapStateToProps = (state) => {
  return {
    sites: state.sites,
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
        cemeteryCity: data.cemeteryCity,
        cemeteryState: data.cemeteryState,
        cemeteryCounty: data.cemeteryCounty,
        cemeteryCountry: data.cemeteryCountry,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DummyLocData);
