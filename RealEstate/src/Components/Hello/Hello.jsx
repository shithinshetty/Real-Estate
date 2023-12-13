import React from "react";
import "./Hello.css";
import { FaMapLocationDot } from "react-icons/fa6";
import Image from "../../Assets/Home_Image.jpg";
const Hello = () => {
  return (
    <div className="Hello">
      <div className="secContainer container flex">
        <div className="textDiv">
          <h1>Discover Affordable Properties in Bangalore</h1>

          <p>
            Find A Home is an innovative mixed-use real estate project located
            in the heart of a bustling urban center. The development aims to
            create a harmonious blend of residential, commercial, and
            recreational spaces to cater to the diverse needs of the community.
          </p>
          <div className="searchBar flex">
            <div className="inputBox flex">
              <FaMapLocationDot className="icon" />
              <input type=" " placeholder="Search By Location" />
            </div>
            <button className="btn">Search</button>
          </div>
          <div className="numbers flex">
            <div className="singleNumber">
              <span>
                9k <blockquote>+</blockquote>
              </span>
              <small>Premium Product</small>
            </div>

            <div className="singleNumber">
              <span>
                2k<blockquote>+</blockquote>
              </span>
              <small>Happy Customers</small>
            </div>
            <div className="singleNumber">
              <span>
                50k<blockquote>+</blockquote>
              </span>
              <small> Award Winning</small>
            </div>
          </div>
        </div>
        <div className="imgDiv">
          <img src={Image} alt="Home Image"></img>
        </div>
      </div>
    </div>
  );
};

export default Hello;
