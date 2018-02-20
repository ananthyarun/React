import React, { Component } from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../actionCreators/products";

class ProductList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  renderProducts() {
    return this.props.products.map(p => (
      <Product product={p} onAddToCartClick={this.props.cartClick} />
    ));
  }

  render() {
    return <div className="row products-list">{this.renderProducts()}</div>;
  }
}

export default ProductList;
