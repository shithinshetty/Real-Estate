import React, { useState } from "react";
import "./About.css";
import Accordion from "./Accordion";
import img from "../../Assets/About_img1.jpg";
const About = () => {
  const [active, setActive] = useState("Proven Track Record");
  return (
    <div className="About section container">
      <div className="secContainer flex">
        <div className="imgDiv">
          <img src={img} alt="Image" />
        </div>
        <div className="textDiv">
          <div className="secHeader flex">
            <div className="secTitle">
              <span className="orangeText">Our Values</span>
              <h1>
                Designing spaces that are accessible to people of all abilities
                and backgrounds, fostering inclusivity within communities
                <span className="orangeDot">.</span>
              </h1>
              <p>
                Prioritizing open and transparent communication with clients,
                stakeholders, and the public throughout the development process.
                Respecting and incorporating cultural considerations into
                designs, particularly in diverse and multicultural communities.
              </p>
            </div>
          </div>
          <div className="accordion grid">
            {/*1st Accordion*/}
            <Accordion
              title="Proven Track Record"
              desc="
              Find A Home boasts a proven track record of excellence, delivering unparalleled quality and innovation in every project. From residential havens to commercial landmarks, our legacy is a testament to unwavering commitment and client satisfaction."
              active={active}
              setActive={setActive}
            />
          </div>
          <div className="accordion grid">
            {/*2nd Accordion*/}
            <Accordion
              title="Industrial Experts"
              desc="Find A Home thrives on the expertise of seasoned industrial professionals, ensuring a strategic and knowledgeable approach to every project."
              active={active}
              setActive={setActive}
            />
          </div>
          <div className="accordion grid">
            {/*#rd Accordion*/}
            <Accordion
              title="Ethical Practices"
              desc="Driven by a steadfast commitment to ethical practices, Find A Home prioritizes transparency, integrity, and environmental responsibility. Our dedication extends beyond excellence in real estate, embodying principles that elevate trust and sustainability in every endeavor."
              active={active}
              setActive={setActive}
            />
          </div>
          <div className="accordion grid">
            {/*#rd Accordion*/}
            <Accordion
              title="Affordable Prices"
              desc="At Find A Home, affordability meets quality. We take pride in offering homes and spaces that are not only impeccably crafted but also accessible, ensuring you receive exceptional value for your investment."
              active={active}
              setActive={setActive}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
