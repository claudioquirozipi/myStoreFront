import {
  PRODUCTS_READ_START,
  PRODUCTS_READ_OK,
  PRODUCTS_READ_ERROR,
  PRODUCTS_CREATE_START,
  PRODUCTS_CREATE_OK,
  PRODUCTS_CREATE_ERROR,
  PRODUCTS_EDIT_START,
  PRODUCTS_EDIT_OK,
  PRODUCTS_EDIT_ERROR,
  PRODUCTS_DELETE_START,
  PRODUCTS_DELETE_OK,
  PRODUCTS_DELETE_ERROR,
} from "./types";
import { InitialState, Action, Product } from "./interface";

const initialState: InitialState = {
  data: [],
  loader: false,
  error: undefined,
};

export const productsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case PRODUCTS_READ_START:
      return {
        ...state,
        loader: true,
        error: undefined,
      };
    case PRODUCTS_READ_OK:
      return {
        ...state,
        data: action.payload,
        loader: false,
        error: undefined,
      };
    case PRODUCTS_READ_ERROR:
      return {
        ...state,
        data: [],
        loader: false,
        error: action.payload,
      };

    case PRODUCTS_CREATE_START:
      return {
        ...state,
        loader: true,
        error: undefined,
      };
    case PRODUCTS_CREATE_OK:
      return {
        ...state,
        data: [...state.data, action.payload],
        loader: false,
        error: undefined,
      };
    case PRODUCTS_CREATE_ERROR:
      return {
        ...state,
        loader: false,
        error: action.payload,
      };

    case PRODUCTS_EDIT_START:
      return {
        ...state,
        loader: true,
        error: undefined,
      };
    case PRODUCTS_EDIT_OK:
      return {
        ...state,
        data: state.data.map((d) =>
          d.id === action.payload.id ? action.payload : d
        ),
        loader: false,
        error: undefined,
      };
    case PRODUCTS_EDIT_ERROR:
      return {
        ...state,
        loader: false,
        error: action.payload,
      };

    case PRODUCTS_DELETE_START:
      return {
        ...state,
        loader: true,
        error: undefined,
      };
    case PRODUCTS_DELETE_OK:
      return {
        ...state,
        data: state.data.filter((d) => d.id !== action.payload),
        loader: false,
        error: undefined,
      };
    case PRODUCTS_DELETE_ERROR:
      return {
        ...state,
        loader: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
