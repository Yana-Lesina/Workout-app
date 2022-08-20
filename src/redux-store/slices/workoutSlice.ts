import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ExerciseType, WorkoutPartType } from "../../globalTypes";

type WorkoutSliceType = {
  workoutItem: WorkoutPartType;
};

const initialState: WorkoutSliceType = {
  workoutItem: {} as WorkoutPartType,
};

export const workoutSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    setWorkoutData: (state, action: PayloadAction<WorkoutPartType>) => {
      state.workoutItem = action.payload;
      state.workoutItem.exerciseList = [] as ExerciseType[];
      let countedDuration = 0;

      state.workoutItem.questions.forEach((section) => {
        section.exercises.forEach((exercise) => {
          // add exercise element
          state.workoutItem.exerciseList.push(exercise);

          //count workout duration (total, in seconds)
          countedDuration += exercise.duration;
        });
      });

      // convert workout duration into minutes & write it down
      state.workoutItem.workoutDuration = Math.round(countedDuration / 60);
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
  setWorkoutData,
  setStartCounter,
  setCompletedWorkout,
  setUncompletedWorkout,
  setExerciseState,
} = workoutSlice.actions; //for component where we want to use slice
export default workoutSlice.reducer; //for store
