import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
export const fetchDataStart = () => {
  return {
    type: actionTypes.FETCH_DATA_START,
  };
};

export const fetchDataSuccess = () => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
  };
};

export const fetchDataFail = (error) => {
  return {
    type: actionTypes.FETCH_DATA_FAIL,
    error: error,
  };
};
export const fetchData = (messageData) => {
  return (dispatch) => {
    dispatch(fetchDataStart());
    axios
      .get("/reservations.json", messageData)
      .then(() => {
        dispatch(fetchDataSuccess());
      })
      .catch((error) => {
        dispatch(fetchDataFail(error));
      });
  };
};
