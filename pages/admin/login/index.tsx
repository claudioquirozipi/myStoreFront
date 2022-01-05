import type { NextPage } from "next";
import { Field, Form, Formik, FormikProps } from "formik";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import {
  authCreateUserAction,
  authLoginAction,
  authLogoutAction,
} from "../../../store/actions";
import { observerAuth } from "../../../services/firebase";
const LoginPage: NextPage = () => {
  const dispatch = useDispatch();

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
    <div>
      <h1>login sd </h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
        }: FormikProps<any>) => (
          <form onSubmit={handleSubmit}>
            <TextField
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.user}
              name="user"
              //   error={errors.user && "error"}
            />
            <TextField
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              name="password"
              //   error={errors.password && "error"}
            />
            {/* <Button variant="contained">Hello World</Button> */}
            {errors.name && <div id="feedback">{errors.name}</div>}
            <Button type="submit">login</Button>
            <Button type="button" onClick={onLogout}>
              logout
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
  function onSubmit(values: Values, actions: any) {
    dispatch(authLoginAction(values));
    actions.setSubmitting(false);
  }

  function onLogout() {
    dispatch(authLogoutAction());
  }
};

export default LoginPage;
