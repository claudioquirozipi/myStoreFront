import { Grid } from "@mui/material";
import CardClientContainer from "../../container/cardClientContainer";
import { Product } from "../../store/products/interface";
import CardClient from "../cardClient";
import { WrapperCardClientProps } from "./interface";

const WrapperCardClient = (props: WrapperCardClientProps) => {
  const { products, loader, addProduct, removeProduct } = props;
  return (
    <Grid container spacing={2}>
      {products.map((p: Product) => (
        <Grid item xs={12} md={6} key={p.id}>
          <CardClientContainer id={p.id}>
            {({ amount }: any) => (
              <CardClient
                product={p}
                amount={amount}
                addProduct={addProduct}
                removeProduct={removeProduct}
              />
            )}
          </CardClientContainer>
        </Grid>
      ))}
    </Grid>
  );
};

export default WrapperCardClient;
