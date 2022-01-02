import { Product } from "../products/interface";

export interface InitialState {
  data: ShoppingCar;
  loader: boolean;
  error?: string;
}

export interface Action {
  type: string;
  payload: any;
}

export interface ShoppingCar {
  totalPrice: number;
  totalProducts: number;
  shoppingCarProduct: ShoppingCarProduct[];
  message: string;
}

export interface ShoppingCarProduct {
  id: string;
  product: Product;
  amount: number;
  price: number;
}
