import React, { Component } from "react";
import CounterDisplay from "./components/CounterDisplay";

class App extends Component {
  render() {
    return (
      <div>
        <CounterDisplay></CounterDisplay>
        <CounterDisplay></CounterDisplay>
      </div>
    );
  }
}

export default App;
