import { combineReducers } from "redux";
import auth from "./auth";
import products from "./products";
import bids from "./bids";

export default combineReducers({
  auth,
  products,
  bids,
});
