import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import { FormLoginProps } from "./interface";

const SignupSchema = Yup.object().shape({
  user: Yup.string().email("Correo invalido").required("Requerido"),
  password: Yup.string()
    .min(6, "Muy Corto!")
    .max(10, "Muy Largo!")
    .required("Requerido"),
});

const FormLogin = (props: FormLoginProps) => {
  const { initialValues, onSubmit } = props;

  return (
    <Paper>
      <Stack
        spacing={2}
        direction="column"
        alignItems="center"
        sx={{ padding: (theme) => theme.spacing(1, 4, 4) }}
      >
        <Typography variant="h4" color="initial" align="center">
          Login
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={SignupSchema}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
          }: FormikProps<any>) => (
            <form onSubmit={handleSubmit}>
              <Stack spacing={2} direction="column" alignItems="center">
                <TextField
                  label="Email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.user}
                  name="user"
                  error={errors.user ? true : false}
                  helperText={errors.user}
                />
                <TextField
                  label="Contraseña"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  error={errors.password ? true : false}
                  helperText={errors.password}
                />
                <Button type="submit" variant="contained">
                  login
                </Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Stack>
    </Paper>
  );
};

export default FormLogin;
