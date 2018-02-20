import React, { Component } from "react";
import CartItems from "./CartItems";

class Cart extends Component {
  constructor(props) {
    super(props);
    //this.state = {
    //cart: this.props.CartItems
    //  };
  }
  renderCartItems() {
    return this.props.CartItems.map(c => (
      <CartItems cart={c} />
      //RemoveItems={this.removeCartItem} />
    ));
  }
  removeCartItem = item => {
    console.log(item);
    this.props.RemoveCartItems(item);
  };

  render() {
    return <div style={{ paddingTop: "100px" }}>{this.renderCartItems()}</div>;
  }
}
export default Cart;
