import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { uiAlertReducer as alert } from "./ui/alert/reducer";

import { productsReducer as products } from "./products/reducer";
import { shoppingCarReducer as shoppingCar } from "./shoppingCart/reducer";

const initialState = {};

const ui = combineReducers({
  alert,
});
const reducer = combineReducers({
  products,
  shoppingCar,
  ui,
});

const myStore = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default myStore;
