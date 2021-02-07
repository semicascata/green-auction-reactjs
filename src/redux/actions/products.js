import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  ERRORS,
  SET_WAIT,
} from "../types";
import api from "../../helpers/api";
import setToken from "../../helpers/setToken";

// loading in products
export const setWait = () => {
  return {
    type: SET_WAIT,
  };
};

// fetch products
export const fetchProducts = () => async (dispatch) => {
  setToken(localStorage.getItem("token"));

  try {
    const res = await api.get("/products");
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data.message);
    dispatch({
      type: ERRORS,
      payload: err.response.data.message,
    });
  }
};

// add new product
export const addProduct = (formData) => async (dispatch) => {
  setToken(localStorage.getItem("token"));

  try {
    const res = await api.post("/products", {
      product: formData.product,
      initialBid: +formData.initialBid,
    });

    dispatch({
      type: ADD_PRODUCT,
    });

    console.log(res.data);
    return true;
  } catch (err) {
    console.log(err.response.data.message);
    dispatch({
      type: ERRORS,
      payload: err.response.data.message,
    });
  }
};

// update product
export const updateProduct = (id, formData) => async (dispatch) => {
  setToken(localStorage.getItem("token"));

  try {
    await api.put(`/products/${id}`, formData);
    dispatch({
      type: UPDATE_PRODUCT,
    });
  } catch (err) {
    console.log(err.response.data.message);
    dispatch({
      type: ERRORS,
      payload: err.response.data.message,
    });
  }
};

// delete product
export const deleteProduct = (id) => async (dispatch) => {
  setToken(localStorage.getItem("token"));

  try {
    await api.delete(`/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
    });
  } catch (err) {
    console.log(err.response.data.message);
    dispatch({
      type: ERRORS,
      payload: err.response.data.message,
    });
  }
};
