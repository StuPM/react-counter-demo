import React, { Component } from "react";

class Counter extends Component {
  state = {};
  render() {
    return (
      <>
        <p>{this.props.counterValue}</p>
      </>
    );
  }
}

export default Counter;
