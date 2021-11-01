const initialState = {
  data: {},
  booking: {},
  msg: ""
};

const user = (state = initialState, action) => {
  switch (action.type) {
    // GET USER
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

    // GET USER BOOKING
    case "GET_USER_BOOKING_PENDING":
      return {
        ...state,
        booking: "",
        msg: ""
      };

    case "GET_USER_BOOKING_FULFILLED":
      return {
        ...state,
        booking: action.payload.data.data,
        msg: action.payload.data.msg
      };

    case "GET_USER_BOOKING_REJECTED":
      return {
        ...state,
        booking: "",
        msg: action.payload.response.data.msg
      };
    default: {
      return state;
    }
  }
};

export default user;
