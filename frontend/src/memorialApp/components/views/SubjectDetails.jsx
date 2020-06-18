import React, { Component } from "react";

export class SubjectDetails extends Component {
  render() {
    return (
      <div>
        <div className="container details-btn">Details</div>
        <div className="edit-details">
          <form id="edit-form">
            <fieldset className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
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
            <button className="btn btn-sm btn-success">Save</button>
          </form>
        </div>

        <div className="container small-details-btn">Details</div>
        <div className="display-details">
          <h5>Tom "0" Hodgkinson</h5>
          <h6>Born 1960</h6>
          {/* <button className="btn btn-sm btn-success">Edit</button> */}
        </div>
      </div>
    );
  }
}

export class SmallSubjectDetails extends Component {
  render() {
    return (
      <div>
        <div className="container small-details-btn">Details</div>
        <div className="edit-details-sm">
          <form id="edit-form">
            <fieldset className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
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
            <button className="btn btn-sm btn-success">Save</button>
          </form>
        </div>

        <div className="container small-details-btn">Details</div>
        <div className="display-details-sm">
          <h5>John "0" Doe</h5>
          <h6>1938 — 2018</h6>
          {/* <button className="btn btn-sm btn-success">Edit</button> */}
        </div>
      </div>
    );
  }
}
