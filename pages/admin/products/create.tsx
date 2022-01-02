import { useState } from "react";
import { upDateImg } from "../../../services/firebase";
import { ProductCreate } from "../../../store/products/interface";

import { Field, Form, Formik, FormikProps, FieldArray } from "formik";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { productsCreateAction } from "../../../store/actions";

const ProductsActionPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [img, setImg] = useState<any>();

  const initialValues: ProductCreate = {
    name: "",
    img: [],
    price: 0,
  };

  return (
    <div>
      <h1>Crear producto</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
        }: FormikProps<ProductCreate>) => (
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
            />

            <TextField
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              name="price"
            />

            <FieldArray name="img">
              {({ push, remove }) => (
                <div>
                  {values.img.map((img) => (
                    <div key={img.name}>
                      <img
                        src={img.path}
                        style={{ width: "100px" }}
                        alt={img.name}
                      />
                      <p>{img.name}</p>
                    </div>
                  ))}
                  <TextField
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    onBlur={handleBlur}
                    value={name}
                    name={"imgName"}
                  />
                  <input
                    type="file"
                    onChange={(e: any) => setImg(e.target.files[0])}
                  />
                  <Button type="button" onClick={() => onUpdateImg(push)}>
                    agregar imagen
                  </Button>
                </div>
              )}
            </FieldArray>

            <Button type="submit">agregar producto</Button>
          </form>
        )}
      </Formik>
    </div>
  );

  async function onUpdateImg(push: any) {
    try {
      const response = await upDateImg(img, name);
      push({
        name: name,
        path: response,
      });
    } catch (error) {}
  }

  function onSubmit(values: ProductCreate) {
    dispatch(productsCreateAction(values));
  }
};

export default ProductsActionPage;
