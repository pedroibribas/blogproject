const Reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_PENDING":
      return {
        user: null,
        isLoading: true,
        isSuccess: false,
        isError: false,
        message: ''
      };

    case "REGISTER_FULFILLED":
      return {
        user: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
        message: ''
      };

    case "REGISTER_REJECTED":
      return {
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: true,
        message: action.payload,
      };

    case "LOGIN_PENDING":
      return {
        user: null,
        isLoading: true,
        isSuccess: false,
        isError: false,
        message: ''
      };

    case "LOGIN_FULFILLED":
      return {
        user: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
        message: ''
      };

    case "LOGIN_REJECTED":
      return {
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: true,
        message: action.payload,
      };

    case "LOGOUT":
      return {
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ''
      }

    case "RESET":
      return {
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ''
      }

    default:
      return state;
  }
};

export default Reducer;