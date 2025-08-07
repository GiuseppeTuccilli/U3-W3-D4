const initaialState = {
  isLoading: false,
};

const loadingReducer = (state = initaialState, action) => {
  switch (action.type) {
    case "LOADING_FALSE":
      return {
        ...state,
        isLoading: action.payload,
      };

    case "LOADING_TRUE":
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default loadingReducer;
