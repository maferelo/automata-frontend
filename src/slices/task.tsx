import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    value: 0,
    tasks: {},
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    edit: (state, action) => {
      console.log("edit", action);
    },
    updateTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, edit, incrementByAmount, updateTasks } =
  taskSlice.actions;

export const taskReducer = taskSlice.reducer;
