import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.increment = this.increment.bind(this);
  }

  increment(e) {
    console.log("inc", e);
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement = e => {
    console.log("dec", e);
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.increment}>INC</button>
        <h1 something={() => {}}>{this.state.counter}</h1>
        <button onClick={this.decrement}>DEC</button>
      </div>
    );
  }
}

export default Counter;
