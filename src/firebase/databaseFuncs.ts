import { getDatabase, ref, child, get } from "firebase/database";
import { DataType, WorkoutPartType } from "../globalTypes";
import { setOverviewPageLoaded } from "../redux-store/slices/loadersSlice";
import { setWorkoutsList } from "../redux-store/slices/workoutsArraySlice";
import { store } from "../redux-store/store";

export const getServerData = async () => {
  const dbRef = ref(getDatabase());
  let serverData: DataType; //WorkoutPartType[] = [] as WorkoutPartType[];
  get(child(dbRef, `/`))
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        serverData = await snapshot.val();
        let workouts = serverData.data;
        store.dispatch(setWorkoutsList(workouts));
        store.dispatch(setOverviewPageLoaded(true));
        // return serverData;
      } else {
        console.log("No data available!");
        // return [];
      }
    })
    .catch((error) => {
      reportError(error);
    });
};
