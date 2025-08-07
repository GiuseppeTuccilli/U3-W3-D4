const initaialState = {
  pref: {
    content: [],
  },
};

const mainReducer = (state = initaialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        pref: {
          ...state.pref,
          content: state.pref.content.concat(action.payload),
        },
      };

    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        pref: {
          ...state.pref,
          content: state.pref.content.filter((j) => {
            return j._id !== action.payload;
          }),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
