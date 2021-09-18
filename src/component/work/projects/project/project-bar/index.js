import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirefox } from "@fortawesome/free-brands-svg-icons";
import "./bar.css";

function TopBar({ title }) {
  return (
    <div className="top__bar">
      <FontAwesomeIcon icon={faFirefox} />
      <i className="window-buttons"></i>
      <span className="top__bar-title">{title}</span>
    </div>
  );
}

export default TopBar;
