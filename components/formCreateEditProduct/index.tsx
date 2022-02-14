import { useState } from "react";
import { Formik, FormikProps, FieldArray } from "formik";
import * as Yup from "yup";

import ImageListItemBar from "@mui/material/ImageListItemBar";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ImageListItem from "@mui/material/ImageListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ImageList from "@mui/material/ImageList";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { ProductCreate, ProductEdited } from "../../store/products/interface";
import { FormCreateEditProductProps } from "./interface";
import { Grid } from "@mui/material";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Requerido"),
  description: Yup.string().required("Requerido"),
  price: Yup.number()
    .min(0, "Debe ser mayor o igual a cero")
    .required("Requerido"),
  img: Yup.array().min(1, "Debe agregar al menos una imagen"),
  category: Yup.array(),
});

const FormCreateEditProduct = (props: FormCreateEditProductProps) => {
  const { initialValues, onSubmit, upDateImg } = props;

  const [nameTouch, setNameTouch] = useState(false);
  const [img, setImg] = useState<any>();
  const [name, setName] = useState("");

  const [category, setCategory] = useState([]);

  const names = [
    "Categoría 1",
    "Categoría 2",
    "Categoría 3",
    "Categoría 4",
    "Categoría 5",
    "Categoría 6",
  ];

  return (
    <>
      <Formik
        initialValues={initialValues}
        // onSubmit={onSubmit}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
        validationSchema={SignupSchema}
      >
        {({
          handleSubmit,
          handleReset,
          handleChange,
          handleBlur,
          values,
          errors,
          isValid,
          touched,
        }: FormikProps<ProductCreate | ProductEdited>) => (
          <Paper sx={{ padding: (theme) => theme.spacing(2, 1) }}>
            <form onSubmit={handleSubmit}>
              {console.log("fff, values", values)}

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <TextField
                      type="text"
                      label={"Nombre del producto"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      name="name"
                      fullWidth
                      error={handleErrors(errors, touched, "name")}
                      helperText={errors.name}
                    />

                    <TextField
                      type="text"
                      label="Descripción del producto"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      name="description"
                      fullWidth
                      multiline
                      rows={3}
                      error={handleErrors(errors, touched, "description")}
                      helperText={errors.description}
                    />

                    <TextField
                      type="number"
                      label="Precio"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      name="price"
                      fullWidth
                      error={handleErrors(errors, touched, "price")}
                      helperText={errors.price}
                    />
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <FormControl>
                      <Select
                        multiple
                        value={values.category}
                        name="category"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FieldArray name="img">
                      {({ push, remove }) => (
                        <>
                          {values.img.length ? (
                            <ImageList>
                              {values.img.map((img, i) => (
                                <ImageListItem key={img.name}>
                                  <img src={img.path} alt={img.name} />

                                  <ImageListItemBar
                                    title={img.name}
                                    position="bottom"
                                    actionIcon={
                                      <IconButton
                                        sx={{ color: "white" }}
                                        aria-label={`star ${img.name}`}
                                        onClick={() => remove(i)}
                                      >
                                        <DeleteIcon />
                                      </IconButton>
                                    }
                                    actionPosition="right"
                                  />
                                </ImageListItem>
                              ))}
                            </ImageList>
                          ) : (
                            <Typography variant="h6" gutterBottom color="error">
                              {errors.img}
                            </Typography>
                          )}

                          <Stack
                            spacing={2}
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <TextField
                              type="text"
                              label="Nombre de la imagen"
                              onChange={(e) => setName(e.target.value)}
                              onTouchStart={() => setNameTouch(true)}
                              onBlur={handleBlur}
                              value={name}
                              name={"imgName"}
                              error={name === "" && nameTouch}
                              helperText={
                                nameTouch &&
                                name === "" &&
                                "Debe agregar un nombre "
                              }
                            />
                            <IconButton size="small">
                              <label>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  {img ? (
                                    <Avatar
                                      src={URL.createObjectURL(img)}
                                      alt={name}
                                    />
                                  ) : (
                                    <AddAPhotoIcon />
                                  )}
                                  <input
                                    type="file"
                                    onChange={(e: any) =>
                                      setImg(e.target.files[0])
                                    }
                                    hidden
                                  />
                                </Box>
                              </label>
                            </IconButton>

                            <Fab
                              size="small"
                              color="primary"
                              disabled={!img || !name}
                              onClick={() => onUpdateImg(push)}
                            >
                              <AddIcon />
                            </Fab>
                          </Stack>
                        </>
                      )}
                    </FieldArray>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    disabled={touched.name !== true || !isValid}
                  >
                    Agregar producto
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        )}
      </Formik>
    </>
  );

  async function onUpdateImg(push: any) {
    try {
      const response = await upDateImg(img, name);
      push({
        name: name,
        path: response,
      });
      setImg(undefined);
      setName("");
      setNameTouch(false);
    } catch (error) {}
  }

  function handleErrors(errors: any, touched: any, name: string): boolean {
    if (
      errors[name] &&
      errors[name] !== "" &&
      touched[name] &&
      touched[name] === true
    ) {
      return true;
    }
    return false;
  }
};

export default FormCreateEditProduct;
