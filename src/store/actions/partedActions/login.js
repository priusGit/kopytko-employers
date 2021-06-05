import * as actionTypes from "./actionTypes";
// import axios from "../../axios-orders";
export const LogInStart = () => {
  return {
    type: actionTypes.LOG_IN_START,
  };
};

export const LogInSuccess = () => {
  return {
    type: actionTypes.LOG_IN_SUCCESS,
  };
};

export const LogInFail = (error) => {
  return {
    type: actionTypes.LOG_IN_FAIL,
    error: error,
  };
};

//todo
// export const LogIn = (messageData) => {
//   return (dispatch) => {
//     dispatch(LogInStart());
//     axios
//       .get("/messages.json", messageData)
//       .then(() => {
//         dispatch(LogInSuccess());
//       })
//       .catch((error) => {
//         dispatch(LogInFail(error));
//       });
//   };
export const LogOutStart = () => {
  return {
    type: actionTypes.LOG_OUT_START,
  };
};

export const LogOutSuccess = () => {
  return {
    type: actionTypes.LOG_OUT_SUCCESS,
  };
};

export const LogOutFail = (error) => {
  return {
    type: actionTypes.LOG_OUT_FAIL,
    error: error,
  };
};

//todo
// export const LogOut = (messageData) => {
//   return (dispatch) => {
//     dispatch(LogOutStart());
//     axios
//       .get("/messages.json", messageData)
//       .then(() => {
//         dispatch(LogOutSuccess());
//       })
//       .catch((error) => {
//         dispatch(LogOutFail(error));
//       });
//   };
