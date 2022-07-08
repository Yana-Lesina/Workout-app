import React from "react";
import "../../styles/MainPage/Headers.scss";

type HeadersType = {
  daysAmount: number;
  workoutTitle: string;
};

const Headers: React.FC<HeadersType> = ({ daysAmount, workoutTitle }) => {
  return (
    <div className="headers-container">
      <h4>Day {daysAmount}</h4>
      <h2>{workoutTitle}</h2>
      <h6>Easy 15 min no equipment</h6>
    </div>
  );
};

export default Headers;
