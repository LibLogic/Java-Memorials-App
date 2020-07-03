import React, { Component } from "react";
import { connect } from "react-redux";

class SearchDetails extends Component {
  render(props) {
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
                  value={this.props.subjectData.firstName}
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
                  value={this.props.subjectData.middleName}
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
              value={this.props.subjectData.lastName}
              onChange={this.props.handleChange}
            />
            <p>{this.props.inputValue}</p>
          </fieldset>
          <div className="row">
            <div className="col">
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Birth"
                  name="birthYear"
                  value={this.props.subjectData.birthYear}
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
                  value={this.props.subjectData.deathYear}
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
                  value={this.props.subjectData.city}
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
                  value={this.props.subjectData.state}
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
                  value={this.props.subjectData.county}
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
                  value={this.props.subjectData.country}
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

const mapStateToProps = (state) => {
  return {
    subjectData: {
      firstName: state.subjectData.firstName,
      middleName: state.subjectData.middleName,
      lastName: state.subjectData.lastName,
      birthYear: state.subjectData.birthYear,
      deathYear: state.subjectData.deathYear,
      city: state.subjectData.city,
      state: state.subjectData.state,
      country: state.subjectData.country,
      county: state.subjectData.county,
      graveInfo: {
        latitude: state.subjectData.graveInfo.latitude,
        longitiue: state.subjectData.graveInfo.longitude,
      },
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      const action = {
        type: "INPUT_CHANGE",
        key: e.target.name,
        value: e.target.value,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchDetails);