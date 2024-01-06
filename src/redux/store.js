import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    name: nameReducer,
  },
});
