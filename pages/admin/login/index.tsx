import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import LayoutContainer from "../../../container/layoutContainer";
import { observerAuth } from "../../../services/firebase";
import { authLoginAction } from "../../../store/actions";
import FormLogin from "../../../components/formLogin";

const LoginPage: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  interface Values {
    user: string;
    password: string;
  }

  const initialValues: Values = {
    user: "",
    password: "",
  };

  observerAuth();

  return (
    <LayoutContainer type="login">
      <FormLogin initialValues={initialValues} onSubmit={onSubmit} />
    </LayoutContainer>
  );

  function onSubmit(values: Values, actions: any) {
    dispatch(authLoginAction(values, router));
    actions.setSubmitting(false);
  }
};

export default LoginPage;
