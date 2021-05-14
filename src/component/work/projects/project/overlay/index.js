import React from "react";
import getBadgeLogo from "../../../../../utils/getBadgeLogo";
import "./overlay.css";

function Overlay({ badges }) {
  // refactor into seperate component
  const Badges = () => {
    return badges.map((badge) => {
      return (
        <span className="badge-tech" key={badge}>
          {getBadgeLogo(badge)}
          {badge}
        </span>
      );
    });
  };

  return (
    <div className="overlay">
      <div className="overlay__content">
        <div className="badges">
          <Badges />
        </div>
      </div>
    </div>
  );
}

export default Overlay;
