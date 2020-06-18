import React, { Component } from "react";
import SearchDetails from "./SearchDetails";
import billionGravesService from "../../../api/billionGraves/billionGravesService";

class Search extends Component {
  constructor(props) {
    super(props);

    this.doSearch = this.doSearch.bind(this);
  }

  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: "40px" }}></div>
        <div className="full-window search">
          <SearchDetails doSearch={this.doSearch} />
          <h2>Search</h2>
        </div>
      </div>
    );
  }

  doSearch() {
    // billionGravesService
    //   .retreiveSubject()
    //   .then((response) => console.log(response));

    this.props.history.push("/view/main");
  }
}

export default Search;
