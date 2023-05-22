import React from "react";
import "./top.css";
import { BiSearchAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { MdNotifications } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import coin from "../../../images/coin.jpg";
import user from "../../../images/user.jpeg";
import client from "../../../images/client.jpg";
import cart from "../../../images/cart.jpg";

const Top = () => {
  return (
    <div>
      <div className="topSection">
        <div className="headerSection flex">
          <div className="title">
            <AiOutlineMenu className="icon" />
            <h2>Dashboard</h2>
          </div>
          <div className="searchBar flex">
            <BiSearchAlt className="icon" />
            <input type="text" placeholder="Type here..." />
          </div>
          <div className="adminDiv flex">
            <CgProfile className="icon1" />
            <span className="icon">Sign in</span>
            <FiSettings className="icon" />
            <MdNotifications className="icon" />
          </div>
        </div>
      </div>
      <div className="listingSection">
        <div className="secContainer flex">
          <div className="singleItem">
            <p>TODAY'S-MONEY</p>
            <h2>$53,000</h2>
            <span class="a">+55%</span>
            <span class="b">since-yesterday</span>
            <img src={coin} alt="coin" />
          </div>

          <div className="singleItem">
            <p>TODAY'S-USERS</p>
            <h2>+2,300</h2>
            <span class="a">+3%</span>
            <span class="b">since-last-week</span>
            <img src={user} alt="coin" />
          </div>

          <div className="singleItem">
            <p>NEW-CLIENTS</p>
            <h2>+3,462</h2>
            <span class="a">-2%</span>
            <span class="b">since-last-quarter</span>
            <img src={client} alt="coin" />
          </div>

          <div className="singleItem">
            <p>MONTHLY-SALES</p>
            <h2>$103,430</h2>
            <span class="a">+5%</span>
            <span class="b">than-last-month</span>
            <img src={cart} alt="coin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
