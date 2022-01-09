import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import { CardContainerSC, ImgSC, WrapperDescriptionSC } from "./styled";
import { currency } from "../../config/variables";
import { CardAdminProps } from "./interfase";

const CardClient = (props: CardAdminProps) => {
  const { product, deleteProduct } = props;
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
              {currency} {product.price}
            </Typography>
            <IconButton color="warning" aria-label="add" onClick={() => {}}>
              <ModeEditIcon />
            </IconButton>
            <IconButton
              color="error"
              aria-label="add"
              onClick={() => deleteProduct(product.id)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </WrapperDescriptionSC>
      </CardContainerSC>
    </Card>
  );
};

export default CardClient;
