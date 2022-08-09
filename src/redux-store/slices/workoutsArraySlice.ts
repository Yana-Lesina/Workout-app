import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ExerciseType, WorkoutPartType } from "../../globalTypes";

// type WorkoutsArraySliceType = {
//   workoutsList: WorkoutPartType[];
// };

const initialState = {
  workoutsList: [] as WorkoutPartType[],
};

export const workoutsArraySlice = createSlice({
  name: "WorkoutsArray",
  initialState,
  reducers: {
    setWorkoutsList: (state, action: PayloadAction<WorkoutPartType[]>) => {
      state.workoutsList = action.payload;

      // createExerciseLists:
      state.workoutsList.forEach((workout) => {
        workout.exerciseList = [] as ExerciseType[];

        workout.questions.forEach((section) => {
          section.exercises.forEach((exercise) => {
            workout.exerciseList?.push(exercise);
          });
        });
      });
    },

    setStartCounter: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const workout = state.workoutsList[id];

      workout.startCounter = workout.exerciseList?.findIndex(
        (exercise) => !exercise.finished,
      );
    },

    setCompletedWorkout: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const workout = state.workoutsList[id];

      workout.isWorkoutCompleted = true;
    },

    setUncompletedWorkout: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const workout = state.workoutsList[id];

      workout.isWorkoutCompleted = false;
    },
  },
});

export const {
  setWorkoutsList,
  setStartCounter,
  setCompletedWorkout,
  setUncompletedWorkout,
} = workoutsArraySlice.actions; //for component where we want to use slice
export default workoutsArraySlice.reducer; //for store
