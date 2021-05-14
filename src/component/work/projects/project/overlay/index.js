import React from "react";
import BadgeLogos from "../../../../shared/badgeLogos";

import "./overlay.css";

function Overlay({ badges }) {
  const Badges = () => {
    return badges.map((badge) => {
      return (
        <span className="badge-tech" key={badge}>
          <BadgeLogos name={badge} />
          <p>{badge}</p>
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
