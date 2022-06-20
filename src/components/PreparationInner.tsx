import React from "react";

type PreparationInnerType = {
  time: number;
  photo: string;
};

const PreparationInner: React.FC<PreparationInnerType> = ({ time, photo }) => {
  return (
    <>
      <h2>Get Ready</h2>
      <div className="timer exercise-timer">{time}</div>
      <div>
        <img src={photo} alt="preview image" className="preview-img" />
      </div>
    </>
  );
};

export default PreparationInner;
