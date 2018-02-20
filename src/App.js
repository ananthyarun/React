import React, { Component } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "./App.css";
import Timer from "./Timer";
import Counter from "./Counter";
import Quotes from "./Quotes";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Productdetail from "./components/Productdetail";
import Cart from "./components/Cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./actionCreators/products";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.actions.getProducts();
  }

  CartClick = product => {
    this.props.actions.addToCart(product);
  };
  // removeCart = e => {
  //   console.log(e);
  //   const newItems = this.state.cartItems;
  //   const index = newItems.indexOf(e);
  //   newItems.splice(index);
  //   console.log(index);
  //   this.setState({
  //     cartItems: newItems,
  //     cart: this.state.cart - 1
  //   });
  // };
  render() {
    return (
      <div>
        <Header />,
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              this.props.isLoading ? (
                <p style={{ paddingTop: "100px" }}>Loading...</p>
              ) : (
                <ProductList
                  {...props}
                  cartClick={this.CartClick}
                  products={this.props.products}
                />
              )
            }
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/product-detail/:name/:price"
            component={Productdetail}
          />
          <Route
            exact
            path="/cart"
            render={props => (
              <Cart
                {...props}
                CartItems={this.props.cartItems}
                // RemoveCartItems={this.removeCart}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartItems: state.CartItems,
    products: state.products,
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
