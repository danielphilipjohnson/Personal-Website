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
          <FontAwesomeIcon icon={["fab", "dev"]} />
        </div>
        <div className="hackerrank">
          <FontAwesomeIcon icon={["fab", "hackerrank"]} />
        </div>
        <div className="codepen">
          <FontAwesomeIcon icon={["fab", "codepen"]} />
        </div>

        <div className="stack-overflow">
          <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
        </div>
        <div className="free-code-camp">
          <FontAwesomeIcon icon={["fab", "free-code-camp"]} />
        </div>
        <div className="github">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;
