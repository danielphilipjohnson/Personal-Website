import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStackOverflow,
  faCodepen,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Icons() {
  return (
    <>
        <div id="social-icons" className="text-center text-white social-icons badge-contact-sm pb-8">
          <a
            href="https://github.com/danielphilipjohnson"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="p-2 text-white text-xl lg:text-2xl"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://twitter.com/danielp_johnson"
            target="_blank"
            rel="noreferrer"
            aria-label="twitter"
            className="p-2 text-white text-xl  lg:text-2xl"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-philip-johnson/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
            className="p-2 text-white text-xl  lg:text-2xl"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://codepen.io/danielphilipjohnson/"
            target="_blank"
            rel="noreferrer"
            aria-label="Codepen"
            className="p-2 text-white text-xl lg:text-2xl"
          >
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
          <a
            href="https://stackoverflow.com/users/13921677/daniel-philip-johnson"
            target="_blank"
            rel="noreferrer"
            aria-label="StackOverflow"
            className="p-2 text-white text-xl lg:text-2xl"
          >
            <FontAwesomeIcon icon={faStackOverflow} size="2x" />
          </a>
        </div>
    </>
  );
}

export default Icons;
