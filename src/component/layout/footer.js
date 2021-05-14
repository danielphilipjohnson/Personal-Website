import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faStackOverflow,
  faDev,
  faHackerrank,
  faCodepen,
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import heartImage from "../../images/heart.png";
import "./footer.css";

function Footer({ location }) {
  // const routesPathAndValues = {
  //   "/": "Home",
  //   "/about/": "About",
  //   "/work/": "Work",
  //   "/contact/": "Contact",
  // };

  // let allFooterRoutes = [];

  // for (let path in routesPathAndValues) {
  //   if (path !== location) {
  //     const route = {
  //       link: path,
  //       text: routesPathAndValues[path],
  //     };

  //     allFooterRoutes.push(route);
  //   }
  // }

  return (
    <>
      <footer className="footer bg-gradient-to-r">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__box">
              <h2 className="footer__inner-title">Internal links</h2>
              <ul className="footer__inner-list">
                <li className="footer__inner-item">
                  <Link to={`/`}>Home</Link>
                </li>
                <li className="footer__inner-item">
                  <Link to={`/about/`}>About</Link>
                </li>
                <li className="footer__inner-item">
                  <Link to={`/contact/`}>Contact</Link>
                </li>
                <li className="footer__inner-item">
                  <Link to={`/work/`}>Work</Link>
                </li>

                <li className="footer__inner-item">
                  <a href="https://www.danielphilipjohnson.com/">Blogs</a>
                </li>
                <li className="footer__inner-item">
                  <Link to={`/archives/`}>Archives</Link>
                </li>
                <li className="footer__inner-item">
                  <Link to={`/sitemap-pages.xml`}>Sitemap</Link>
                </li>
              </ul>
              <p className="mt-4">
                ©2020-2021 Developed by Daniel Philip Johnson
              </p>
            </div>
            <div className="footer__box">
              <h2 className="footer__inner-title">Social links</h2>
              <ul className="flex footer__inner-list">
                <li className="footer__social-item">
                  <a
                    className="footer__inner-list"
                    href="https://www.linkedin.com/in/daniel-philip-johnson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li className="footer__social-item">
                  <a
                    className="footer__inner-list"
                    href="https://twitter.com/danielp_johnson"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="twitter"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="footer__social-item">
                  <a
                    className="footer__inner-list"
                    href="https://www.instagram.com/danielphilipjohnson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="footer__social-item">
                  <a
                    href="https://www.youtube.com/c/DanielPhilipJohnson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="youtube"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li className="footer__social-item">
                  <a
                    href="https://github.com/danielphilipjohnson"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="source code"
                  >
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col footer__box">
              <nav>
                <h2 className="footer__inner-title">Developer links</h2>
                <ul className="flex footer__inner-list">
                  <li className="footer__social-item">
                    <a
                      href="https://dev.to/danielphilipjohnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="dev"
                    >
                      <FontAwesomeIcon icon={faDev} />
                    </a>
                  </li>
                  <li className="footer__social-item">
                    <a
                      href="https://www.hackerrank.com/daniel_p_johnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="hackerrank"
                    >
                      <FontAwesomeIcon icon={faHackerrank} />
                    </a>
                  </li>
                  <li className="footer__social-item">
                    <a
                      href="https://codepen.io/danielphilipjohnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="codepen"
                    >
                      <FontAwesomeIcon icon={faCodepen} />
                    </a>
                  </li>
                  <li className="footer__social-item">
                    <a
                      href="https://stackoverflow.com/users/13921677/daniel-philip-johnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="stackoverflow"
                    >
                      <FontAwesomeIcon icon={faStackOverflow} />
                    </a>
                  </li>
                  <li className="footer__social-item">
                    <a
                      href="https://www.freecodecamp.org/daniel-philip-johnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="freecodecamp"
                    >
                      <FontAwesomeIcon icon={faFreeCodeCamp} />
                    </a>
                  </li>
                  <li className="footer__social-item">
                    <a
                      href="https://github.com/danielphilipjohnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="github"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </nav>
              <p>
                Made with
                <a
                  className="mx-1 footer__inner-list"
                  href="https://www.gatsbyjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#94c85a" }}
                >
                  #Gatsby.js
                </a>
                and
                <a
                  className="mx-1 footer__inner-list"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#94c85a" }}
                >
                  #TailwindCSS
                </a>
              </p>
              <p className="author">
                by {"  "}
                <a
                  className="author"
                  href="https://twitter.com/danielp_johnson"
                >
                  Daniel Philip Johnson
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
