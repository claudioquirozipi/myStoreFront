import { ADD_SHOPPING_CAR, REMOVE_SHOPPING_CAR } from "./types";
import { InitialState, Action } from "./interface";

const initialState: InitialState = {
  data: {
    totalPrice: 0,
    totalProducts: 0,
    shoppingCarProduct: [],
    message: "",
  },
  loader: false,
  error: undefined,
};

export const shoppingCarReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_SHOPPING_CAR:
      return {
        ...state,
        data: action.payload,
        loader: false,
        error: undefined,
      };
    case REMOVE_SHOPPING_CAR:
      return {
        ...state,
        data: action.payload,
        loader: false,
        error: undefined,
      };
    default:
      return state;
  }
};
