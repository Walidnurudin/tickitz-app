import axios from "../../utils/axios";

export const getSchedule = (data) => {
  return {
    type: "GET_SCHEDULE",
    payload: axios.get(
      `/schedule?page=${data.page}&limit=${data.limit}&searchLocation=${data.location}&searchMovieId=${data.movieId}&sort=${data.sort}`
    )
  };
};

export const postSchedule = (data) => {
  return {
    type: "POST_SCHEDULE",
    payload: axios.post("/schedule", data)
  };
};

export const updateSchedule = (id, data) => {
  return {
    type: "UPDATE_SCHEDULE",
    payload: axios.patch(`/schedule/${id}`, data)
  };
};

export const deleteSchedule = (data) => {
  return {
    type: "DELETE_SCHEDULE",
    payload: axios.delete(`/schedule/${data}`)
  };
};

// HELPER
export const errorFalse = () => {
  return {
    type: "ERROR_FALSE"
  };
};
