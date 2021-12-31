import { Dispatch } from "redux";
import { API } from "../../services";
import { CreateUser, Login } from "./interface";
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

//*********************Create user********************
const createUserStart = { type: AUTH_CREATE_USER_START };
const createUserOk = (payload: any) => ({
  type: AUTH_CREATE_USER_OK,
  payload,
});
const createUserError = (error: string) => ({
  type: AUTH_CREATE_USER_ERROR,
  payload: error,
});

export const authCreateUserAction =
  ({ user, password }: CreateUser) =>
  async (dispatch: Dispatch) => {
    dispatch(createUserStart);
    try {
      const response: any = await API.auth.createUser(user, password);
      dispatch(createUserOk(response));
    } catch (error) {
      const errorSimulate = "ocurrió un error";
      dispatch(createUserError(errorSimulate));
    }
  };

//*********************login********************
const loginStart = { type: AUTH_LOGIN_START };
const loginOk = (payload: any) => ({
  type: AUTH_LOGIN_OK,
  payload,
});
const loginError = (error: string) => ({
  type: AUTH_LOGIN_ERROR,
  payload: error,
});

export const authLoginAction =
  ({ user, password }: Login) =>
  async (dispatch: Dispatch) => {
    dispatch(loginStart);
    try {
      const response: any = await API.auth.login(user, password);
      dispatch(loginOk(response));
    } catch (error) {
      const errorSimulate = "ocurrió un error";
      dispatch(loginError(errorSimulate));
    }
  };

//*********************Logout********************
const logoutStart = { type: AUTH_LOGOUT_START };
const logoutOk = (payload: any) => ({
  type: AUTH_LOGOUT_OK,
  payload,
});
const logoutError = (error: string) => ({
  type: AUTH_LOGOUT_ERROR,
  payload: error,
});

export const authLogoutAction = () => async (dispatch: Dispatch) => {
  dispatch(logoutStart);
  try {
    const response: any = await API.auth.logout();
    dispatch(logoutOk(response));
  } catch (error) {
    const errorSimulate = "ocurrió un error";
    dispatch(logoutError(errorSimulate));
  }
};
