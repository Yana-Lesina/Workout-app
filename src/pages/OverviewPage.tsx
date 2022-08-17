import React from "react";

import WorkoutpagePreview from "../components/OverviewPage/WorkoutpagePreview/WorkoutpagePreview";
import WorkoutShortcut from "../components/OverviewPage/WorkoutShortcut/WorkoutShortcut";
import { RootState } from "../redux-store/store";
import { useSelector } from "react-redux";

import { getServerData } from "../firebase/databaseFuncs";

import Profile from "../components/OverviewPage/Profile";
import CardsWrapper from "../components/OverviewPage/CardsWrapper";

import testImage from "src/assets/images/add.svg";

const OverviewPage: React.FC = () => {
  console.log(testImage);
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
    <CardsWrapper>
      <>
        <Profile />
        {items?.map((item) => {
          return <WorkoutpagePreview key={item.name} workout={item} />;
        })}
        <WorkoutShortcut />
      </>
    </CardsWrapper>
  ) : (
    <div>Data is loading...</div>
  );
};

export default OverviewPage;
