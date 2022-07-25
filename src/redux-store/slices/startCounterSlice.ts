import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const startCounterSlice = createSlice({
  name: "startCounter",
  initialState,
  reducers: {
    setStartCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setStartCounter } = startCounterSlice.actions; //for component where we want to use slice
export default startCounterSlice.reducer; //for store
