import axios from "../../utils/axios";

export const getDashboard = (data) => {
  return {
    type: "GET_DASHBOARD",
    payload: axios.get(
      `/booking/dashboard?movieId=${data.movieId}&location=${data.location}&premiere=${data.premiere}`
    )
  };
};

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

export const updateMovie = (id, data) => {
  return {
    type: "UPDATE_MOVIE",
    payload: axios.patch(`/movie/${id}`, data)
  };
};

export const deleteMovie = (data) => {
  return {
    type: "DELETE_MOVIE",
    payload: axios.delete(`/movie/${data}`)
  };
};

// HELPER
export const errorFalse = () => {
  return {
    type: "ERROR_FALSE"
  };
};
