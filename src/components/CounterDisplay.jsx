import React, { Component } from "react";
import Counter from "./Counter";

class CounterDisplay extends Component {
  state = { counter: 0, counterHistory: [0] };

  onIncrement = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => {
        this.counterHistory(this.state.counter);
      }
    );
  };

  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 }, () => {
      this.counterHistory(this.state.counter);
    });
  };

  onReset = () => {
    this.setState({ counter: 0, counterHistory: [0] });
  };

  counterHistory = (input) => {
    this.setState({ counterHistory: [...this.state.counterHistory, input] });
  };

  render() {
    return (
      <>
        <button className="btn increment" onClick={this.onIncrement}>
          Increment
        </button>
        <button onClick={this.onDecrement}>Decrement</button>
        <button onClick={this.onReset}>Reset</button>
        <Counter counterValue={this.state.counter} />
        <h2>Counter History</h2>
        <ol>
          {this.state.counterHistory.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default CounterDisplay;
