export interface InitialState {
  data: any;
  loader: boolean;
  error?: string;
}

export interface Action {
  type: string;
  payload: any;
}

export interface CreateUser {
  user: string;
  password: string;
}

export interface Login {
  user: string;
  password: string;
}
