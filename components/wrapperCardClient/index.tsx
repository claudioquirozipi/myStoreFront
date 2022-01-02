import CardClientContainer from "../../container/cardClientContainer";
import { Product } from "../../store/products/interface";
import CardClient from "../cardClient";
import { WrapperCardClientProps } from "./interface";
import { WrapperSC } from "./styled";

const WrapperCardClient = (props: WrapperCardClientProps) => {
  const { products, loader, addProduct, removeProduct } = props;
  return (
    <WrapperSC>
      {products.map((p: Product) => (
        <CardClientContainer id={p.id} key={p.id}>
          {({ amount }: any) => (
            <CardClient
              product={p}
              amount={amount}
              addProduct={addProduct}
              removeProduct={removeProduct}
            />
          )}
        </CardClientContainer>
      ))}
    </WrapperSC>
  );
};

export default WrapperCardClient;
