import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import Definitions from "./reducers/Definitions";

const rootReducer = combineReducers({
  definitions: Definitions,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
