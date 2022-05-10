import { combineReducers } from "redux";
import {
  productReaduser,
  selectedProductReducer,
  choseProductsReducer,
  signReduser,
} from "./productReducer";

const redusers = combineReducers({
  allProducts: productReaduser,
  selectProduct: selectedProductReducer,
  choseProducts: choseProductsReducer,
  logUser: signReduser,
});

export default redusers;
