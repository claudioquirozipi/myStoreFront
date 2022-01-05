import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  productsCreateAction,
  productsReadAction,
  producteditAction,
  productDeleteAction,
} from "../../../store/actions";
import {
  Product,
  ProductCreate,
  ProductEdited,
} from "../../../store/products/interface";

const ProductsPage = () => {
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsReadAction());
  }, []);

  const newProduct: ProductCreate = {
    name: "casa",
    img: [],
    price: 45,
  };

  const editedProduct: ProductCreate = {
    name: "casa editada",
    img: [],
    price: 45,
  };
  console.log("fff products", products);
  return (
    <div>
      <h1>Productos</h1>

      <ul>
        {products.data.map((p: Product) => (
          <li key={p.id}>
            {p.name}
            {p.img && (
              <img
                style={{ width: "100px" }}
                src={p.img[0].path}
                alt={p.img[0].name}
              />
            )}
            <button onClick={() => editProduct({ ...editedProduct, id: p.id })}>
              editar
            </button>
            <button onClick={() => deleteProduct(p.id)}>borrar</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(productsCreateAction(newProduct))}>
        Agregar producto
      </button>
      <input type="file" />

      <button>agregar archivo </button>
    </div>
  );

  function editProduct(product: ProductEdited) {
    dispatch(producteditAction(product));
  }
  function deleteProduct(id: string) {
    dispatch(productDeleteAction(id));
  }
};

export default ProductsPage;
