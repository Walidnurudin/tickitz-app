const initialState = {
  data: {},
  booking: {},
  isLoading: false,
  isError: false,
  msg: "",
  role: ""
};

const user = (state = initialState, action) => {
  switch (action.type) {
    // GET USER
    case "GET_USER_PENDING":
      return {
        ...state,
        data: "",
        isLoading: true,
        isError: false,
        msg: ""
      };
    case "GET_USER_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data[0],
        role: action.payload.data.data[0].role,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    case "GET_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: "",
        msg: action.payload.response.data.msg
      };

    // GET USER BOOKING
    case "GET_USER_BOOKING_PENDING":
      return {
        ...state,
        booking: "",
        isLoading: true,
        isError: false,
        msg: ""
      };

    case "GET_USER_BOOKING_FULFILLED":
      return {
        ...state,
        booking: action.payload.data.data,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };

    case "GET_USER_BOOKING_REJECTED":
      return {
        ...state,
        booking: "",
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };

    // UPDATE USER PROFILE
    case "UPDATE_USER_PROFILE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };

    case "UPDATE_USER_PROFILE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };

    case "UPDATE_USER_PROFILE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };

    // UPDATE USER IMAGE
    case "UPDATE_USER_IMAGE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };

    case "UPDATE_USER_IMAGE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };

    case "UPDATE_USER_IMAGE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };

    // UPDATE USER PASSWORD
    case "UPDATE_USER_PASSWORD_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };

    case "UPDATE_USER_PASSWORD_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };

    case "UPDATE_USER_PASSWORD_REJECTED":
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

export default user;
