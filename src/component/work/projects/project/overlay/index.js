import React from "react";
import Badges from "../../../../shared/badgeLogos";

import "./overlay.css";

function Overlay({ badges }) {
  return (
    <div className="overlay">
      <div className="overlay__content">
        <div className="badges">
          <Badges badges={badges} />
        </div>
      </div>
    </div>
  );
}

export default Overlay;
