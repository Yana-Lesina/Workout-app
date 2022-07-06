import React from "react";

type ArrowButtonType = {
  imgLink: string;
  onClick: any;
  className?: string;
};

const ArrowButton: React.FC<ArrowButtonType> = ({
  imgLink,
  onClick,
  className,
}) => {
  return (
    <div className="arrow-button-wrapper">
      <div className={"arrow-button " + className} onClick={onClick}>
        <img src={imgLink} alt="arrow-img" className="arrow-img" />
      </div>
    </div>
  );
};

export default ArrowButton;
