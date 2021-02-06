import {
  FETCH_BIDS,
  MAKE_BID,
  DELETE_BID,
  BIDS_PER_PRODUCT,
  BID_ERROR,
  BID_WAIT,
  CLEAR_ERRORS,
} from "../types";
import api from "../../helpers/api";
import setToken from "../../helpers/setToken";

// fetch bids
export const fetchBids = () => async (dispatch) => {
  setToken(localStorage.getItem("token"));

  try {
    const res = await api.get("/bids");
    dispatch({
      type: FETCH_BIDS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data.message);
    dispatch({
      type: BID_ERROR,
      payload: err.response.data.message,
    });
  }
};

// register bid
export const registerBid = (id, formData) => async (dispatch) => {
  setToken(localStorage.getItem("token"));

  try {
    const res = await api.post(`/bids/${id}`, {
      bid: +formData.bid,
    });
    console.log(res.data);
    dispatch({
      type: MAKE_BID,
    });
  } catch (err) {
    console.log(err.response.data.message);
    dispatch({
      type: BID_ERROR,
      payload: err.response.data.message,
    });
  }
};

// bids per product
export const getBidsPerProduct = (id) => async (dispatch) => {
  setToken(localStorage.getItem("token"));

  try {
    const res = await api.get(`/bids/${id}`);
    dispatch({
      type: BIDS_PER_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data.message);
    dispatch({
      type: BID_ERROR,
      payload: err.response.data.message,
    });
  }
};

// delete bid
export const deleteBid = (id) => async (dispatch) => {
  setToken(localStorage.getItem("token"));

  try {
    await api.delete(`/bids/${id}`);
    dispatch({
      type: DELETE_BID,
    });
  } catch (err) {
    console.log(err.response.data.message);
    dispatch({
      type: BID_ERROR,
      payload: err.response.data.message,
    });
  }
};

// bid loading
export const setWait = () => {
  return {
    type: BID_WAIT,
  };
};

// clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
