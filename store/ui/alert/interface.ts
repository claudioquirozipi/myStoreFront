import { VariantType } from "notistack";

export interface InitialState {
  data: Alert[];
}

export interface Action {
  type: string;
  payload: any;
}

export interface Alert {
  id: string;
  message: string;
  variant: VariantType;
}
