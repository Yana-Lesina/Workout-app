import { getDatabase, ref, child, get } from "firebase/database";
import { WorkoutPartType } from "../globalTypes";
import { setOverviewPageLoaded } from "../redux-store/slices/loadersSlice";
import { setWorkoutsList } from "../redux-store/slices/workoutsArraySlice";
import { store } from "../redux-store/store";

export const getServerData = async () => {
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
