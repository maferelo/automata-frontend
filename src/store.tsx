import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "src/slices/task";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
