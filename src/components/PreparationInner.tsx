import React from "react";
import Timer from "./Timer";

type PreparationInnerType = {
  time: number;
  photo: string;
};

const PreparationInner: React.FC<PreparationInnerType> = ({ time, photo }) => {
  return (
    <>
      <h2 className="get-ready-title">Get Ready</h2>
      <Timer className="get-ready-timer" time={time} />
      <div>
        <img src={photo} alt="preview image" className="preview-img" />
      </div>
    </>
  );
};

export default PreparationInner;
