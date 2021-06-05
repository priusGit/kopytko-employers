import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
export const fetchReservationsStart = () => {
  return {
    type: actionTypes.FETCH_RESERVATIONS_START,
  };
};

export const fetchReservationsSuccess = () => {
  return {
    type: actionTypes.FETCH_RESERVATIONS_SUCCESS,
  };
};

export const fetchReservationsFail = (error) => {
  return {
    type: actionTypes.FETCH_RESERVATIONS_FAIL,
    error: error,
  };
};
// todo
export const fetchReservations = (messageData) => {
  return (dispatch) => {
    dispatch(fetchReservationsStart());
    axios
      .get("/reservations.json", messageData)
      .then(() => {
        dispatch(fetchReservationsSuccess());
      })
      .catch((error) => {
        dispatch(fetchReservationsFail(error));
      });
  };
};

export const updateReservationsStart = () => {
  return {
    type: actionTypes.UPDATE_RESERVATIONS_START,
  };
};

export const updateReservationsSuccess = () => {
  return {
    type: actionTypes.UPDATE_RESERVATIONS_SUCCESS,
  };
};

export const updateReservationsFail = (error) => {
  return {
    type: actionTypes.UPDATE_RESERVATIONS_FAIL,
    error: error,
  };
};
//todo
// export const updateReservations = (messageData) => {
//   return (dispatch) => {
//     dispatch(fetchMessageStart());
//     axios
//       .get("/messages.json", messageData)
//       .then(() => {
//         dispatch(fetchMessageSuccess());
//       })
//       .catch((error) => {
//         dispatch(fetchMessageFail(error));
//       });
//   };
// };
