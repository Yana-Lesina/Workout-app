import React from "react";
import "../styles/WorkoutCompleted/WorkoutCompleted.scss";
import SaveButton from "../components/general/ActionButton";

import TickImage from "../components/WorkoutCompleted/TickImage";
import ResultsContainer from "../components/WorkoutCompleted/ResultsContainer";
import Results from "../components/WorkoutCompleted/Results";

const WorkoutCompleted: React.FC = () => {
  return (
    <>
      <TickImage />

      <ResultsContainer>
        <Results />
      </ResultsContainer>

      <SaveButton link="/main-page" innerText="Save & Continue" />
    </>
  );
};

export default WorkoutCompleted;
