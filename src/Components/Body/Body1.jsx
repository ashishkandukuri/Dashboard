import React from "react";
import "./body.css";
import Top from "./Top/Top";
import Left from "./Left/Left";
import Right from "./Right/Right";

const Body1 = () => {
  return (
    <div className="mainContent">
      <Top />
      <div className="bottom flex">
        <Right />
      </div>
      <div>
        <Left />
      </div>
    </div>
  );
};

export default Body1;
