import axios from "../../utils/axios";

export const getMovie = (data) => {
  return {
    type: "GET_MOVIE",
    payload: axios.get(
      `/movie?page=${data.page}&limit=${data.limit}&search=${data.search}&month=${data.month}&sort=${data.sort}`
    )
  };
};

export const postMovie = (data) => {
  return {
    type: "POST_MOVIE",
    payload: axios.post("/movie", data)
  };
};
