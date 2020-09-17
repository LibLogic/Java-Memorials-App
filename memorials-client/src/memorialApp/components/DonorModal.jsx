import React, { Component } from "react";
import { connect } from "react-redux";

class DonorModal extends Component {
  render() {
    return (
      this.props.showDonorModal && (
        <form id="donor-modal" className="input-group">
          <div className="input-group-append donor-modal-content">
            <input
              style={{ fontSize: ".8em" }}
              className="form-control"
              type="text"
              placeholder="Your First & Last Name"
              onChange={this.props.handleChange}
              value={this.props.donor}
            />
            <button
              className="btn btn-sm btn-ok"
              type="submit"
              onClick={() => this.props.processDonor(this.props.donorName)}
            >
              OK
            </button>
            <button
              type="button"
              className="btn btn-sm btn-close"
              onClick={this.props.hideDonorModal}
            >
              <span>X</span>
            </button>
          </div>
        </form>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showDonorModal: state.showDonorModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideDonorModal: () => {
      const action = {
        type: "CLOSE_DONOR_MODAL",
        showDonorModal: false,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonorModal);
