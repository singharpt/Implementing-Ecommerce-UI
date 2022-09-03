import { createStore, applyMiddleware } from "redux";
import allreducers from "./combineReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(
  allreducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
