import React from "react";
import styles from "./OverviewPage.module.scss";
import { WorkoutPartType } from "../../globalTypes";
import WorkoutPage from "../WorkoutPage";
import WorkoutpagePreview from "../../components/OverviewPage/WorkoutpagePreview/WorkoutpagePreview";
import WorkoutShortcut from "../../components/OverviewPage/WorkoutShortcut/WorkoutShortcut";
import { RootState } from "../../redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import { setWorkoutsList } from "../../redux-store/slices/workoutsArraySlice";
import { getServerData } from "../../firebase/databaseFuncs";

import Profile from "../../components/OverviewPage/Profile";

// type OverviewPageType = {
//   items: WorkoutPartType[] | undefined;
// };

const OverviewPage: React.FC = () => {
  const isDataLoaded = useSelector(
    (state: RootState) => state.loaders.ifOverviewPageLoaded,
  );
  const items = useSelector(
    (state: RootState) => state.workoutsArray.workoutsList,
  );

  React.useEffect(() => {
    getServerData();
  }, []);

  return isDataLoaded ? (
    <div className={styles.cardsWrapper}>
      <Profile />
      {items?.map((item) => {
        return (
          <WorkoutpagePreview key={item.name} workout={item} link={item.name} />
        );
      })}
      <WorkoutShortcut />
    </div>
  ) : (
    <div>Data is loading...</div>
  );
};

export default OverviewPage;
