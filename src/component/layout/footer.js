import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "gatsby";

import heartImage from "../../images/heart.png";
import "./footer.css";

function Footer({ location }) {
  console.log(location);
  const routesPathAndValues = {
    "/": "Home",
    "/about/": "About",
    "/work/": "Work",
    "/contact/": "Contact",
  };

  let allFooterRoutes = [];

  for (let path in routesPathAndValues) {
    if (path !== location) {
      const route = {
        link: path,
        text: routesPathAndValues[path],
      };

      allFooterRoutes.push(route);
    }
  }

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top">
          <div className="sitemap">
            {allFooterRoutes.map((item) => {
              return (
                <p key={item.link}>
                  <Link to={item.link}>{item.text}</Link>
                </p>
              );
            })}
          </div>

          <ul className="social-icons">
            <li className="nav-item twitter">
              <a
                href="https://twitter.com/danielp_johnson"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </li>

            <li className="nav-item facebook">
              <a
                href="https://www.facebook.com/DanielPhilipJohnson"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </li>

            <li className="nav-item github">
              <a
                href="https://github.com/danielphilipjohnson/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>

            <li className="nav-item linkedin">
              <a
                href="https://www.linkedin.com/in/daniel-philip-johnson/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright &copy; <span id="year"> 2020.</span> All Rights Reserved |
            Designed and built with{" "}
          </p>
          <div className="heart-container">
            <div
              className="heart"
              style={{
                backgroundImage: `url(${heartImage})`,
              }}
            ></div>
          </div>
          <p>
            by {"  "}
            <a className="author" href="https://twitter.com/danielp_johnson">
              Daniel Philip Johnson
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
