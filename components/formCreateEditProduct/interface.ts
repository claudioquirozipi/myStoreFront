import { ProductCreate, ProductEdited } from "../../store/products/interface";

export interface FormCreateEditProductProps {
  onSubmit(values: ProductCreate | ProductEdited): void;
  initialValues: ProductCreate | ProductEdited;
  upDateImg: any;
}
