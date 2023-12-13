import React, { useEffect } from "react";
import logo1 from "../../Assets/logoimg.png";
import logo2 from "../../Assets/logoimg2.png";
import logo3 from "../../Assets/logoimg3.jpg";
import logo4 from "../../Assets/logoimg4.png";

import Aos from "aos";
import "aos/dist/aos.css";

import "./Sponsors.css";
const Sponsors = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="flip-up" className="Sponsors">
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
