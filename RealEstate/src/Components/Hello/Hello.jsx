import React, { useEffect } from "react";
import "./Hello.css";
import { FaMapLocationDot } from "react-icons/fa6";
import Image from "../../Assets/Home_Image.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const Hello = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-down" className="Hello">
      <div className="secContainer container flex">
        <div className="textDiv">
          <h1 data-aos="fade-down">
            Discover Affordable Properties in Bangalore
          </h1>

          <p data-aos="fade-down">
            Find A Home is an innovative mixed-use real estate project located
            in the heart of a bustling urban center. The development aims to
            create a harmonious blend of residential, commercial, and
            recreational spaces to cater to the diverse needs of the community.
          </p>
          <div data-aos="fade-down" className="searchBar flex">
            <div className="inputBox flex">
              <FaMapLocationDot className="icon" />
              <input type=" " placeholder="Search By Location" />
            </div>
            <button className="btn">Search</button>
          </div>
          <div data-aos="fade-down" className="numbers flex">
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
        <div data-aos="fade-down" className="imgDiv">
          <img src={Image} alt="Home Image"></img>
        </div>
      </div>
    </div>
  );
};

export default Hello;
