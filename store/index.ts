import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { productsReducer as products } from "./products/reducer";
import { shoppingCarReducer as shoppingCar } from "./shoppingCart/reducer";

const initialState = {};

const reducer = combineReducers({
  products,
  shoppingCar,
});

const myStore = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default myStore;
