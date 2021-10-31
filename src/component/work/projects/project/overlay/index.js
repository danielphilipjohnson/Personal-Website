import React from "react";
import "./overlay.css";

function Overlay() {
  return (
    <div className="overlay p-1">
      <div className="overlay__content">
        <div className="badges">
          <span className="bg-primary text-xs text-white rounded px-2 py-1 mr-1">
            Html
          </span>
          <span className="bg-secondary text-xs text-white rounded px-2 py-1 mr-1">
            Javascript
          </span>
          <span className="bg-primary-dark text-xs text-white rounded px-2 py-1">
            CSS
          </span>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
