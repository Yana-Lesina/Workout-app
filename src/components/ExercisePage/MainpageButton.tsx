import React from "react";
import "../../styles/ExercisePage/MainpageButton.scss";
import { Link } from "react-router-dom";
import goToHomepage from "../../assets/images/goToHomepage.svg";

const MainpageButton: React.FC = () => {
  return (
    <Link to="/">
      <div className="goToHomepage-button">
        <img src={goToHomepage} alt="goToHomepage" />
      </div>
    </Link>
  );
};

export default MainpageButton;
