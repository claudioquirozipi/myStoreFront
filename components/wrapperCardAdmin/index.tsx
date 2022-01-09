import { Product } from "../../store/products/interface";
import CardAdmin from "../cardAdmin";
import { WrapperCardAdminProps } from "./interface";
import { WrapperSC } from "./styled";

const WrapperCardAdmin = (props: WrapperCardAdminProps) => {
  const { products, loader, deleteProduct } = props;
  return (
    <WrapperSC>
      {products.map((p: Product) => (
        <CardAdmin product={p} deleteProduct={deleteProduct} />
      ))}
    </WrapperSC>
  );
};

export default WrapperCardAdmin;
