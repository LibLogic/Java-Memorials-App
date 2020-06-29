import React, { Component } from "react";
// import { store } from "../../store";

export default class SearchDetails extends Component {
  render() {
    return (
      <div className="search-details">
        <form id="edit-form">
          <div className="row">
            <div className="col">
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.props.handleChange}
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Middle Name"
                  name="middleName"
                  value={this.state.middleName}
                  onChange={this.props.handleChange}
                />
              </fieldset>
            </div>
          </div>
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.props.handleChange}
            />
          </fieldset>
          <div className="row">
            <div className="col">
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Birth"
                  name="birthYear"
                  value={this.state.birthYear}
                  onChange={this.props.handleChange}
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Death"
                  name="deathYear"
                  value={this.state.deathYear}
                  onChange={this.props.handleChange}
                />
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="City"
                  name="city"
                  value={this.state.city}
                  onChange={this.props.handleChange}
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="State"
                  name="state"
                  value={this.state.state}
                  onChange={this.props.handleChange}
                />
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="County"
                  name="county"
                  value={this.state.county}
                  onChange={this.props.handleChange}
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={this.state.country}
                  onChange={this.props.handleChange}
                />
              </fieldset>
            </div>
          </div>
          <button
            type="button"
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
