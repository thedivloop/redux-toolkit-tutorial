import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  max: 10,
  min: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += +(state.count < state.max);
    },
    decrement: (state) => {
      state.count -= +(state.count > state.min);
    },
    reset: (state) => {
      state.count = state.min;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
