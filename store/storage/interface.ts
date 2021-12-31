export interface InitialState {
  data: Product[];
  loader: boolean;
  error?: string;
}

export interface Action {
  type: string;
  payload: any;
}

export interface Product {
  id: string;
  name: string;
  mainImg: string;
  price: number;
}

export interface ProductCreate {
  name: string;
  mainImg: string;
  price: number;
}

export interface ProductEdited {
  id: string;
  name: string;
  mainImg: string;
  price: number;
}
