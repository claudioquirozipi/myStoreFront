import { Dispatch } from "redux";
import { API } from "../../services";
import { Product, ProductCreate, ProductEdited } from "./interface";
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

//*********************Read********************
const readStart = { type: PRODUCTS_READ_START };
const readOk = (payload: Product[]) => ({
  type: PRODUCTS_READ_OK,
  payload,
});
const readError = (error: string) => ({
  type: PRODUCTS_READ_ERROR,
  payload: error,
});

export const productsReadAction =
  () => async (dispatch: Dispatch, state: any) => {
    dispatch(readStart);
    try {
      const response: Product[] = await API.products.read();
      dispatch(readOk(response));
    } catch (error) {
      const errorSimulate = "ocurrió un error";
      dispatch(readError(errorSimulate));
    }
  };

//*********************Create********************
const createStart = { type: PRODUCTS_CREATE_START };
const createOk = (payload: Product[]) => ({
  type: PRODUCTS_CREATE_OK,
  payload,
});
const createError = (error: string) => ({
  type: PRODUCTS_CREATE_ERROR,
  payload: error,
});

export const productsCreateAction =
  (newProduct: ProductCreate) => async (dispatch: Dispatch, state: any) => {
    dispatch(createStart);
    try {
      // const response: any = await API.products.create(newProduct);
      // dispatch(createOk(response));
    } catch (error) {
      const errorSimulate = "ocurrió un error";
      dispatch(createError(errorSimulate));
    }
  };

//*********************Edit********************
const editStart = { type: PRODUCTS_EDIT_START };
const editOk = (payload: string) => ({
  type: PRODUCTS_EDIT_OK,
  payload,
});
const editError = (error: string) => ({
  type: PRODUCTS_EDIT_ERROR,
  payload: error,
});

export const producteditAction =
  (editedProduct: ProductEdited) => async (dispatch: Dispatch, state: any) => {
    dispatch(editStart);
    try {
      // const response: any = await API.products.edit(editedProduct);
      // dispatch(editOk(response));
    } catch (error) {
      const errorSimulate = "ocurrió un error";
      dispatch(editError(errorSimulate));
    }
  };

//*********************Delete********************
const deleteStart = { type: PRODUCTS_DELETE_START };
const deleteOk = (payload: string) => ({
  type: PRODUCTS_DELETE_OK,
  payload,
});
const deleteError = (error: string) => ({
  type: PRODUCTS_DELETE_ERROR,
  payload: error,
});

export const productDeleteAction =
  (id: string) => async (dispatch: Dispatch, state: any) => {
    dispatch(deleteStart);
    try {
      const response: any = await API.products.delete(id);
      dispatch(deleteOk(response));
    } catch (error) {
      const errorSimulate = "ocurrió un error";
      dispatch(deleteError(errorSimulate));
    }
  };
