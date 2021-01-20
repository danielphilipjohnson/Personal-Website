import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./image-container.css";

import formbg from "../../images/formbg.jpeg";
function ImageContainer() {
  return (
    <div
      className="image-container"
      style={{
        backgroundImage: `url(${formbg})`,
      }}
    >
      <h3 className="title">Programming socials</h3>

      <div className="boxes">
        <div className="dev">
          <a href="https://dev.to/danielphilipjohnson">
            <FontAwesomeIcon icon={["fab", "dev"]} />
          </a>
        </div>

        <div className="hackerrank">
          <a href="https://www.hackerrank.com/daniel_p_johnson">
            <FontAwesomeIcon icon={["fab", "hackerrank"]} />
          </a>
        </div>

        <div className="codepen">
          <a href="https://codepen.io/danielphilipjohnson">
            <FontAwesomeIcon icon={["fab", "codepen"]} />
          </a>
        </div>

        <div className="stack-overflow">
          <a href="https://stackoverflow.com/users/13921677/daniel-philip-johnson">
            <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
          </a>
        </div>

        <div className="free-code-camp">
          <a href="https://www.freecodecamp.org/daniel-philip-johnson">
            <FontAwesomeIcon icon={["fab", "free-code-camp"]} />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/danielphilipjohnson">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;
