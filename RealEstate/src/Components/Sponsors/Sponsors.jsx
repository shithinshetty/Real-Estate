import React from "react";
import logo1 from "../../Assets/logoimg.png";
import logo2 from "../../Assets/logoimg2.png";
import logo3 from "../../Assets/logoimg3.jpg";
import logo4 from "../../Assets/logoimg4.png";

import "./Sponsors.css";
const Sponsors = () => {
  return (
    <div className="Sponsors">
      <div className="secContainer flex">
        <span>
          <img src={logo1} alt="Logo Image" />
        </span>
        <span>
          <img src={logo2} alt="Logo Image" />
        </span>
        <span>
          <img src={logo3} alt="Logo Image" />
        </span>
        <span>
          <img src={logo4} alt="Logo Image" />
        </span>
      </div>
    </div>
  );
};

export default Sponsors;
