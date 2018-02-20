import {
  GET_PRODUCTS,
  ADD_TO_CART,
  SEARCH,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from "../actionTypes/products";

export function getProducts() {
  return {
    type: GET_PRODUCTS
  };
}

export function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  };
}

export function getProductsFailure(error) {
  return {
    type: GET_PRODUCTS_FAILURE,
    error
  };
}

export function addToCart(cartItems) {
  return {
    type: ADD_TO_CART,
    cartItems
  };
}

export function search(searchTerm) {
  return { type: SEARCH, searchTerm };
}
