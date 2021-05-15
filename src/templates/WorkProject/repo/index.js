import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./repo.css";

function Repo({ title }) {
  return (
    <div className="repo">
      <div className="repo__header">
        <img
          src="https://img.icons8.com/ios/250/000000/journal.png"
          alt=""
          width="25"
          height="25"
          className="repo__header-img"
        />
        <p>{title}</p>
      </div>

      <p className="repo__text">
        {/* make sitemap field */}
        What is freeCodeCamp? We’re a nonprofit community that helps you learn
        to code by building projects. How can you help me learn to code? You'll
        learn to code by completing coding challenges and buil…
      </p>
      <div className="repo__footer">
        <FontAwesomeIcon icon={faGithub} />
        <span>github.com</span>
      </div>
    </div>
  );
}

export default Repo;
