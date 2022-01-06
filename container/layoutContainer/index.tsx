import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import { LayoutContainerProps, AddAlert } from "./interface";
import { uiAlertRemoveAction } from "../../store/actions";
import Layout from "../../components/layout";

const LayoutContainer = (props: LayoutContainerProps) => {
  const { children, type } = props;
  const dispatch = useDispatch();
  const shoppingCar = useSelector((state: any) => state.shoppingCar);
  const uiAlert = useSelector((state: any) => state.ui.alert);

  const { enqueueSnackbar } = useSnackbar();

  const addAlert = ({ message, variant }: AddAlert) =>
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });

  useEffect(() => {
    if (uiAlert.data.length) {
      const lastUiAlert = uiAlert.data[uiAlert.data.length - 1];
      addAlert({ message: lastUiAlert.message, variant: lastUiAlert.variant });
      dispatch(uiAlertRemoveAction(lastUiAlert.id));
    }
  }, [uiAlert.data]);
  return (
    <Layout
      totalPrice={shoppingCar.data.totalPrice}
      totalProducts={shoppingCar.data.totalProducts}
      shoppingCarProduct={shoppingCar.data.shoppingCarProduct}
      type={type}
    >
      {children}
    </Layout>
  );
};

export default LayoutContainer;
