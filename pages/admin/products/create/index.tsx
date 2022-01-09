import { useDispatch, useSelector } from "react-redux";

import FormCreateEditProduct from "../../../../components/formCreateEditProduct";
import { ProductCreate } from "../../../../store/products/interface";
import LayoutContainer from "../../../../container/layoutContainer";
import { productsCreateAction } from "../../../../store/actions";
import { upDateImg } from "../../../../services/firebase";

const ProductsCreatePage = () => {
  const dispatch = useDispatch();

  const initialValues: ProductCreate = {
    name: "",
    description: "",
    img: [],
    price: 0,
    category: [],
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

export default ProductsCreatePage;
