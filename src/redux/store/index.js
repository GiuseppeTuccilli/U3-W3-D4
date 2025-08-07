import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import jobsReducer from "../jobsReducer";

const combinedReducer = combineReducers({
  pref: mainReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
