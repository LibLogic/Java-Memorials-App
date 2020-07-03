import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../store";
import SearchDetails from "./views/SearchDetails";
import billionGravesService from "../../api/billionGraves/billionGravesService";

class Search extends Component {
  constructor(props) {
    super(props);

    this.doSearch = this.doSearch.bind(this);
  }

  render(props) {
    return (
      <div>
        <div className="container"></div>
        <div className="full-window search">
          <SearchDetails store={store} doSearch={this.doSearch} />

          <h5>{`${this.props.subjectData.firstName}
            ${this.props.subjectData.middleName}
            ${this.props.subjectData.lastName}`}</h5>
          {this.props.subjectData.birthYear &&
          this.props.subjectData.deathYear ? (
            <h6>{`${this.props.subjectData.birthYear} — ${this.props.subjectData.deathYear}`}</h6>
          ) : this.props.subjectData.birthYear ? (
            <h6>{`${this.props.subjectData.birthYear} — Living`}</h6>
          ) : (
            <h6>{""}</h6>
          )}
        </div>
      </div>
    );
  }

  doSearch() {
    billionGravesService.retreiveSubject2().then((response) => {
      const subjectResponse = {
        firstName: response.data.items[0].given_names,
        middleName: response.data.items[0].given_names,
        lastName: response.data.items[0].family_names,
        birthYear: response.data.items[0].birth_year,
        deathYear: response.data.items[0].death_year,
        city: response.data.items[0].cemetery_city,
        state: response.data.items[0].cemetery_state,
        country: response.data.items[0].cemetery_country,
        county: response.data.items[0].cemetery_county,
        graveInfo: {
          latitude: response.data.items[0].lat,
          longitude: response.data.items[0].lon,
        },
        deviceLocation: {
          latitude: 41.79794000413588,
          longitude: -71.46327390674594,
        },
      };
      console.log("subjectResponse", subjectResponse);
      this.props.setSubjectInfo(subjectResponse);
    });

    this.props.history.push("/view/main");
  }
}

const mapStateToProps = (state) => {
  return {
    subjectData: {
      firstName: state.subjectData.firstName,
      middleName: state.subjectData.middleName,
      lastName: state.subjectData.lastName,
      birthYear: state.subjectData.birthYear,
      deathYear: state.subjectData.deathYear,
      graveInfo: {
        latitude: state.subjectData.graveInfo.latitude,
        longitude: state.subjectData.graveInfo.longitude,
      },
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSubjectInfo: (subjectResponse) => {
      const action = {
        type: "SET_SUBJECT_INFO",
        subjectData: Object.assign({}, subjectResponse, {
          graveInfo: Object.assign({}, subjectResponse.graveInfo, {
            latitude: subjectResponse.graveInfo.latitude,
            longitude: subjectResponse.graveInfo.longitude,
          }),
        }),
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
