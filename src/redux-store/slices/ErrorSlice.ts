import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const ErrorSlice = createSlice({
  name: "ErrorMessage",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setError } = ErrorSlice.actions; //for component where we want to use slice
export default ErrorSlice.reducer; //for store
