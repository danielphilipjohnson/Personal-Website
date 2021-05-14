import React from "react";
import { useStaticQuery, graphql } from "gatsby";
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
      <div id="social-icons" className="social-icons badge-contact-sm">
        <div id="social-icons" className="social-icons badge-contact-sm">
          <a
            href="https://github.com/danielphilipjohnson"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://twitter.com/danielp_johnson"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-philip-johnson/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://codepen.io/danielphilipjohnson/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
          <a
            href="https://stackoverflow.com/users/13921677/daniel-philip-johnson"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faStackOverflow} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Icons;
