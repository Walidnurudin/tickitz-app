const initialState = {
  data: {},
  msg: ""
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_PENDING":
      return {
        ...state,
        data: "",
        msg: ""
      };
    case "GET_USER_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data[0],
        msg: action.payload.data.msg
      };
    case "GET_USER_REJECTED":
      return {
        ...state,
        data: "",
        msg: action.payload.response.data.msg
      };
    default: {
      return {
        ...state
      };
    }
  }
};

export default user;
