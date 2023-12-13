import React, { useEffect } from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoIosMailUnread } from "react-icons/io";
import img from "../../Assets/Contact_img.jpg";

import "./Contact.css";

import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="Contact container section"
    >
      <div className="secContainer flex">
        <div className="imgDiv">
          <img src={img} alt="Contact Image" />
        </div>

        <div className="textDiv">
          <div className="secHeader flex">
            <div className="secTitle">
              <span className="orangeText">Contact Us</span>
              <h1>
                Easy way to contact us<span className="orangeDot">.</span>
              </h1>
              <p>
                Ready to get started? "Contact Us" and drop us a message. Your
                real estate journey begins with a simple click. We're thrilled
                to be part of your real estate experience! Best Regards,
                <h4>Jus Payne, CEO </h4>
              </p>
            </div>
          </div>

          <div className="secContent grid">
            <div className="phone ">
              <div className="info flex">
                <PiPhoneCallFill className="icon" />
                <span>
                  <h4>Phone Call</h4>
                  <p>24/7 Customer Support Service</p>
                </span>
              </div>

              <button className="button">Call Now</button>
            </div>
            <div className="mail ">
              <div className="info flex ">
                <IoIosMailUnread className="icon" />

                <span>
                  <h4>Mail Us </h4>
                  <p> Replies Within 3 Working Days</p>
                </span>
              </div>

              <button className="button">findahome@gmail.com</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
