const initialState = {
  isLoading: false,
  isError: false,
  msg: "",
  data: [],
  pageInfo: {}
};

const movie = (state = initialState, action) => {
  switch (action.type) {
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

    default: {
      return {
        ...state
      };
    }
  }
};

export default movie;
