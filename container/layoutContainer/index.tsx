import Layout from "../../components/layout";
import { LayoutContainerProps } from "./interface";
import { useDispatch, useSelector } from "react-redux";

const LayoutContainer = (props: LayoutContainerProps) => {
  const { children } = props;
  const shoppingCar = useSelector((state: any) => state.shoppingCar);
  return (
    <Layout
      totalPrice={shoppingCar.data.totalPrice}
      totalProducts={shoppingCar.data.totalProducts}
    >
      {children}
    </Layout>
  );
};

export default LayoutContainer;
