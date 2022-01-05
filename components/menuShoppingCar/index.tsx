import { useEffect } from "react";

import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";

import { MenuShoppingCarProps } from "./interface";
import { currency } from "../../config/variables";

const MenuShoppingCar = (props: MenuShoppingCarProps) => {
  const { onClose, anchorEl, shoppingCarProduct, onDelete } = props;
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (!shoppingCarProduct.length) {
      onClose();
    }
  }, [shoppingCarProduct]);

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={shoppingCarProduct.length > 0 && open}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {shoppingCarProduct?.map((scp) => (
        <ListItem dense divider key={scp.id}>
          <ListItemAvatar>
            <Avatar
              src={scp.product.img[0].path}
              alt={scp.product.img[0].name}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{
              paddingRight: (theme) => theme.spacing(1),
              minWidth: (theme) => theme.spacing(17),
            }}
            primary={scp.product.name}
            secondary={`${scp.amount} => ${currency}${scp.price}`}
          />
          <IconButton>
            <DeleteIcon onClick={() => onDelete(scp.id)} color="error" />
          </IconButton>
        </ListItem>
      ))}
    </Menu>
  );
};

export default MenuShoppingCar;
