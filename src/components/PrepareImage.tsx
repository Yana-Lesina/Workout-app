import React from "react";

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
