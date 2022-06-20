import React from "react";
import Timer from "./Timer";

type PreparationInnerType = {
  time: number;
  photo: string;
};

const PreparationInner: React.FC<PreparationInnerType> = ({ time, photo }) => {
  return (
    <>
      <h2>Get Ready</h2>
      <Timer className={"exercise-timer"} time={time} />
      <div>
        <img src={photo} alt="preview image" className="preview-img" />
      </div>
    </>
  );
};

export default PreparationInner;
