import {
  actionTypes,
  actionTypeBuy,
  actionToSign,
} from "../contants/action-types";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedPreoduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
// for add to cart
export const addProduct = (product) => {
  return {
    type: actionTypeBuy.ADD_PRODUCT,
    product: product,
  };
};

export const increseQty = (product, qty) => {
  return {
    type: actionTypeBuy.INCRESR_QTY,
    product: product,
    qty: qty,
  };
};

export const increseByInput = (product, qty) => {
  return {
    type: actionTypeBuy.INCRESE_QTY_BY_INPUT,
    product: product,
    qty: qty,
  };
};

export const removeProduct = (product) => {
  return {
    type: actionTypeBuy.REMOVE_PRODUCT,
    product: product,
  };
};

export const SetUserInformationByLogIn = (userDetails) => {
  return {
    type: actionToSign.LGO_IN,
    userDetails: userDetails,
  };
};
