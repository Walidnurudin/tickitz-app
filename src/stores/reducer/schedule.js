const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  msg: "",
  pageInfo: {}
};

const schedule = (state = initialState, action) => {
  switch (action.type) {
    // HELPER
    case "ERROR_FALSE": {
      return {
        ...state,
        isError: false
      };
    }

    // GET
    case "GET_SCHEDULE_PENDING":
      return {
        ...state,
        data: [],
        isLoading: true,
        isError: false,
        msg: "",
        pageInfo: {}
      };
    case "GET_SCHEDULE_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
        pageInfo: action.payload.data.pagination
      };

    case "GET_SCHEDULE_REJECTED":
      return {
        ...state,
        data: [],
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
        pageInfo: {}
      };

    // POST
    case "POST_SCHEDULE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    case "POST_SCHEDULE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };

    case "POST_SCHEDULE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };

    // UPDATE
    case "UPDATE_SCHEDULE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    case "UPDATE_SCHEDULE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };

    case "UPDATE_SCHEDULE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };

    // DELETE
    case "DELETE_SCHEDULE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    case "DELETE_SCHEDULE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };

    case "DELETE_SCHEDULE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };
    default: {
      return state;
    }
  }
};

export default schedule;
