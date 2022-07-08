import React from "react";
import "../../styles/ExercisePage/PrepareImage.scss";

type PrepareImageType = {
  photo: string;
};

const PrepareImage: React.FC<PrepareImageType> = ({ photo }) => {
  return (
    <>
      <img src={photo} alt="preview-image" className="preview-img" />
    </>
  );
};

export default PrepareImage;
