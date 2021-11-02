import axios from "../../utils/axios";

export const getSchedule = (data) => {
  return {
    type: "GET_SCHEDULE",
    payload: axios.get(
      `/schedule?page=${data.page}&limit=${data.limit}&searchLocation=${data.location}&searchMovieId=${data.movieId}&sort=${data.sort}`
    )
  };
};

export const deleteSchedule = (data) => {
  return {
    type: "DELETE_SCHEDULE",
    payload: axios.delete(`/schedule/${data}`)
  };
};
