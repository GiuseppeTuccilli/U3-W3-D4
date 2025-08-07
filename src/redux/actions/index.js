export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const AddToFavoritesAction = (job) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: job,
  };
};

export const deleteFromFavoritesAction = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};

export const loadingFalseAction = () => {
  return {
    type: "LOADING_FALSE",
    payload: false,
  };
};

export const loadingTrueAction = () => {
  return {
    type: "LOADING_TRUE",
    payload: true,
  };
};
