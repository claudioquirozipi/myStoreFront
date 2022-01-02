import { Dispatch } from "redux";
import { Product } from "../products/interface";
import { ShoppingCar, ShoppingCarProduct } from "./interface";
import { ADD_SHOPPING_CAR, REMOVE_SHOPPING_CAR } from "./types";

//*********************Add********************
export const addShoppingCarAction =
  (id: string) => async (dispatch: Dispatch, getState: any) => {
    const state = getState();
    const productSelected: Product[] = state.products.data.filter(
      (p: Product) => p.id === id
    );
    let newPayload: ShoppingCar = { ...state.shoppingCar.data };
    if (productSelected) {
      newPayload.totalPrice = newPayload.totalPrice + productSelected[0].price;
      newPayload.totalProducts++;
      const existsProductInShoppingCar = newPayload.shoppingCarProduct.filter(
        (s) => s.id === id
      );
      if (existsProductInShoppingCar.length) {
        newPayload.shoppingCarProduct = newPayload.shoppingCarProduct.map((s) =>
          s.id === id
            ? {
                ...s,
                price: s.price + productSelected[0].price,
                amount: s.amount + 1,
              }
            : s
        );
      } else {
        newPayload.shoppingCarProduct.push({
          id: productSelected[0].id,
          product: productSelected[0],
          price: +productSelected[0].price,
          amount: 1,
        });
      }
    }
    newPayload.message = `Hola Deseo comprar estos productos: %0A,${newPayload.shoppingCarProduct.map(
      (scp) => `=>${scp.product.name} /S. ${scp.price} => ${scp.amount}-%0A`
    )}Total a pagar: ${newPayload.totalPrice} %0A Total de productos: ${
      newPayload.totalProducts
    }`;
    dispatch({
      type: ADD_SHOPPING_CAR,
      payload: newPayload,
    });
  };

//*********************Remove********************
export const removeShoppingCarAction =
  (id: string) => async (dispatch: Dispatch, getState: any) => {
    const state = getState();
    const productSelected: Product[] = state.products.data.filter(
      (p: Product) => p.id === id
    );
    let newPayload: ShoppingCar = { ...state.shoppingCar.data };
    if (productSelected) {
      const existsProductInShoppingCar = newPayload.shoppingCarProduct.filter(
        (s) => s.id === id
      );
      if (existsProductInShoppingCar.length) {
        newPayload.totalPrice =
          newPayload.totalPrice - productSelected[0].price;
        newPayload.totalProducts--;
        let newShoppingCarProduct: ShoppingCarProduct[] = [];
        newPayload.shoppingCarProduct.forEach((s) => {
          if (s.id === id && s.amount - 1 > 0) {
            newShoppingCarProduct.push({
              ...s,
              price: s.price - productSelected[0].price,
              amount: s.amount - 1,
            });
          } else if (s.id !== id) {
            newShoppingCarProduct.push(s);
          }
        });
        newPayload.shoppingCarProduct = newShoppingCarProduct;
      }
    }
    newPayload.message = `Hola Deseo comprar estos productos: %0A,${newPayload.shoppingCarProduct.map(
      (scp) => `=>${scp.product.name} /S. ${scp.price} => ${scp.amount}-%0A`
    )}Total a pagar: ${newPayload.totalPrice} %0A Total de productos: ${
      newPayload.totalProducts
    }`;
    dispatch({
      type: REMOVE_SHOPPING_CAR,
      payload: newPayload,
    });
  };
