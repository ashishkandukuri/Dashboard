import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import bottom from "../../images/bottom.png";

import { IoIosAlbums } from "react-icons/io";
import { BsTable } from "react-icons/bs";
import { RiBillLine } from "react-icons/ri";
import { GiVirtualMarker } from "react-icons/gi";
import { ImSphere } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { GoSignIn } from "react-icons/go";
import { MdAssignment } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Logo" />
        <h2>Argon Dashboard</h2>
      </div>

      <div className="menuDiv">
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoIosAlbums className="icon" />
              <span className="smallText">Dashboard</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTable className="icon" />
              <span className="smallText">Tables</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <RiBillLine className="icon" />
              <span className="smallText">Billing</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <GiVirtualMarker className="icon" />
              <span className="smallText">Virtual Reality</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <ImSphere className="icon" />
              <span className="smallText">RTL</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">ACCOUNT PAGES</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <CgProfile className="icon" />
              <span className="smallText">Profile</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <GoSignIn className="icon" />
              <span className="smallText">Sign In</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdAssignment className="icon" />
              <span className="smallText">Sign Up</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <img src={bottom} alt="Logo" />
      </div>
    </div>
  );
};

export default Sidebar;
