import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  ifOverviewPageLoaded: false,
  ifWelcomePageLoaded: false,
  ifWorkoutPageLoaded: false,
};

export const loadersSlice = createSlice({
  name: "loaders",
  initialState,
  reducers: {
    setOverviewPageLoaded: (state, action: PayloadAction<boolean>) => {
      state.ifOverviewPageLoaded = action.payload;
    },
    setWelcomePageLoaded: (state, action: PayloadAction<boolean>) => {
      state.ifWelcomePageLoaded = action.payload;
    },
    setWorkoutPageLoaded: (state, action: PayloadAction<boolean>) => {
      state.ifWorkoutPageLoaded = action.payload;
    },
  },
});

export const {
  setOverviewPageLoaded,
  setWelcomePageLoaded,
  setWorkoutPageLoaded,
} = loadersSlice.actions;
export default loadersSlice.reducer;
