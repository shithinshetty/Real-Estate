import React from "react";
import { MdHomeWork } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io5";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <MdHomeWork className="icon" />
            <span>Find A Home</span>
          </div>

          <p>
            "Elevating real estate experiences through innovation and integrity
            for a future where every home fulfills its unique story."
          </p>
          <div className="socials flex">
            <a href="https://www.facebook.com/">
              <FaSquareFacebook className="icon" />
            </a>
            <a href="https://twitter.com/?lang=en-in">
              <BsTwitterX className="icon" />
            </a>
            <a href="https://www.instagram.com/">
              <GrInstagram className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/shithin-shetty/">
              <IoLogoLinkedin className="icon" />
            </a>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Information</span>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Explore</a>
            </li>
            <li>
              <a href="">Travel</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </div>
          <div className="footerLinks">
            <span className="linkTitle">Helful Links</span>
            <li>
              <a href="">Destination</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Travel & Conditions</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
          </div>

          <div className="footerLinks  ">
            <span className="linkTitle ">Contact</span>
            <li className="phone">
              <a href="">+91 7723941064</a>
            </li>
            <li className="mail">
              <a href="">findahome@gmail.com</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
