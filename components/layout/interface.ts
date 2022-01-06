import { ShoppingCarProduct } from "../../store/shoppingCart/interface";

export interface LayoutProps {
  children: any;
  totalPrice: number;
  totalProducts: number;
  shoppingCarProduct: ShoppingCarProduct[];
  type?: "client" | "login";
}
