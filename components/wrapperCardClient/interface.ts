import { Product } from "../../store/products/interface";

export interface WrapperCardClientProps {
  products: Product[];
  loader: boolean;
  addProduct: any;
  removeProduct: any;
}
