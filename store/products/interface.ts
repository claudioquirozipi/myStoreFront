export interface InitialState {
  data: Product[];
  loader: boolean;
  error?: string;
}

export interface Action {
  type: string;
  payload: any;
}

interface Img {
  name: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  img: Img[];
  price: number;
}

export interface ProductCreate {
  name: string;
  img: Img[];
  price: number;
}

export interface ProductEdited {
  id: string;
  name: string;
  img: Img[];
  price: number;
}
