import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ExerciseType, WorkoutPartType } from "../../globalTypes";

type WorkoutSliceType = {
  workoutItem: WorkoutPartType | [];
  exercisesArray: ExerciseType[];
  isWorkoutCompleted: boolean;
  startCounter: number;
};

const initialState: WorkoutSliceType = {
  workoutItem: [],
  exercisesArray: [] as ExerciseType[],
  isWorkoutCompleted: false,
  startCounter: 0,
};

export const WorkoutSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    setWorkoutItem: (state, action: PayloadAction<WorkoutPartType>) => {
      const payloadData = action.payload;

      state.workoutItem = payloadData;

      payloadData.questions.forEach((section) => {
        section.exercises.forEach((exercise) =>
          state.exercisesArray.push(exercise),
        );
      });
    },

    setStartCounter: (state) => {
      state.startCounter = state.exercisesArray.findIndex(
        (exercise) => !exercise.finished,
      );
    },

    setCompletedWorkoutState: (state) => {
      state.isWorkoutCompleted = true;
    },

    setUncompletedWorkoutState: (state) => {
      state.isWorkoutCompleted = false;
    },
  },
});

export const {
  setWorkoutItem,
  setStartCounter,
  setCompletedWorkoutState,
  setUncompletedWorkoutState,
} = WorkoutSlice.actions; //for component where we want to use slice
export default WorkoutSlice.reducer; //for store
