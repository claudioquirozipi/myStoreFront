import { Card, Fab } from "@mui/material";
import { CardClientProps } from "./interfase";
import {
  CardContainerSC,
  ImgSC,
  PriceSC,
  TitleSC,
  WrapperDescriptionSC,
  WrapperButtonsSC,
} from "./styled";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CardClient = (props: CardClientProps) => {
  const { product, addProduct, amount, removeProduct } = props;
  return (
    <Card>
      <CardContainerSC>
        <ImgSC src={product.img[0].path} alt={product.img[0].name} />
        <WrapperDescriptionSC>
          <div>
            <Typography variant="h5" color="primary" align="right">
              {product.name}
            </Typography>
            <Typography variant="h6" color="secondary" align="right">
              {product.price}
            </Typography>
          </div>
          <WrapperButtonsSC>
            <Fab
              color="primary"
              aria-label="add"
              size="small"
              onClick={() => removeProduct(product.id)}
            >
              <RemoveIcon />
            </Fab>

            <Typography variant="h6" color="initial">
              {amount}
            </Typography>
            <Fab
              color="primary"
              aria-label="add"
              size="small"
              onClick={() => addProduct(product.id)}
            >
              <AddIcon />
            </Fab>
          </WrapperButtonsSC>
        </WrapperDescriptionSC>
      </CardContainerSC>
    </Card>
  );
};

export default CardClient;
