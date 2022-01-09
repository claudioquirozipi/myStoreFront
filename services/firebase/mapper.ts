import { Product } from "../../store/products/interface";

export const readMapper = (response: any) => {
  const newResponse = response.map((product: any) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    img: product.img,
    category: product.category,
  }));
  return newResponse;
};
