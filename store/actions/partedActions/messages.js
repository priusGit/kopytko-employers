import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
export const sendMessageFail = (error) => {
    return {
        type: actionTypes.SEND_MESSAGES_FAIL,
        error: error,
    };
};
