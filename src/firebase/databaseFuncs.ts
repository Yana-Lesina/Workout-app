import { getDatabase, ref, child, get } from "firebase/database";
import { setWorkoutData } from "src/redux-store/slices/workoutSlice";
import { WorkoutPartType } from "../globalTypes";
import {
  setOverviewPageLoaded,
  setWorkoutPageLoaded,
} from "../redux-store/slices/loadersSlice";
import { setWorkoutsList } from "../redux-store/slices/workoutsArraySlice";
import { store } from "../redux-store/store";

export const getWorkoutLists = async () => {
  const dbRef = ref(getDatabase());
  let serverData: WorkoutPartType[] = [] as WorkoutPartType[];
  get(child(dbRef, `/data`))
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        serverData = await snapshot.val();
        store.dispatch(setWorkoutsList(serverData));
        store.dispatch(setOverviewPageLoaded(true));
      } else {
        console.log("No data available!");
      }
    })
    .catch((error) => {
      reportError(error);
    });
};

export const getTheWorkout = async (workoutID: number) => {
  const dbRef = ref(getDatabase());
  let serverData: WorkoutPartType = {} as WorkoutPartType;
  get(child(dbRef, `/data/${workoutID}`))
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        serverData = await snapshot.val();
        store.dispatch(setWorkoutData(serverData));
        store.dispatch(setWorkoutPageLoaded(true));

        console.log("AAAAAAAAAAAAAAAAAAAAa", serverData);
      } else {
        console.log("No data available!");
      }
    })
    .catch((error) => {
      reportError(error);
    });
};
