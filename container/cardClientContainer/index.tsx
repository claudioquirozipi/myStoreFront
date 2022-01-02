import { useSelector } from "react-redux";
import { ShoppingCarProduct } from "../../store/shoppingCart/interface";
import { CardClientContainerProps } from "./interface";

const CardClientContainer = (props: CardClientContainerProps) => {
  const { children, id } = props;
  const shoppingCar = useSelector((state: any) => state.shoppingCar);

  const productSelected: ShoppingCarProduct[] =
    shoppingCar.data.shoppingCarProduct.filter(
      (scp: ShoppingCarProduct) => scp.id === id
    );
  let amount = 0;
  if (productSelected.length) {
    amount = productSelected[0].amount;
  }
  return <div>{children({ amount })}</div>;
};

export default CardClientContainer;
