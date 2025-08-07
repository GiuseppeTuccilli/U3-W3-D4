import { ADD_TO_FAVORITES } from "../actions";
import { REMOVE_FROM_FAVORITES } from "../actions";

const initaialState = {
  content: [],
};

const mainReducer = (state = initaialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,

        content: state.content.concat(action.payload),
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,

        content: state.content.filter((j) => {
          return j._id !== action.payload;
        }),
      };

    default:
      return state;
  }
};

export default mainReducer;
