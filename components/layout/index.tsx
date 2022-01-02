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

const Layout = (props: LayoutProps) => {
  const { children, totalPrice, totalProducts } = props;
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
    </div>
  );
};

export default Layout;
