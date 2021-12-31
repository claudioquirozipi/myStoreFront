import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { productsReducer as products } from "./products/reducer";

const initialState = {};

const reducer = combineReducers({
  products,
});

const myStore = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default myStore;
