import "../styles/App.scss";
import React from "react";

type ErrorType = {
  errorMessage: any;
};

const ErrorPage: React.FC<ErrorType> = ({ errorMessage }) => {
  return (
    <>
      <div className="wrapper">
        <h1>Error: {errorMessage}</h1>
      </div>
    </>
  );
};

export default ErrorPage;
