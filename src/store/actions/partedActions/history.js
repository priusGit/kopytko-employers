import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
export const fetchHistoryStart = () => {
  return {
    type: actionTypes.FETCH_HISTORY_START,
  };
};

export const fetchHistorySuccess = () => {
  return {
    type: actionTypes.FETCH_HISTORY_SUCCESS,
  };
};

export const fetchHistoryFail = (error) => {
  return {
    type: actionTypes.FETCH_HISTORY_FAIL,
    error: error,
  };
};
// todo
export const fetchHistory = (messageData) => {
  return (dispatch) => {
    dispatch(fetchHistoryStart());
    axios
      .get("/history.json", messageData)
      .then(() => {
        dispatch(fetchHistorySuccess());
      })
      .catch((error) => {
        dispatch(fetchHistoryFail(error));
      });
  };
};
