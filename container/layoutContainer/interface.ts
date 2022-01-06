import { VariantType } from "notistack";

export interface LayoutContainerProps {
  children: any;
  type?: "client" | "login";
}

export interface AddAlert {
  message: string;
  variant: VariantType;
}
