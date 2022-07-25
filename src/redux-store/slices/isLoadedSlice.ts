import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const isDataLoadedSlice = createSlice({
  name: "isDataLoaded",
  initialState,
  reducers: {
    setIsDataLoaded: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setIsDataLoaded } = isDataLoadedSlice.actions; //for component where we want to use slice
export default isDataLoadedSlice.reducer; //for store
