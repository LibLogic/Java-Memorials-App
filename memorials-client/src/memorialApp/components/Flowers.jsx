import React, { Component } from "react";
import { connect } from "react-redux";
import flowerImage from "../images/flower.png";

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
                      src={flowerImage}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower1 && (
                    <img
                      title={`Left on ${this.displayFlower1.date} 
by ${this.displayFlower1.leftBy} `}
                      alt={"Flower"}
                      src={flowerImage}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower2 && (
                    <img
                      title={`Left on ${this.displayFlower2.date} 
by ${this.displayFlower2.leftBy} `}
                      alt={"Flower"}
                      src={flowerImage}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower3 && (
                    <img
                      title={`Left on ${this.displayFlower3.date} 
by ${this.displayFlower3.leftBy} `}
                      alt={"Flower"}
                      src={flowerImage}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower4 && (
                    <img
                      title={`Left on ${this.displayFlower4.date} 
by ${this.displayFlower4.leftBy} `}
                      alt={"Flower"}
                      src={flowerImage}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower5 && (
                    <img
                      title={`Left on ${this.displayFlower5.date} 
by ${this.displayFlower5.leftBy} `}
                      alt={"Flower"}
                      src={flowerImage}
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
                      src={flowerImage}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower7 && (
                    <img
                      title={`Left on ${this.displayFlower7.date} 
by ${this.displayFlower7.leftBy} `}
                      alt={"Flower"}
                      src={flowerImage}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower8 && (
                    <img
                      title={`Left on ${this.displayFlower8.date} 
by ${this.displayFlower8.leftBy} `}
                      alt={"Flower"}
                      src={flowerImage}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower9 && (
                    <img
                      title={`Left on ${this.displayFlower9.date} 
by ${this.displayFlower9.leftBy} `}
                      alt={"Flower"}
                      src={flowerImage}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower10 && (
                    <img
                      title={`Left on ${this.displayFlower9.date} 
by ${this.displayFlower9.leftBy} `}
                      alt={"Flower"}
                      src={flowerImage}
                    />
                  )}
                </td>
                <td>
                  {this.displayFlower11 && (
                    <img
                      title={`Left on ${this.displayFlower9.date} 
by ${this.displayFlower9.leftBy} `}
                      alt={"Flower"}
                      src={flowerImage}
                    />
                  )}
                </td>{" "}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="donor-box" onClick={() => this.props.showDonorModal()}>
          <b>
            {" "}
            <p className="slide-in donor-header">DONATIONS — THANK YOU!</p>
            <ul className="donors">
              {this.props.donors.length > 0 && <li className="slide-up"></li>}
            </ul>{" "}
          </b>
        </div>
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
    scroll && (scroll.innerText = this.props.donors[0].donor);
    scroll &&
      scroll.addEventListener(animationEvent, () => {
        scroll.innerText = this.props.donors[
          elem % this.props.donors.length
        ].donor;
        elem++;
      });
  };

  getFlowers = () => {
    for (let i = 0; i < 12; i++) {
      let temp = "displayFlower" + i;
      this[temp] = false;
    }
    for (let i = 0; i < this.props.flowers.length; i++) {
      let temp = "displayFlower" + i;
      this[temp] = this.props.flowers[i];
    }
  };
}

const mapStateToProps = (state) => {
  return {
    flowers: state.subjectData.flowers,
    donors: state.subjectData.sponsors.donors,
    lastName: state.subjectData.lastName,
    firstInitial: state.subjectData.firstName[0],
  };
};

export default connect(mapStateToProps)(Flowers);

{
  /* <tr>
                {this.props.flowers.map((flower, i) => {
                  cellCount--;
                  return (
                    <td key={i}>
                      <img
                        title={`Left on ${flower.date}
by ${flower.leftBy}`}
                        alt={"Flower"}
                        src={flowerImage}
                      />
                    </td>
                  );
                })}
              </tr> */
}
