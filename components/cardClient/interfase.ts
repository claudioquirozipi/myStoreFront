import { Product } from "../../store/products/interface";

export interface CardClientProps {
  product: Product;
  addProduct: any;
  removeProduct: any;
  amount: number;
}
