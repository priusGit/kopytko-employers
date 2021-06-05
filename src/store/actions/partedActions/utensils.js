import * as actionTypes from "./actionTypes";
// import axios from "../../axios-orders";
export const MoveToHistoryStart = () => {
  return {
    type: actionTypes.MOVE_TO_HISTORY_START,
  };
};

export const MoveToHistorySuccess = () => {
  return {
    type: actionTypes.MOVE_TO_HISTORY_SUCCESS,
  };
};

export const MoveToHistoryFail = (error) => {
  return {
    type: actionTypes.MOVE_TO_HISTORY_FAIL,
    error: error,
  };
};
//todo
// export const MoveToHistory = (messageData) => {
//   return (dispatch) => {
//     dispatch(MoveToHistoryStart());
//     axios
//       .get("/messages.json", messageData)
//       .then(() => {
//         dispatch(MoveToHistorySuccess());
//       })
//       .catch((error) => {
//         dispatch(MoveToHistoryFail(error));
//       });
//   };
