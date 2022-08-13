import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const disableButtonSlice = createSlice({
  name: "disableButton",
  initialState,
  reducers: {
    setDisabledButton: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setDisabledButton } = disableButtonSlice.actions;
export default disableButtonSlice.reducer;
