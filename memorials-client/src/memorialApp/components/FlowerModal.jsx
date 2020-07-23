import React, { Component } from "react";
import { connect } from "react-redux";

class FlowerModal extends Component {
  render() {
    return (
      this.props.showModal && (
        <div id="flower-modal" className="input-group">
          <div className="input-group-append">
            <input
              style={{
                width: 160,
                margin: "0 auto",
                fontSize: ".8em",
              }}
              className="form-control"
              type="text"
              placeholder="Your First & Last Name"
              onChange={this.props.handleChange}
              value={this.props.leftBy}
            />
          </div>
          <button
            className="btn btn-sm btn-success"
            type="submit"
            onClick={() => this.props.processFlower(this.props.leftBy)}
          >
            OK
          </button>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showModal: state.subjectData.showModal,
  };
};

export default connect(mapStateToProps)(FlowerModal);
