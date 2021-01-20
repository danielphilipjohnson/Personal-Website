import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "gatsby";
function Footer({ location }) {
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
    <footer class="main-footer">
      <div class="container">
        <div class="footer-top">
          <div class="sitemap">
            {allFooterRoutes.map((item) => {
              return (
                <p>
                  <Link to={item.link}>{item.text}</Link>
                </p>
              );
            })}
          </div>

          <ul class="social-icons">
            <li class="nav-item twitter">
              <a
                href="https://twitter.com/danielp_johnson"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </li>

            <li class="nav-item facebook">
              <a
                href="https://www.facebook.com/DanielPhilipJohnson"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </li>

            <li class="nav-item github">
              <a
                href="https://github.com/danielphilipjohnson/"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>

            <li class="nav-item linkedin">
              <a
                href="https://www.linkedin.com/in/daniel-philip-johnson/"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-bottom">
          <p>
            Copyright &copy; <span id="year"> 2020.</span> All Rights Reserved |
            Designed and built with{" "}
          </p>
          <div class="heart-container">
            <div class="heart"></div>
          </div>
          <p>
            by {"  "}
            <a class="author" href="https://twitter.com/danielp_johnson">
              Daniel Philip Johnson
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
