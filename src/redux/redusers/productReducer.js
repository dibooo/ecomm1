import {
  actionTypes,
  actionTypeBuy,
  actionToSign,
} from "../contants/action-types";

const initialState = {
  products: [],
  selectedProduct: [],
};
const saved = localStorage.getItem("choseProduct");
const local = saved ? JSON.parse(saved) : [];
const choseProducts = local.length >= 1 ? local : [];

const user = {};

export const productReaduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

export const choseProductsReducer = (
  state = choseProducts,
  { type, product, qty }
) => {
  switch (type) {
    case actionTypeBuy.ADD_PRODUCT:
      product.qty = 1;
      return [...state, product];
    case actionTypeBuy.REMOVE_PRODUCT:
      return [...product];
    case actionTypeBuy.INCRESR_QTY:
      product.qty = ++qty;
      return [...state];
    case actionTypeBuy.INCRESE_QTY_BY_INPUT:
      product.qty = qty;
      return [...state];
    default:
      return state;
  }
};

export const signReduser = (state = user, { userDetails, type }) => {
  switch (type) {
    case actionToSign.LGO_IN:
      return userDetails;

    default:
      return state;
  }
};
