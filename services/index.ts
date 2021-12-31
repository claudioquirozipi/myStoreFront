import {
  readProducts,
  createProduct,
  editedProduct,
  deleteProduct,
} from "./firebase";

export const API = {
  products: {
    read: readProducts,
    create: createProduct,
    edit: editedProduct,
    delete: deleteProduct,
  },
};
