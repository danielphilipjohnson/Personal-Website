import React from "react";
import { Link } from "gatsby";

import "./nav.css";

function Nav() {
  return (
    <nav className="nav" role="navigation" aria-labelledby="nav1">
      <div className="container nav-content">
        <ul className="nav-links">
          <li>🌕</li>
          <li>
            <Link to="/" className="nav-link">
              <span className="link-slash">/</span>
            </Link>
          </li>
        </ul>
        <ul className="nav-links">
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/work" className="nav-link">
              Work
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
