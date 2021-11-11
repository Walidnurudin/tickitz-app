const initialState = {
  isLoading: false,
  isError: false,
  msg: "",
  data: [],
  pageInfo: {},
  dashboard: []
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    // HELPER
    case "ERROR_FALSE": {
      return {
        ...state,
        isError: false
      };
    }

    // DASHBOARD
    case "GET_DASHBOARD_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        dashboard: [],
        msg: ""
      };
    }

    case "GET_DASHBOARD_FULFILLED": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        dashboard: action.payload.data.data,
        msg: action.payload.data.msg
      };
    }

    case "GET_DASHBOARD_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        dashboard: [],
        msg: action.payload.response.data.msg
      };
    }

    // GET
    case "GET_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "GET_MOVIE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination
      };
    }
    case "GET_MOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
        data: [],
        pageInfo: {}
      };
    }

    // POST
    case "POST_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "POST_MOVIE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "POST_MOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };
    }

    // UPDATE
    case "UPDATE_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "UPDATE_MOVIE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "UPDATE_MOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };
    }

    // DELETE
    case "DELETE_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "DELETE_MOVIE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "DELETE_MOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };
    }

    default: {
      return state;
    }
  }
};

export default movie;
