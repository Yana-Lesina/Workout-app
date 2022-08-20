import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ExerciseType, WorkoutPartType } from "../../globalTypes";

type sliceType = {
  workoutsList: WorkoutPartType[];
};

const initialState: sliceType = {
  workoutsList: [] as WorkoutPartType[],
};

export const workoutsArraySlice = createSlice({
  name: "WorkoutsArray",
  initialState,
  reducers: {
    setWorkoutsList: (state, action: PayloadAction<WorkoutPartType[]>) => {
      state.workoutsList = action.payload;
    },
  },
});

export const { setWorkoutsList } = workoutsArraySlice.actions; //for component where we want to use slice
export default workoutsArraySlice.reducer; //for store
