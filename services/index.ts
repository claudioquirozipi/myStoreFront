import {
  readProducts,
  createProduct,
  editedProduct,
  deleteProduct,
  createUser,
  login,
  logout,
} from "./firebase";

export const API = {
  products: {
    read: readProducts,
    create: createProduct,
    edit: editedProduct,
    delete: deleteProduct,
  },
  auth: {
    createUser: createUser,
    login: login,
    logout: logout,
  },
};
