import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik, FormikProps, FieldArray } from "formik";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormCreateEditProduct from "../../../../components/formCreateEditProduct";
import { ProductCreate } from "../../../../store/products/interface";
import LayoutContainer from "../../../../container/layoutContainer";
import { productsCreateAction } from "../../../../store/actions";
import { upDateImg } from "../../../../services/firebase";

const ProductsEditPage = () => {
  const dispatch = useDispatch();

  const initialValues: ProductCreate = {
    name: "",
    img: [],
    price: 0,
  };

  return (
    <LayoutContainer>
      <FormCreateEditProduct
        onSubmit={onSubmit}
        upDateImg={upDateImg}
        initialValues={initialValues}
      />
    </LayoutContainer>
  );
  function onSubmit(values: ProductCreate) {
    dispatch(productsCreateAction(values));
  }
};

export default ProductsEditPage;
