import { Product } from "../../store/products/interface";

export interface WrapperCardAdminProps {
  products: Product[];
  loader: boolean;
  deleteProduct(id: string): void;
}
