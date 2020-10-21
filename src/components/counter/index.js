import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
  };

  minus = () => {
    let currentValue = this.state.value;
    this.setState({ value: currentValue - 1 });
  };

  plus = () => {
    let currentValue = this.state.value;
    this.setState({ value: currentValue + 1 });
  };

  render() {
    const currentValue = this.state.value;
    return (
      <div className="cunter">
        <h4>current {currentValue}</h4>
        <button className="btn btn-sm btn-primary mx-1" onClick={() => this.plus()}>plus</button>
        <button className="btn btn-sm btn-primary mx-1" onClick={() => this.minus()}>min</button>
      </div>
    );
  }
}

export default Counter;
