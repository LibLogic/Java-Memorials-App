import React, { Component } from "react";
// import { store } from "../store";
import SearchDetails from "./views/SearchDetails";
import billionGravesService from "../../api/billionGraves/billionGravesService";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "David",
      middleName: "",
      lastName: "Hodgkinson",
      birthYear: "",
      deathYear: "",
      city: "",
      state: "Rhode Island",
      country: "United States",
      county: "Kent",
      latitude: 0,
      longitiue: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: "40px" }}></div>
        <div className="full-window search">
          <SearchDetails
            searchState={this.state}
            handleChange={this.handleChange}
            doSearch={this.doSearch}
          />

          <h4>{`${this.state.firstName} ${this.state.middleName[0] || ""} ${
            this.state.lastName
          }`}</h4>
          {this.state.birthYear && this.state.deathYear ? (
            <h6>{`${this.state.birthYear} — ${this.state.deathYear}`}</h6>
          ) : this.state.birthYear ? (
            <h6>{`${this.state.birthYear} — Living`}</h6>
          ) : (
            <h6>{""}</h6>
          )}
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  doSearch() {
    billionGravesService.retreiveSubject2().then((response) => {
      // store.setState({
      //   ...store,
      //   firstName: response.data.items[0].firstName,
      //   middleName: response.data.items[0].middleName,
      //   lastName: response.data.items[0].lastName,
      // });

      console.log(response.data.items[0].lat, response.data.items[0].lon);
    });

    // billionGravesService.retreiveSubject2(this.state).then((response) =>
    //   this.setState({
    //     latitude: response.data.items[0].lat,
    //     longitude: response.data.items[0].lon,
    //   })
    // );

    this.props.history.push("/view/main");
  }
}

export default Search;
