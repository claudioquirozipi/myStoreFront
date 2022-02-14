import { useState } from "react";
import { useDispatch } from "react-redux";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";

import { deleteAllProductOfShoppingCarAction } from "../../store/actions";
import { WrapperSC, WrapperClientSC, WrapperLoginSC } from "./styled";
import MenuShoppingCar from "../menuShoppingCar";
import { LayoutProps } from "./interface";
import Footer from "../footer";

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
            <Box sx={{ flexGrow: 1, height: (theme) => theme.spacing(8) }}>
              <AppBar position="fixed">
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
            <Footer type="client"/>
          </>
        );
      case "login":
        return <WrapperLoginSC>{children}</WrapperLoginSC>;
      default:
        return (
          <>
            <Box sx={{ flexGrow: 1, height: (theme) => theme.spacing(8) }}>
              <AppBar position="fixed">
                <Toolbar></Toolbar>
              </AppBar>
            </Box>
            <WrapperSC>{children}</WrapperSC>
            <Footer />
          </>
        );
    }
  }

  async function onDelete(id: string) {
    dispatch(deleteAllProductOfShoppingCarAction(id));
  }
};

export default Layout;
