import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFileAlt,
  faObjectUngroup,
} from "@fortawesome/free-regular-svg-icons";

import { faMobileAlt, faDesktop } from "@fortawesome/free-solid-svg-icons";

function services() {
  return (
    <section id="home-services" className="text-center py-2">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          All of my UI/UX and design projects are based off of a practiced
          formula to get the result that I am looking for
        </p>
        <div className="process">
          <div>
            <FontAwesomeIcon
              icon={faFileAlt}
              size="4x"
              className="process-icon my-2"
            />
            <h3>Bring Your Design to Life</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faDesktop}
              size="4x"
              className="process-icon my-2"
            />
            <h3>Web Applications</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faObjectUngroup}
              size="4x"
              className="process-icon my-2"
            />
            <h3>Project Planning</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faMobileAlt}
              size="4x"
              className="process-icon my-2"
            />
            <h3>Mobile Applications</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default services;
