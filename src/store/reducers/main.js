import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  data: null,
  loading: null,
  loggedIn: null,
  orders: null,
};

const sendMessageStart = (state) => {
  return updateObject(state, { loading: true });
};

const sendMessageSuccess = (state) => {
  return updateObject(state, { loading: false });
};

const sendMessageFail = (state) => {
  return updateObject(state, { loading: false });
};

const sendReservationStart = (state) => {
  return updateObject(state, { loading: true });
};

const sendReservationSuccess = (state) => {
  return updateObject(state, { loading: false });
};

const sendReservationFail = (state) => {
  return updateObject(state, { loading: false });
};
const fetchReservationStart = (state) => {
  return updateObject(state, { loading: true });
};

const fetchReservationSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    numberOfReservations: action.numberOfReservations,
  });
};

const fetchReservationFail = (state) => {
  return updateObject(state, {
    loading: false,
  });
};
//
const updateOrderStart = (state) => {
  return updateObject(state, { loading: true });
};

const updateOrderSuccess = (state) => {
  return updateObject(state, { loading: false });
};

const updateOrderFail = (state) => {
  return updateObject(state, { loading: false });
};
const fetchOrderStart = (state) => {
  return updateObject(state, { loading: true });
};

const fetchOrderSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    orders: action.orders,
  });
};

const fetchOrderFail = (state) => {
  return updateObject(state, {
    loading: false,
  });
};
//
const fetchDataStart = (state) => {
  return updateObject(state, { loading: true });
};

const fetchDataSuccess = (state) => {
  return updateObject(state, {
    loading: false,
  });
};

const fetchDataFail = (state) => {
  return updateObject(state, {
    loading: false,
  });
};
const fetchHistoryStart = (state) => {
  return updateObject(state, { loading: true });
};

const fetchHistorySuccess = (state) => {
  return updateObject(state, {
    loading: false,
  });
};

const fetchHistoryFail = (state) => {
  return updateObject(state, {
    loading: false,
  });
};

const screenResize = (state, action) => {
  const newWidth = action.width;
  console.log(newWidth);
  return updateObject(state, {
    windowWidth: newWidth,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //messages
    case actionTypes.SEND_MESSAGE_START:
      return sendMessageStart(state, action);
    case actionTypes.SEND_MESSAGE_SUCCESS:
      return sendMessageSuccess(state, action);
    case actionTypes.SEND_MESSAGE_FAIL:
      return sendMessageFail(state, action);
    //reservations
    case actionTypes.UPDATE_RESERVATION_START:
      return sendReservationStart(state, action);
    case actionTypes.UPDATE_RESERVATION_SUCCESS:
      return sendReservationSuccess(state, action);
    case actionTypes.UPDATE_RESERVATION_FAIL:
      return sendReservationFail(state, action);
    case actionTypes.FETCH_RESERVATIONS_START:
      return fetchReservationStart(state, action);
    case actionTypes.FETCH_RESERVATIONS_SUCCESS:
      return fetchReservationSuccess(state, action);
    case actionTypes.FETCH_RESERVATIONS_FAIL:
      return fetchReservationFail(state, action);
    //data
    case actionTypes.FETCH_DATA_START:
      return fetchDataStart(state, action);
    case actionTypes.FETCH_DATA_SUCCESS:
      return fetchDataSuccess(state, action);
    case actionTypes.FETCH_DATA_FAIL:
      return fetchDataFail(state, action);
    //history
    case actionTypes.FETCH_HISTORY_START:
      return fetchHistoryStart(state, action);
    case actionTypes.FETCH_HISTORY_SUCCESS:
      return fetchHistorySuccess(state, action);
    case actionTypes.FETCH_HISTORY_FAIL:
      return fetchHistoryFail(state, action);
    //login
    //orders
    case actionTypes.UPDATE_ORDERS_START:
      return updateOrderStart(state, action);
    case actionTypes.UPDATE_ORDERS_SUCCESS:
      return updateOrderSuccess(state, action);
    case actionTypes.UPDATE_ORDERS_FAIL:
      return updateOrderFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrderStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrderSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrderFail(state, action);
    //utensils
    case actionTypes.SCREEN_RESIZE:
      return screenResize(state, action);
    default:
      return state;
  }
};

export default reducer;
