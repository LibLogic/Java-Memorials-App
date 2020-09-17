import React, { Component } from "react";
import { connect } from "react-redux";

class FlowerModal extends Component {
  render() {
    return (
      this.props.showFlowerModal && (
        <form id="flower-modal" className="input-group">
          <div className="input-group-append flower-modal-content">
            <input
              style={{ fontSize: ".8em" }}
              className="form-control"
              type="text"
              placeholder="Your First & Last Name"
              onChange={this.props.handleChange}
              value={this.props.leftBy}
            />
            <button
              className="btn btn-sm btn-ok"
              type="submit"
              onClick={() => this.props.processFlower(this.props.leftBy)}
            >
              OK
            </button>
            <button
              type="button"
              className="btn btn-sm btn-close"
              onClick={this.props.hideFlowerModal}
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
    showFlowerModal: state.showFlowerModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideFlowerModal: () => {
      const action = {
        type: "CLOSE_FLOWER_MODAL",
        showFlowerModal: false,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowerModal);
