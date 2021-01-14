import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFileAlt,
  faObjectUngroup,
} from "@fortawesome/free-regular-svg-icons";

import {
  faMobileAlt,
  faCode,
  faCogs,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./services.css";

function services() {
  return (
    <section id="home-services" className="text-center py-2">
      <div className="container">
        <h2 className="section-title">What I do</h2>
        <div className="bottom-line"></div>
        <p className="lead">Things I'm skilled at and passionate about.</p>
        <div className="process">
          <div>
            <FontAwesomeIcon
              icon={faPencilAlt}
              size="4x"
              className="process-icon my-2"
            />
            <h3>Technical Writing</h3>
            <p>
              Writing tutorials about my favorite technologies, APIs with nodejs
              and contributing to open source.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faFileAlt}
              size="4x"
              className="process-icon my-2"
            />
            <h3>Writing Code</h3>
            <p>
              Need help refactoring a codebase, implementing new features in
              react apps with clean code, and performance improvements.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCogs}
              size="4x"
              className="process-icon my-2"
            />
            <h3>API Development</h3>
            <p>
              REST APIs that are tailored to your needs and follow the best
              practices in performance and security.
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faCode}
              size="4x"
              className="process-icon my-2"
            />
            <h3>Web Applications</h3>
            <p>
              Fast, responsive and engaging apps that bring your ideas to life.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faObjectUngroup}
              size="4x"
              className="process-icon my-2"
            />
            <h3>Responsive Design</h3>
            <p>
              Making sure your designs work no matter what device a user views
              it.
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
              Cross-platform apps built with react Native for Android and iOS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default services;
