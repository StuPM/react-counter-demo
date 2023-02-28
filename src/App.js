import React, { Component } from "react";
import CounterDisplay from "./components/CounterDisplay";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <CounterDisplay></CounterDisplay>
      </>
    );
  }
}

export default App;
