import * as actionTypes from "../actionTypes";
import axios from "../../../axios-orders";
export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};
// todo
export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());

    axios
      .get("/orders.json")
      .then((res) => {
        dispatch(fetchOrdersSuccess(res.data));
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
