import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  ERRORS,
  SET_WAIT,
} from "../types";

const initialState = {
  productsList: [],
  wait: false,
  errors: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productsList: [action.payload],
        wait: false,
      };
    case ADD_PRODUCT:
    case UPDATE_PRODUCT:
    case DELETE_PRODUCT:
      return {
        ...state,
        wait: false,
      };
    case ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case SET_WAIT:
      return {
        ...state,
        wait: true,
      };
    default:
      return state;
  }
};
