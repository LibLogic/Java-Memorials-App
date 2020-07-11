import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../store";
import LocData from "./LocData";
import DummyLocData from "./DummyLocData";
import SearchDetails from "./views/SearchDetails";
import billionGravesService from "../../api/billionGraves/billionGravesService";

class Search extends Component {
  constructor(props) {
    super(props);

    this.doSearch = this.doSearch.bind(this);
  }

  render(props) {
    return (
      <div className="container">
        <LocData store={store} />
        <DummyLocData store={store} />
        <div className="full-window search">
          <h5>
            {`${this.props.subjectData.firstName} ${this.props.subjectData.middleName}
            ${this.props.subjectData.lastName}`}{" "}
          </h5>
          {this.props.subjectData.birthYear &&
          this.props.subjectData.deathYear ? (
            <h6>{`${this.props.subjectData.birthYear} — ${this.props.subjectData.deathYear}`}</h6>
          ) : this.props.subjectData.birthYear ? (
            <h6>{`${this.props.subjectData.birthYear} — Living`}</h6>
          ) : (
            <h6>{""}</h6>
          )}
          <SearchDetails store={store} doSearch={this.doSearch} />
        </div>
      </div>
    );
  }

  doSearch() {
    billionGravesService
      .retreiveSubject()
      .then((response) => {
        let firstName = response.data.items[0].given_names.split(" ")[0] || "";
        let middleName = response.data.items[0].given_names.split(" ")[1] || "";
        let maidenName =
          response.data.items[0].maiden_names &&
          ` (${response.data.items[0].maiden_names})`;

        const subjectResponse = {
          firstName: firstName,
          middleName: middleName,
          lastName: response.data.items[0].family_names,
          maidenName: maidenName,
          birthYear: response.data.items[0].birth_year,
          deathYear: response.data.items[0].death_year,
          country: response.data.items[0].cemetery_country,
          state: response.data.items[0].cemetery_state,
          city: response.data.items[0].cemetery_city,
          county: response.data.items[0].cemetery_county,
          cemeteryName: response.data.items[0].cemetery_name,
          graveInfo: {
            stoneImg: response.data.items[0].thumbnail,
            latitude: response.data.items[0].lat,
            longitude: response.data.items[0].lon,
          },
        };
        this.props.setSubjectInfo(subjectResponse);
      })
      .catch((response) => {
        console.log(response);
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
      country: state.subjectData.country,
      state: state.subjectData.state,
      city: state.subjectData.city,
      county: state.subjectData.county,
      cemeteryName: state.subjectData.cemeteryName,
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
            stoneImg: subjectResponse.graveInfo.stoneImg,
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
