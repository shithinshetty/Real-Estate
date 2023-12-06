import React, { useState } from "react";
import "./Navbar.css";
import { MdMapsHomeWork } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineFill } from "react-icons/pi";
const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  const shownavbar = () => {
    setMenu("showNavbar menu ");
  };
  const removenavbar = () => {
    setMenu("menu");
  };

  return (
    <div className="Navbar">
      <div className="logoDiv">
        <MdMapsHomeWork className="icon" />
        <span> Find A Home</span>
      </div>

      <div className={menu}>
        <ul>
          <li className="navList">Property</li>
          <li className="navList">Services</li>
          <li className="navList">Product</li>
          <li className="navList">About Us</li>
        </ul>
        <AiFillCloseCircle className="icon closeIcon" onClick={removenavbar} />
      </div>
      <button className="contactBtn btn">Contact</button>
      <PiDotsNineFill className="icon menuIcon" onClick={shownavbar} />
    </div>
  );
};

export default Navbar;
