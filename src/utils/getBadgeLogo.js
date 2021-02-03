import React from "react";

import HtmlLogo from "../images/about-logos/html.svg";
import CSSLogo from "../images/about-logos/css.svg";
// find something for responsive

// free codecamp maybe use font awesome
import FccLogo from "../images/about-logos/fcc.svg";
//
import FrontEndLogo from "../images/about-logos/front-end.png";
import SassLogo from "../images/about-logos/sass.svg";
import JavaScriptLogo from "../images/about-logos/javascript.svg";

import MaterializeLogo from "../images/about-logos/materialize.png";
import AngularLogo from "../images/about-logos/angular.svg";

const getBadgeLogo = (name) => {
  const cleanedName = name.toLowerCase();
  if (cleanedName === "html5") {
    return <img src={HtmlLogo} alt={name}/>;
  } else if (cleanedName === "css") {
    return <img src={CSSLogo} alt={name}/>;
  } else if (cleanedName === "responsive") {
    return <img src={JavaScriptLogo} alt={name}/>;
  } else if (cleanedName === "freecodecamp") {
    return <img src={FccLogo} alt={name}/>;
  } else if (cleanedName === "sass") {
    return <img src={SassLogo} alt={name}/>;
  } else if (cleanedName === "materialize") {
    return <img src={MaterializeLogo} alt={name}/>;
  } else if (cleanedName === "front-end") {
    return <img src={FrontEndLogo} alt={name}/>;
  } else if (cleanedName === "javascript") {
    return <img src={JavaScriptLogo} alt={name}/>;
  } else if (cleanedName === "angular") {
    return <img src={AngularLogo} alt={name}/>;
  }
};
export default getBadgeLogo;
