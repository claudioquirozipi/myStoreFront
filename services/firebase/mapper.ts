import { Product } from "../../store/products/interface";

export const readMapper = (response: any) => {
  const newResponse = response.map((product: any) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    mainImg: product.mainImg,
  }));
  return newResponse;
};
