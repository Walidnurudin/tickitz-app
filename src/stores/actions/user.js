import axios from "../../utils/axios";

export const getUser = () => {
  return {
    type: "GET_USER",
    payload: axios.get("user")
  };
};
