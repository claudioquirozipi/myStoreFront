import { ShoppingCarProduct } from "../../store/shoppingCart/interface";

export interface MenuShoppingCarProps {
  onClose: any;
  anchorEl: any;
  shoppingCarProduct: ShoppingCarProduct[];
  onDelete(id: string): void;
}
