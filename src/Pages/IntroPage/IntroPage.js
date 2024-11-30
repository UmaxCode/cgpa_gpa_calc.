import React from "react";
import "./introPage.css";
import Button from "./Components/Button/Button";

const IntroPage = () => {
  return (
    <div className="IntroP">
      <div className="text-center">
        <i class="bi bi-dice-6 text-white" style={{ fontSize: "100px" }}></i>
        <h3 className="text-white fw-bold fs-1 my-1">C_GPA Calculator!</h3>
        <p className="text-white">
          by <span className="fw-bold fs-5">Umaxcode</span>
        </p>
      </div>
      <div className="mt-3 row g-4">
        <div className="col-12">
          <Button
            label="Calc. CGPA"
            sub="CGPA"
            icon={<i class="bi bi-bar-chart-line-fill"></i>}
          />
        </div>
        <div className="col-12">
          <Button
            label="Calc. GPA"
            sub="GPA"
            icon={<i class="bi bi-bar-chart-steps"></i>}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
