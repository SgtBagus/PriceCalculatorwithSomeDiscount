import React, { Component } from "react";

class PriceCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
      orderCount: 0,
      totalPriceinKiloMeter: 0,
      totalPrice: 0,
      textDiscbyDistance: "",
      textDiscbyOrder: ""
    };
  }

  calculateTotal = () => {
    const { distance, orderCount } = this.state;

    const totalPriceinKiloMeter = distance * 10000;
    let textDiscbyDistance = "";
    let textDiscbyOrder = "";
    let basePrice = totalPriceinKiloMeter;

    if (distance >= 100) {
      basePrice -= basePrice * 0.1;
      textDiscbyDistance = "Dapat Diskon 10% karena jarak lebih dari 100km";
    } else if (distance >= 50) {
      basePrice -= basePrice * 0.05;
      textDiscbyDistance = "Dapat Diskon 5% karena jarak lebih dari 50km";
    }

    if (orderCount >= 5) {
      basePrice -= basePrice * 0.3;
      basePrice += basePrice * 0.1;
      textDiscbyOrder = "Dapat Diskon 30% karena order 5 kali lebih";
    } else if (orderCount >= 2) {
      basePrice -= basePrice * 0.2;
      textDiscbyOrder = "Dapat Diskon 20% karena order 2 kali lebih";
    }

    this.setState({
      totalPrice: basePrice,
      totalPriceinKiloMeter,
      textDiscbyDistance,
      textDiscbyOrder
    });
  };

  render() {
    return (
      <div>
        <h1>Price Calculator</h1>
        <label>
          Distance (in km):
          <input
            type="number"
            value={this.state.distance}
            onChange={(e) =>
              this.setState(
                {
                  distance: parseFloat(e.target.value)
                },
                () => {
                  this.calculateTotal();
                }
              )
            }
            min="0"
          />
        </label>
        <br />
        <label>
          Order Count:
          <input
            type="number"
            value={this.state.orderCount}
            onChange={(e) =>
              this.setState(
                {
                  orderCount: parseInt(e.target.value, 10)
                },
                () => {
                  this.calculateTotal();
                }
              )
            }
            min="0"
          />
        </label>
        <hr />
        <p>
          <b>Total per Kilometer: </b>
          {this.state.distance} x 10.000 = {this.state.totalPriceinKiloMeter}
          <br />
          {this.state.textDiscbyDistance}
          <br />
          {this.state.textDiscbyOrder}
          <br />
        </p>
        <p>
          <b>Total Biaya: </b> {this.state.totalPrice}
        </p>
      </div>
    );
  }
}

export default PriceCalculator;
