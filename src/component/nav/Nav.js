import React from "react";
import { Link } from "gatsby";

import "./nav.css";

function Nav({ location }) {
  const routesPathAndValues = {
    "/about/": "About",
    "/work/": "Work",
    "/contact/": "Contact",
  };

  const DisplayHome = () => {
    if (location === "/") {
      return null;
    } else {
      return (
        <li>
          <Link to="/" className="nav-link">
            <span className="link-slash">/</span>
          </Link>
        </li>
      );
    }
  };

  let allNavRoutes = [];

  for (let path in routesPathAndValues) {
    if (path !== location) {
      const route = {
        link: path,
        text: routesPathAndValues[path],
      };

      allNavRoutes.push(route);
    }
  }

  return (
    <nav className="nav">
      <div className="container nav-content">
        <ul className="nav-links">
          <li>
            <span role="img" aria-label="dark mode">
              🌕
            </span>
          </li>
          <DisplayHome />
        </ul>
        <ul className="nav-links">
          {allNavRoutes.map((route) => {
            return (
              <li key={route.link}>
                <Link to={route.link} className="nav-link">
                  {route.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
