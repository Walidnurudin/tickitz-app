import axios from "../../utils/axios";

export const getUser = () => {
  return {
    type: "GET_USER",
    payload: axios.get("user")
  };
};

export const getUserBooking = () => {
  return {
    type: "GET_USER_BOOKING",
    payload: axios.get("booking/user-id")
  };
};
