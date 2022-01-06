import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  productsReadAction,
  productsCreateAction,
  addShoppingCarAction,
  removeShoppingCarAction,
} from "../store/actions";
import { Product } from "../store/products/interface";
import CardClient from "../components/cardClient";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import WrapperCardClient from "../components/wrapperCardClient";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LayoutContainer from "../container/layoutContainer";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);
  const shoppingCar = useSelector((state: any) => state.shoppingCar);

  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    dispatch(productsReadAction());
  }, []);

  return (
    <LayoutContainer type="client">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WrapperCardClient
        products={products.data}
        addProduct={addProduct}
        removeProduct={removeProduct}
        loader={products.loader}
      />

      <Fab color="primary" aria-label="add">
        <FilterAltIcon />
      </Fab>
      <TextField
        type="text"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
        name={"phoneNumber"}
      />
      <a href={`https://wa.me/${phoneNumber}?text=${shoppingCar.data.message}`}>
        <Fab color="primary" aria-label="add">
          <ShoppingCartCheckoutIcon />
        </Fab>
      </a>
    </LayoutContainer>
  );
  function addProduct(id: string) {
    dispatch(addShoppingCarAction(id));
  }

  function removeProduct(id: string) {
    dispatch(removeShoppingCarAction(id));
  }
};

export default Home;
