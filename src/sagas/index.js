import {
  getProductsSuccess,
  getProductsFailure
} from "../actionCreators/products";

import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS } from "../actionTypes/products";

function* getProducts() {
  let url = "http://localhost:4000/products";
  try {
    let products = yield fetch("http://localhost:4000/products").then(r =>
      r.json()
    );
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}

export function* getProductsWatcher() {
  yield takeLatest(GET_PRODUCTS, getProducts);
}
