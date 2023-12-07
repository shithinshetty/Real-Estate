import React from "react";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";
import img1 from "../../Assets/Popular_img1.jpg";
import img2 from "../../Assets/Popular_img2.jpg";
import img3 from "../../Assets/Popular_img3.jpg";
import img4 from "../../Assets/Popular_img4.jpg";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="Popular container section">
      <div className="secContainer">
        <div className="secHeader">
          <div className="textDiv">
            <span className="orangeText">Best choice</span>
            <h1 className="title">
              Popular Residences
              <span className="orangeDot">.</span>
            </h1>
          </div>

          <div className="icons flex">
            <BiLeftArrowCircle className="icon" />
            <BiRightArrowCircle className="icon" />
          </div>
          {/*HOuse NO1*/}
          <div className="secContent grid">
            <div className="singleProperty">
              <div className="imgDiv">
                <img src={img1} alt="House Image" />
              </div>
              <div className="info">
                <span className="price">
                  <span className="orangeText">₹</span>
                  <span className="digits">2.3 Cr</span>
                </span>
                <h2 className="name">Opulent Oasis Residence</h2>
                <p>
                  Indulge in the epitome of luxurious living at Enchanted Lagoon
                  Residences, surrounded by enchanted waters
                </p>
              </div>
            </div>
          </div>

          {/*HOuse NO2*/}
          <div className="secContent grid">
            <div className="singleProperty">
              <div className="imgDiv">
                <img src={img3} alt="House Image" />
              </div>
              <div className="info">
                <span className="price">
                  <span className="orangeText">₹</span>
                  <span className="digits">4.7 Cr</span>
                </span>
                <h2 className="name">Ivory Crest Estates</h2>
                <p>
                  A wharf where whimsy meets the grace of willows in a serene
                  waterfront setting.
                </p>
              </div>
            </div>
          </div>

          {/*HOuse NO3*/}
          <div className="secContent grid">
            <div className="singleProperty">
              <div className="imgDiv">
                <img src={img2} alt="House Image" />
              </div>
              <div className="info">
                <span className="price">
                  <span className="orangeText">₹</span>
                  <span className="digits">3 Cr</span>
                </span>
                <h2 className="name">Velvet Twilight Mansions</h2>
                <p>
                  Mansions draped in the velvety elegance of a twilight embrace.
                </p>
              </div>
            </div>
          </div>
          {/*HOuse NO4*/}
          <div className="secContent grid">
            <div className="singleProperty">
              <div className="imgDiv">
                <img src={img4} alt="House Image" />
              </div>
              <div className="info">
                <span className="price">
                  <span className="orangeText">₹</span>
                  <span className="digits">7 Cr</span>
                </span>
                <h2 className="name">Radiant Ember Estates</h2>
                <p>
                  Estates that radiate warmth and luxury, like embers of refined
                  living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
