import React from "react";
import "./right.css";
import { AiFillBulb } from "react-icons/ai";
import right from "../../../images/right.jpg";
import { FiSettings } from "react-icons/fi";

const Right = () => {
  return (
    <div className="cardSection flex">
      <div className="rightCard flex">
        <AiFillBulb className="bulb" />
        <h2>Faster way to create web pages</h2>
        <p>
          That's my skill.I'm not really specifically talented<br></br>
          of anything except for the ability to learn.
        </p>
        <img src={right} alt="logo" />
        <FiSettings className="icona" />
      </div>
    </div>
  );
};

export default Right;
