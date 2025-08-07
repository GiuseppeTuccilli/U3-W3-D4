import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import jobsReducer from "../jobsReducer";
import loadingReducer from "../loadingReducer";

const combinedReducer = combineReducers({
  pref: mainReducer,
  jobs: jobsReducer,
  loading: loadingReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
