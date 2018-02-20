import React, { Component } from "react";

class Productdetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 style={{ paddingTop: "100px" }}>Product Detail</h1>
        <p>Name:{this.props.match.params.name}</p>
        <p>Price:{this.props.match.params.price}</p>
      </div>
    );
  }
}
export default Productdetail;
