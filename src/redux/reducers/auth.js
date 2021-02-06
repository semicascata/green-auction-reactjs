import {
  TOKEN,
  SET_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
} from "../types";

const initialState = {
  user: null,
  errors: null,
  isAuth: null,
  loading: false,
  token: localStorage.getItem("token"),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        isAuth: true,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        ...action.payload,
        isAuth: true,
        loading: false,
        errors: null,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");

      return {
        ...state,
        token: null,
        loading: false,
        isAuth: false,
        user: null,
        errors: action.payload,
      };
    default:
      return state;
  }
};
