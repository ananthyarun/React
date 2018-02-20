import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: "Watch here.." };
    setInterval(() => {
      //this.state.time = new Date().toTimeString();

      this.setState({ time: new Date().toTimeString() });
      console.log(this.state);
    }, 1000);
  }

  render() {
    console.log("render");
    return <h1>{this.state.time}</h1>;
  }
}

export default Timer;
