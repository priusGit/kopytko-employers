import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
export const sendMessagesStart = () => {
  return {
    type: actionTypes.SEND_MESSAGE_START,
  };
};

export const sendMessagesSuccess = () => {
  return {
    type: actionTypes.SEND_MESSAGE_SUCCESS,
  };
};

export const sendMessagesFail = (error) => {
  return {
    type: actionTypes.SEND_MESSAGE_FAIL,
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
