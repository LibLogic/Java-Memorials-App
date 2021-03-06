import React, { Component } from "react";
import { connect } from "react-redux";
import flower from "../images/flower.png";

class Flowers extends Component {
  render() {
    this.getFlowers();
    return (
      <>
        <div className={`flower-box ${this.props.zoom ? "hidden" : ""}`}>
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
            <b>
              {" "}
              <p className="slide-in donor-header">CONTRIBUTORS - THANK YOU!</p>
              <ul className="donors">
                <li className="slide-up"></li>
              </ul>{" "}
            </b>
          </div>
        )}
      </>
    );
  }

  componentDidMount = () => {
    const whichAnimationEvent = () => {
      let a;
      let el = document.createElement("fakeElement");
      var animations = {
        animation: "animationiteration",
        OAnimation: "oAnimationIteration",
        MozAnimation: "animationIteration",
        WebkitAnimation: "webkitAnimationIteration",
      };

      for (a in animations) {
        if (el.style[a] !== undefined) {
          return animations[a];
        }
      }
    };

    let elem = 1;
    let animationEvent = whichAnimationEvent();
    let scroll = document.querySelector(".slide-up");
    scroll && (scroll.innerText = this.props.individual[0]);
    scroll &&
      scroll.addEventListener(animationEvent, () => {
        scroll.innerText = this.props.individual[
          elem % this.props.individual.length
        ];
        elem++;
      });
  };

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
