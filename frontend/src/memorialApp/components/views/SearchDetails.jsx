import React, { Component } from "react";

export default class SearchDetails extends Component {
  render() {
    return (
      <div className="search-details">
        <form id="edit-form">
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="First Name"
              name="first-name"
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Last Name"
              name="last-name"
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="City"
              name="city"
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="State"
              name="state"
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Birth"
              name="birth"
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Death"
              name="death"
            />
          </fieldset>
          <button
            className="btn btn-sm btn-success"
            onClick={this.props.doSearch}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
