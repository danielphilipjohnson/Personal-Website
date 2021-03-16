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
    <section id="home-services" className="home-services">
      <div className="container">
        <h2 className="md-heading text-purple skill-heading">
          💼 What I offer
        </h2>
        {/* <div className="bottom-line"></div> */}
        {/* <p className="lead text-center">
          Things I'm skilled at and passionate about.
        </p> */}
        <div className="process">
          <div>
            <FontAwesomeIcon
              icon={faPencilAlt}
              size="4x"
              className="process-icon"
            />
            <h3>Technical Writing</h3>
            <p>
              Writing tutorials about my favourite technologies, APIs with
              Node.js and contributing to open source.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faFileAlt}
              size="4x"
              className="process-icon"
            />
            <h3>Writing Code</h3>
            <p>
              Need help adding to your a codebase or a open source project, I
              can use Javascript, React and Angular. feel free to contact me.
            </p>
          </div>

          <div>
            <img
              className="process-icon"
              src="https://img.icons8.com/ios/250/FFFFFF/book.png"
              alt=""
              srcset=""
            />

            <h3>Writing books and documentation</h3>
            <p>
              Currently writing a book about Tailwind CSS as well as a Book
              about using GatsbyJS. If you need someone to review your book
              contact me.
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faCode} size="4x" className="process-icon" />
            <h3>Web Applications</h3>
            <p>
              Building fast, responsive and engaging apps to bring your ideas to
              life.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faObjectUngroup}
              size="4x"
              className="process-icon"
            />
            <h3>Responsive Design</h3>
            <p>
              Making sure your designs work no matter what device a user views
              it.
            </p>
          </div>
          <div>
            <img
              className="process-icon"
              src="https://img.icons8.com/ios/250/FFFFFF/hammer.png"
              alt=""
              srcset=""
            />

            <h3>Code Refactoring</h3>
            <p>
              Need help refactoring a codebase, implementing new features in
              react apps with clean code, and performance improvements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default services;
