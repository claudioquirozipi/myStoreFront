export interface FormLoginProps {
  initialValues: InitialValues;
  onSubmit(values: InitialValues, actions: any): void;
}

export interface InitialValues {
  user: string;
  password: string;
}
