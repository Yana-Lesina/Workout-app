import React from "react";

type ArrowButtonType = {
  imgLink: string;
};

const ArrowButton: React.FC<ArrowButtonType> = (imgLink) => {
  return (
    <div className={"arrow-button"}>
      <img src={imgLink.imgLink} alt="arrow-img" className="arrow-img" />
    </div>
  );
};

export default ArrowButton;
