import {
  AUTH_CREATE_USER_START,
  AUTH_CREATE_USER_OK,
  AUTH_CREATE_USER_ERROR,
  AUTH_LOGIN_START,
  AUTH_LOGIN_OK,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT_START,
  AUTH_LOGOUT_OK,
  AUTH_LOGOUT_ERROR,
} from "./types";
import { InitialState, Action } from "./interface";

const initialState: InitialState = {
  data: [],
  loader: false,
  error: undefined,
};

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case AUTH_CREATE_USER_START:
      return {
        ...state,
        loader: true,
        error: undefined,
      };
    case AUTH_CREATE_USER_OK:
      return {
        ...state,
        data: action.payload,
        loader: false,
        error: undefined,
      };
    case AUTH_CREATE_USER_ERROR:
      return {
        ...state,
        data: [],
        loader: false,
        error: action.payload,
      };

    case AUTH_LOGIN_START:
      return {
        ...state,
        loader: true,
        error: undefined,
      };
    case AUTH_LOGIN_OK:
      return {
        ...state,
        data: action.payload,
        loader: false,
        error: undefined,
      };
    case AUTH_LOGIN_ERROR:
      return {
        ...state,
        data: [],
        loader: false,
        error: action.payload,
      };

    case AUTH_LOGOUT_START:
      return {
        ...state,
        loader: true,
        error: undefined,
      };
    case AUTH_LOGOUT_OK:
      return {
        ...state,
        data: action.payload,
        loader: false,
        error: undefined,
      };
    case AUTH_LOGOUT_ERROR:
      return {
        ...state,
        data: [],
        loader: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
