import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const sendMessagesStart = () => {
  return {
    type: actionTypes.SEND_MESSAGES_START,
  };
};

export const sendMessagesSuccess = () => {
  return {
    type: actionTypes.SEND_MESSAGES_SUCCESS,
  };
};

export const sendMessagesFail = (error) => {
  return {
    type: actionTypes.SEND_MESSAGES_FAIL,
    error: error,
  };
};
//SEND TO EMAIL USING FIREBASE
// export const sendMessage = (messageData) => {
//   return (dispatch) => {
//     dispatch(sendMessageStart());
//     axios
//       .post("/messages.json", messageData)
//       .then(() => {
//         dispatch(sendMessageSuccess());
//       })
//       .catch((error) => {
//         dispatch(sendMessageFail(error));
//       });
//   };
// };

export const fetchMessageStart = () => {
  return {
    type: actionTypes.FETCH_MESSAGES_START,
  };
};

export const fetchMessageSuccess = () => {
  return {
    type: actionTypes.FETCH_MESSAGES_SUCCESS,
  };
};

export const fetchMessageFail = (error) => {
  return {
    type: actionTypes.FETCH_MESSAGES_FAIL,
    error: error,
  };
};
//todo
export const fetchMessages = (messageData) => {
  return (dispatch) => {
    dispatch(fetchMessageStart());
    axios
      .get("/messages.json", messageData)
      .then(() => {
        dispatch(fetchMessageSuccess());
      })
      .catch((error) => {
        dispatch(fetchMessageFail(error));
      });
  };
};

export const updateMessageStart = () => {
  return {
    type: actionTypes.UPDATE_MESSAGES_START,
  };
};

export const updateMessageSuccess = () => {
  return {
    type: actionTypes.UPDATE_MESSAGES_SUCCESS,
  };
};

export const updateMessageFail = (error) => {
  return {
    type: actionTypes.UPDATE_MESSAGES_FAIL,
    error: error,
  };
};
//todo
// export const updateMessages = (messageData) => {
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

//reservations

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

//data

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
// todo
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

//HISTORY

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
    dispatch(fetchDataStart());
    axios
      .get("/history.json", messageData)
      .then(() => {
        dispatch(fetchDataSuccess());
      })
      .catch((error) => {
        dispatch(fetchDataFail(error));
      });
  };
};

//orders

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrdersSuccess = () => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};
// todo
export const fetchOrders = (messageData) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    axios
      .get("/orders.json", messageData)
      .then(() => {
        dispatch(fetchOrdersSuccess());
      })
      .catch((error) => {
        dispatch(fetchOrdersFail(error));
      });
  };
};

export const updateOrdersStart = () => {
  return {
    type: actionTypes.UPDATE_ORDERS_START,
  };
};

export const updateOrdersSuccess = () => {
  return {
    type: actionTypes.UPDATE_ORDERS_SUCCESS,
  };
};

export const updateOrdersFail = (error) => {
  return {
    type: actionTypes.UPDATE_ORDERS_FAIL,
    error: error,
  };
};
//todo
// export const updateOrders = (messageData) => {
//   return (dispatch) => {
//     dispatch(updateOrdersStart());
//     axios
//       .get("/messages.json", messageData)
//       .then(() => {
//         dispatch(updateOrdersSuccess());
//       })
//       .catch((error) => {
//         dispatch(updateOrdersFail(error));
//       });
//   };
// };

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

//MOVE_TO_HISTORY
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
