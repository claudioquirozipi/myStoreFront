import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import Button from "@mui/material/Button";

import WrapperCardAdmin from "../../../components/wrapperCardAdmin";
import LayoutContainer from "../../../container/layoutContainer";
import {
  productsReadAction,
  productDeleteAction,
} from "../../../store/actions";

const ProductsPage = () => {
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(productsReadAction());
  }, [dispatch]);

  return (
    <LayoutContainer>
      <WrapperCardAdmin
        products={products.data}
        loader={false}
        deleteProduct={deleteProduct}
      />
      <Button
        variant="contained"
        fullWidth
        type="button"
        onClick={() => router.push("/admin/products/create")}
      >
        Agregar producto
      </Button>
    </LayoutContainer>
  );

  function deleteProduct(id: string) {
    dispatch(productDeleteAction(id));
  }
};

export default ProductsPage;
