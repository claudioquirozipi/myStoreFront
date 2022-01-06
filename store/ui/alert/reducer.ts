import { UI_ALERT_ADD, UI_ALERT_REMOVE } from "./types";
import { InitialState, Action, Alert } from "./interface";

const initialState: InitialState = {
  data: [],
};

export const uiAlertReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UI_ALERT_ADD:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case UI_ALERT_REMOVE:
      return {
        ...state,
        data: state.data.filter((d) => d.id !== action.payload),
      };
    default:
      return state;
  }
};
