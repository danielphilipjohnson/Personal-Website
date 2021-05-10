import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

import html5Logo from "../images/about-logos/png/html5.png";
import cssLogo from "../images/about-logos/png/css.png";
import freecodecampLogo from "../images/about-logos/png/freecodecamp.png";
import frontendLogo from "../images/about-logos/png/front-end.png";
import sassLogo from "../images/about-logos/png/sass.png";
import javascriptLogo from "../images/about-logos/png/javascript.png";

import materializeLogo from "../images/about-logos/png/materialize.png";
import angularLogo from "../images/about-logos/png/angular.png";

const getBadgeLogo = (name) => {
  const cleanedName = name.toLowerCase();
  switch (cleanedName) {
    case "html5":
      return <img src={html5Logo} alt={name} />;

    case "css":
      return <img src={cssLogo} alt={name} />;

    case "responsive":
      return <FontAwesomeIcon icon={faMobileAlt} />;

    case "freecodecamp":
      return <img src={freecodecampLogo} alt={name} />;

    case "sass":
      return <img src={sassLogo} alt={name} />;

    case "materialize":
      return <img src={materializeLogo} alt={name} />;

    case "front-end":
      return <img src={frontendLogo} alt={name} />;

    case "javascript":
      return <img src={javascriptLogo} alt={name} />;

    case "angular":
      return <img src={angularLogo} alt={name} />;

    default:
      break;
  }
};
export default getBadgeLogo;
