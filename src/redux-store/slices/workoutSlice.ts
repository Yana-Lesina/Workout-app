import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ExerciseType, WorkoutPartType } from "../../globalTypes";

type WorkoutSliceType = {
  workoutItem: WorkoutPartType;
  // exercisesArray: ExerciseType[];
  // isWorkoutCompleted: boolean;
  // startCounter: number;
};

const initialState: WorkoutSliceType = {
  workoutItem: {} as WorkoutPartType,
  // exercisesArray: [] as ExerciseType[],
  // isWorkoutCompleted: false,
  // startCounter: 0,
};

export const workoutSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    setWorkout: (state, action: PayloadAction<WorkoutPartType>) => {
      state.workoutItem = action.payload;

      console.log("setWorkout");
    },

    setStartCounter: (state) => {
      state.workoutItem.startCounter =
        state.workoutItem.exerciseList?.findIndex(
          (exercise) => !exercise.finished,
        );
    },

    setCompletedWorkout: (state) => {
      state.workoutItem.isWorkoutCompleted = true;
    },

    setUncompletedWorkout: (state) => {
      state.workoutItem.isWorkoutCompleted = false;
    },

    setExerciseState: (state, action: PayloadAction<number>) => {
      const exerciseList = state.workoutItem.exerciseList;
      if (exerciseList !== undefined) {
        exerciseList[action.payload].finished = true;
        console.log(exerciseList[action.payload].finished);
      }
    },
  },
});

export const {
  setWorkout,
  setStartCounter,
  setCompletedWorkout,
  setUncompletedWorkout,
  setExerciseState,
} = workoutSlice.actions; //for component where we want to use slice
export default workoutSlice.reducer; //for store
