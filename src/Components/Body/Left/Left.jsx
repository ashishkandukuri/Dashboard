import React from "react";
import "./left.css";
import chart from "../../../images/chart.png";

const Left = () => {
  return (
    <div className="leftCardSection flex">
      <div className="leftCard flex">
        <h2>Sales Overview</h2>
        <p className="para">
          <strong>+4% more</strong> in 2022
        </p>
        <img src={chart} alt="logo" />
      </div>
    </div>
  );
};

export default Left;
