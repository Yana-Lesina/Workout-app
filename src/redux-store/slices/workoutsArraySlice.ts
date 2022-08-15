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

      // createExerciseLists:
      state.workoutsList.forEach((workout) => {
        workout.exerciseList = [] as ExerciseType[];
        let countedDuration = 0;

        workout.questions.forEach((section) => {
          section.exercises.forEach((exercise) => {
            // push exercise element
            workout.exerciseList?.push(exercise);

            //count workout duration (total, in seconds)
            countedDuration += exercise.duration;
          });

          // convert workout duration into minutes & write it down
          workout.workoutDuration = Math.round(countedDuration / 60);
        });
      });
    },
  },
});

export const { setWorkoutsList } = workoutsArraySlice.actions; //for component where we want to use slice
export default workoutsArraySlice.reducer; //for store
