import React from "react";
import styles from "./OverviewPage.module.scss";
import { WorkoutPartType } from "../../globalTypes";
import WorkoutPage from "../WorkoutPage";
import WorkoutpagePreview from "../../components/OverviewPage/WorkoutpagePreview/WorkoutpagePreview";
import WorkoutShortcut from "../../components/OverviewPage/WorkoutShortcut/WorkoutShortcut";

type OverviewPageType = {
  items: WorkoutPartType[] | undefined;
};

const OverviewPage: React.FC<OverviewPageType> = ({ items }) => {
  return (
    <div className={styles.cardsWrapper}>
      {items?.map((item) => {
        return <WorkoutpagePreview key={item.name} workout={item} />;
      })}

      <WorkoutShortcut />
    </div>
  );
};

export default OverviewPage;
