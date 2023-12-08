import React from "react";
import "./About.css";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const Accordion = ({ title, desc, active, setActive }) => {
  return (
    <div className="singleAccordion">
      <span
        onClick={() => setActive(title)}
        className={
          (active === title ? "activeTitle " : "") +
          " accordionTitle " +
          " flex"
        }
      >
        <span className="flex">
          <CheckCircleIcon className="icon" />
          <span className="titletext">{title}</span>
        </span>

        <span className="dropDownIcon">
          {active === title ? (
            <ArrowDropDownCircleIcon className="icon" />
          ) : (
            <ArrowDropUpIcon className="icon" />
          )}
        </span>
      </span>
      <p className={(active === title ? "show" : "") + " description "}>
        {desc}
      </p>
    </div>
  );
};

export default Accordion;
