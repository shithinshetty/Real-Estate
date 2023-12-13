import React, { useEffect } from "react";
import "./Subscribe.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="flip-up"
      data-aos-easing="ease-out-cubic"
      className="Subscribe container section"
    >
      <div className="secContent">
        <h1>
          Get Started With<span className="orangeText"> Find A Home.</span>
        </h1>

        <p>
          Subscribe and find super attractive quotes from us.Find your dream
          residence{" "}
        </p>
        <button className="btn">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
