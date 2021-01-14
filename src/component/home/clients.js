import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBook,
  faAward,
  faHourglassStart,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

import "./clients.css";

function Clients() {
  return (
    <section id="home-stats" className="home-stats">
      <h3 className="text-secondary">Activities:</h3>
      <div className="stats">
        <div className="stat-item">
          <ul>
            <li className="stats-icon">
              <FontAwesomeIcon icon={faBook} />
            </li>
            <li className="stats-number">12</li>
            <li className="stats-title">Books read</li>
          </ul>
          <span className="br"></span>
        </div>

        <div className="stat-item">
          <ul>
            <li>
              <FontAwesomeIcon icon={faAward} size="3x" />
            </li>
            <li className="stats-number">35</li>
            <li className="stats-title">Challenges completed</li>
          </ul>
          <span className="br"></span>
        </div>

        <div className="stat-item">
          <ul>
            <li>
              <FontAwesomeIcon icon={faHourglassStart} size="3x" />
            </li>
            <li className="stats-number">500</li>
            <li className="stats-title">Cups of coffee</li>
          </ul>
          <span className="br"></span>
        </div>

        <div className="stat-item">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCodeBranch} size="3x" />
            </li>
            <li className="stats-number">14</li>
            <li className="stats-title">Projects Completed</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Clients;
