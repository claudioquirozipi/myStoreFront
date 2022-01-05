import { LayoutProps } from "./interface";
import { PageWrapperSC } from "./styled";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuShoppingCar from "../menuShoppingCar";
import { deleteAllProductOfShoppingCarAction } from "../../store/actions";
import { useDispatch } from "react-redux";

const Layout = (props: LayoutProps) => {
  const { children, totalPrice, totalProducts, shoppingCarProduct } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Precio Total {totalPrice}
            </Typography>
            {totalProducts > 0 && (
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={handleClick}
              >
                <Badge badgeContent={totalProducts} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <PageWrapperSC>{children}</PageWrapperSC>
      <MenuShoppingCar
        onClose={onClose}
        anchorEl={anchorEl}
        shoppingCarProduct={shoppingCarProduct}
        onDelete={onDelete}
      />
    </div>
  );

  async function onDelete(id: string) {
    dispatch(deleteAllProductOfShoppingCarAction(id));
  }
};

export default Layout;
