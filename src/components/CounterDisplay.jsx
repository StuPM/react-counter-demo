import React, { Component } from "react";

class CounterDisplay extends Component {
  state = { counter: 1 };

  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
    // Counter.changeValue(10);
  };

  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  onReset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <button onClick={this.onReset}>Reset</button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

export default CounterDisplay;
