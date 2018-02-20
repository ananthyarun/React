import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_TO_CART
} from "../actionTypes/products";

export default (
  prevState = {
    products: [],
    cartItems: [],
    isLoggedIn: true,
    isLoading: false
  },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...prevState,
        isLoading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...prevState,
        isLoading: false,
        products: action.products
      };
    case ADD_TO_CART:
      return {
        ...prevState,
        ...prevState.cartItems,
        cartItems: action.cartItems
      };

    default:
      return prevState;
  }
};
