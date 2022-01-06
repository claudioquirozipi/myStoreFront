import { Dispatch } from "redux";
import { Alert } from "./interface";
import { UI_ALERT_ADD, UI_ALERT_REMOVE } from "./types";

//*********************Add Alert********************

export const uiAlertAddAction = (payload: Alert) => ({
  type: UI_ALERT_ADD,
  payload,
});

//*********************Remove Alert********************
const remove = (id: string) => ({
  type: UI_ALERT_REMOVE,
  payload: id,
});

export const uiAlertRemoveAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch(remove(id));
  };
