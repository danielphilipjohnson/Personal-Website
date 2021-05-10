import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import {
  faStackOverflow,
  faCodepen,
  faFreeCodeCamp,
  faGithub,
  faDev,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

import "./image-container.css";

function ImageContainer() {
  return (
    <div className="image-container">
      <StaticImage
        className="contact-bg"
        src="../../../images/formbg.jpeg"
        alt="showcase"
        placeholder="none"
        layout="fixed"
        width={700}
        height={900}
        formats={["auto", "avif", "webp", "png"]}
      />
      <div className="image__inner">
        <h3 className="image__inner-title">Connect With Me</h3>

        <div className="boxes">
          <div className="box dev">
            <a href="https://dev.to/danielphilipjohnson">
              <FontAwesomeIcon icon={faDev} />
            </a>
          </div>

          <div className="box hackerrank">
            <a href="https://www.hackerrank.com/daniel_p_johnson">
              <FontAwesomeIcon icon={faHackerrank} />
            </a>
          </div>

          <div className="box codepen">
            <a href="https://codepen.io/danielphilipjohnson">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </div>

          <div className="box stack-overflow">
            <a href="https://stackoverflow.com/users/13921677/daniel-philip-johnson">
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
          </div>

          <div className="box free-code-camp">
            <a href="https://www.freecodecamp.org/daniel-philip-johnson">
              <FontAwesomeIcon icon={faFreeCodeCamp} />
            </a>
          </div>
          <div className="box github">
            <a href="https://github.com/danielphilipjohnson">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;
