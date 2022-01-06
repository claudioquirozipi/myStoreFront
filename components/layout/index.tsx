import { useState } from "react";
import { useDispatch } from "react-redux";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";

import { deleteAllProductOfShoppingCarAction } from "../../store/actions";
import { WrapperSC, WrapperClientSC, WrapperLoginSC } from "./styled";
import MenuShoppingCar from "../menuShoppingCar";
import { LayoutProps } from "./interface";

const Layout = (props: LayoutProps) => {
  const { children, totalPrice, totalProducts, shoppingCarProduct, type } =
    props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return <>{wrapperType(children, type)}</>;

  function wrapperType(children: any, type: "client" | "login" | undefined) {
    switch (type) {
      case "client":
        return (
          <>
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
            <MenuShoppingCar
              onClose={onClose}
              anchorEl={anchorEl}
              shoppingCarProduct={shoppingCarProduct}
              onDelete={onDelete}
            />
            <WrapperClientSC>{children}</WrapperClientSC>;
          </>
        );
      case "login":
        return <WrapperLoginSC>{children}</WrapperLoginSC>;
      default:
        return <WrapperSC>{children}</WrapperSC>;
    }
  }

  async function onDelete(id: string) {
    dispatch(deleteAllProductOfShoppingCarAction(id));
  }
};

export default Layout;
