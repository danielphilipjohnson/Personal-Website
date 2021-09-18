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
  return (
    <>
      <footer className="bg-gradient-to-r from-blue-700 to-purple-800 text-white w-full">
        <div className="px-8">
          <div className="flex md:flex-row justify-between py-10 md:pt-16">
            <div className="md:w-1/3 order-last md:order-first">
              <h2 className="mr-8 uppercase font-bold border-b-2 mb-4">
                Internal links
              </h2>
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
                  <a href="https://www.danielphilipjohnson.blog/">Blogs</a>
                </li>
                {/* <li className="footer__inner-item">
                  <Link to={`/archives/`}>Archives</Link>
                </li> */}
                <li className="footer__inner-item">
                  <Link to={`/sitemap-pages.xml`}>Sitemap</Link>
                </li>
              </ul>

              <p className="mt-4">
                ©2020-2021 Developed by Daniel Philip Johnson
              </p>
            </div>
            <div className="md:w-1/3">
              <h2 className="uppercase font-bold border-b-2 mb-4 mr-8">
                External Links
              </h2>
              <ul>
                <li className="my-2">
                  <Link to={`/blogs/`} className="text-white">
                    Blogs
                  </Link>
                </li>
                <li className="my-2">
                  <Link to={`/categories/`} className="text-white">
                    Blog Categories
                  </Link>
                </li>
                <li className="my-2">
                  <a
                    href="https://www.danielphilipjohnson.com/work/"
                    className="text-white"
                  >
                    Projects
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="https://www.danielphilipjohnson.com/contact/"
                    className="text-white"
                  >
                    Contact Me
                  </a>
                </li>
                <li className="my-2" className="text-white">
                  <Link to={`/about/`} className="text-white">
                    About Me
                  </Link>
                </li>
                <li className="my-2">
                  <Link to={`/archives/`} className="text-white">
                    Archives
                  </Link>
                </li>
                <li className="my-2">
                  <Link to={`/sitemap-pages.xml`} className="text-white">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:w-1/3 justify-between mb-8">
              <h2 className="uppercase font-bold border-b-2">
                Developer links
              </h2>
              <nav className="mb-4">
                <ul className="flex">
                  <li className="mb-2 mr-4 text-3xl">
                    <a
                      className="text-white"
                      href="https://dev.to/danielphilipjohnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="dev"
                    >
                      <FontAwesomeIcon icon={faDev} />
                    </a>
                  </li>
                  <li className="mb-2 mr-4 text-3xl">
                    <a
                      className="text-white"
                      href="https://www.hackerrank.com/daniel_p_johnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="hackerrank"
                    >
                      <FontAwesomeIcon icon={faHackerrank} />
                    </a>
                  </li>
                  <li className="mb-2 mr-4 text-3xl">
                    <a
                      className="text-white"
                      href="https://codepen.io/danielphilipjohnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="codepen"
                    >
                      <FontAwesomeIcon icon={faCodepen} />
                    </a>
                  </li>
                  <li className="mb-2 mr-4 text-3xl">
                    <a
                      className="text-white"
                      href="https://stackoverflow.com/users/13921677/daniel-philip-johnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="stackoverflow"
                    >
                      <FontAwesomeIcon icon={faStackOverflow} />
                    </a>
                  </li>
                  <li className="mb-2 mr-4 text-3xl">
                    <a
                      className="text-white"
                      href="https://www.freecodecamp.org/daniel-philip-johnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="freecodecamp"
                    >
                      <FontAwesomeIcon icon={faFreeCodeCamp} />
                    </a>
                  </li>
                  <li className="mb-2 mr-4 text-3xl">
                    <a
                      className="text-white"
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
              <nav className="mb-4">
                <h2 className="uppercase font-bold border-b-2 mb-2">
                  Social links
                </h2>
                <ul className="flex mb-8">
                  <li className="mr-4 text-3xl">
                    <a
                      className="text-white"
                      href="https://www.linkedin.com/in/daniel-philip-johnson/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="linkedin"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li className="mr-4 text-3xl">
                    <a
                      className="text-white"
                      href="https://twitter.com/danielp_johnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="twitter"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="mr-4 text-3xl">
                    <a
                      className="text-white"
                      href="https://www.instagram.com/danielphilipjohnson/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="instagram"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li className="mr-4 text-3xl">
                    <a
                      className="text-white"
                      href="https://www.youtube.com/c/DanielPhilipJohnson/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="youtube"
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                  <li className="mr-4 text-3xl">
                    <a
                      className="text-white"
                      href="https://github.com/danielphilipjohnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="source code"
                    >
                      <FontAwesomeIcon icon={faCode} />
                    </a>
                  </li>
                </ul>
              </nav>
              <p>
                Made with
                <a
                  className="mx-1"
                  href="https://www.gatsbyjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#94c85a" }}
                >
                  #Gatsby.js
                </a>
                and
                <a
                  className="mx-1"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#94c85a" }}
                >
                  #TailwindCSS
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
