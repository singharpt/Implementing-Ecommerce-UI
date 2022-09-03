import { getProductsReducers } from "./productreducer";
// import { getCartProducts } from "./cartreducer";
import { combineReducers } from "redux";

const allreducers = combineReducers({
  getproductsdata: getProductsReducers,
  // getcartproduct: getCartProducts,
});

export default allreducers;
