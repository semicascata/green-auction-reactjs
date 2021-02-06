import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
  TOKEN,
  SET_LOADING,
  CLEAR_ERRORS,
} from "../types";
import api from "../../helpers/api";
import setToken from "../../helpers/setToken";

// check if user have a token
export const checkUser = () => (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    setToken(token);
    console.log("we got a token");
    dispatch({
      type: TOKEN,
    });
  } else {
    console.log("no token :(");
    dispatch({
      type: LOGOUT,
    });
  }
};

// login user
export const loginUser = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/user/login", formData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: "Invalid credentials or user does not exist",
    });
  }
};

// signup
export const signUp = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    await api.post("/user/", {
      name: formData.name,
      age: +formData.age,
      password: formData.password,
      password2: formData.password2,
    });
    dispatch({
      type: SIGNUP_SUCCESS,
    });
    return true;
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: "Failed to register user",
    });
  }
};

// logout
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

// loading spinner
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
