import { Product } from "../../store/products/interface";

export interface CardAdminProps {
  product: Product;
  deleteProduct(id: string): void;
}
