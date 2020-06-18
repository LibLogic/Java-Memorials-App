import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.doSearch = this.doSearch.bind(this);
  }

  render() {
    return (
      <div className="listTodos">
        <h1>Search</h1>
        <form className="container">
          <fieldset className="form-group">
            <input className="form-control" type="text" name="search" />
          </fieldset>
          <button className="btn btn-success" onClick={this.doSearch}>
            Submit
          </button>
        </form>
      </div>
    );
  }

  doSearch() {
    this.props.history.push("/view/main");
  }
}

export default Search;
