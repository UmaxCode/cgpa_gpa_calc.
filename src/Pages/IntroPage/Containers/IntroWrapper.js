import React from "react";
import "./IntroWrapper.css";
const IntroWrapper = ({ children }) => {
  return (
    <div className="Intro d-flex justify-content-center align-items-center bg-info">
      {children}
    </div>
  );
};

export default IntroWrapper;
