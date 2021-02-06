import {
  FETCH_BIDS,
  MAKE_BID,
  DELETE_BID,
  BIDS_PER_PRODUCT,
  BID_ERROR,
  BID_WAIT,
  CLEAR_ERRORS,
} from "../types";

const initialState = {
  bidsList: [],
  bidsPerProduct: [],
  loading: false,
  errors: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BIDS:
      return {
        ...state,
        bidsList: [action.payload],
        loading: false,
      };
    case BIDS_PER_PRODUCT:
      return {
        ...state,
        bidsPerProduct: [action.payload],
        loading: false,
      };
    case MAKE_BID:
    case DELETE_BID:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case BID_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    case BID_WAIT:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
