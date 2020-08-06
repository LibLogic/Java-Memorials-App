import React, { Component } from "react";
import { connect } from "react-redux";
import flower from "../images/flower.png";

class Flowers extends Component {
  render() {
    this.getFlowers();
    return (
      <>
        <div className={`flower-box ${this.props.zoom ? "hidden" : ""}`}>
          {/* <button
            className="btn btn-sm btn-success flower-btn"
            onClick={this.props.showModal}
          >
            Leave a Virtual Flower
          </button> */}
          <table id="flower">
            <tbody>
              <tr>
                <td>
                  {this.displayFlower0 && (
                    <img
                      title={`Left on ${this.displayFlower0.date} 
by ${this.displayFlower0.leftBy} `}
                      alt={"Flower"}
                      src={flower}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower1 && (
                    <img
                      title={`Left on ${this.displayFlower1.date} 
by ${this.displayFlower1.leftBy} `}
                      alt={"Flower"}
                      src={flower}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower2 && (
                    <img
                      title={`Left on ${this.displayFlower2.date} 
by ${this.displayFlower2.leftBy} `}
                      alt={"Flower"}
                      src={flower}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower3 && (
                    <img
                      title={`Left on ${this.displayFlower3.date} 
by ${this.displayFlower3.leftBy} `}
                      alt={"Flower"}
                      src={flower}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower4 && (
                    <img
                      title={`Left on ${this.displayFlower4.date} 
by ${this.displayFlower4.leftBy} `}
                      alt={"Flower"}
                      src={flower}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower5 && (
                    <img
                      title={`Left on ${this.displayFlower5.date} 
by ${this.displayFlower5.leftBy} `}
                      alt={"Flower"}
                      src={flower}
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  {this.displayFlower6 && (
                    <img
                      title={`Left on ${this.displayFlower6.date} 
by ${this.displayFlower6.leftBy} `}
                      alt={"Flower"}
                      src={flower}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower7 && (
                    <img
                      title={`Left on ${this.displayFlower7.date} 
by ${this.displayFlower7.leftBy} `}
                      alt={"Flower"}
                      src={flower}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower8 && (
                    <img
                      title={`Left on ${this.displayFlower8.date} 
by ${this.displayFlower8.leftBy} `}
                      alt={"Flower"}
                      src={flower}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower9 && (
                    <img
                      title={`Left on ${this.displayFlower9.date} 
by ${this.displayFlower9.leftBy} `}
                      alt={"Flower"}
                      src={flower}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower10 && (
                    <img
                      title={`Left on ${this.displayFlower9.date} 
by ${this.displayFlower9.leftBy} `}
                      alt={"Flower"}
                      src={flower}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower11 && (
                    <img
                      title={`Left on ${this.displayFlower9.date} 
by ${this.displayFlower9.leftBy} `}
                      alt={"Flower"}
                      src={flower}
                    />
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {this.props.individual.length > 0 && (
          <div className="donor-box">
            <p className="donor-header">
              {`(${this.props.firstInitial}. ${this.props.lastName}) Site Sponsors`}
            </p>
            <ul className="donors">
              <li className="slide-up">{this.props.individual[0]}</li>
              <li className="slide-up">{this.props.individual[1]}</li>
              <li className="slide-up">{this.props.individual[2]}</li>
              <li className="slide-up">{this.props.individual[3]}</li>
              <li className="slide-up">{this.props.individual[4]}</li>
            </ul>
          </div>
        )}
      </>
    );
  }

  getFlowers = () => {
    for (let i = 0; i < 15; i++) {
      let temp = "displayFlower" + i;
      this[temp] = false;
    }
    for (let i = 0; i < this.props.details.length; i++) {
      let temp = "displayFlower" + i;
      this[temp] = this.props.details[i];
    }
  };
}

const mapStateToProps = (state) => {
  return {
    details: state.subjectData.flowers.details,
    individual: state.subjectData.donors.individual,
    lastName: state.subjectData.lastName,
    firstInitial: state.subjectData.firstName[0],
  };
};

export default connect(mapStateToProps)(Flowers);
