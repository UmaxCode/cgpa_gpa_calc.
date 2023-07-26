import React from "react";

const Button = ({ icon, label, sub }) => {
  return (
    <div
      className=" border border-white rounded d-flex overflow-hidden align-items-center py-2 px-3"
      role="button"
    >
      <div className="text-white" style={{ fontSize: "50px" }}>
        {icon}
      </div>
      <div className="flex-grow-1 ps-3 d-flex flex-column align-items-start justify-content-center">
        <h3 className="fw-bold text-white mb-0">{label}</h3>
        <p className="fs-5 text-white mb-0">{sub}</p>
      </div>
    </div>
  );
};

export default Button;
