import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  ifPrepared: false,
  ifPaused: false,
};

export const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    setIfPrepared: (state, action: PayloadAction<boolean>) => {
      state.ifPrepared = action.payload;
    },
    setIfPaused: (state, action: PayloadAction<boolean>) => {
      state.ifPaused = action.payload;
    },
  },
});

export const { setIfPrepared, setIfPaused } = exerciseSlice.actions; //for component where we want to use slice
export default exerciseSlice.reducer; //for store
