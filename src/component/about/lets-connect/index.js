import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const LetsConnect = ({ location }) => {
  return (
    <section className="bio border-t border-grey" aria-label={"Lets connect"}>
      <div class="container pt-16 pb-16">
        <div class=" text-center">
          <h1 class="text-2xl font-bold mb-2">
            Want to learn more? Lets connect!
          </h1>
          <p class="text-xl mb-12">
            I’d love to chat about new opportunities or anything design related!
          </p>
          <Link
            to="contact"
            className="bg-purple-500 font-bold text-white rounded tracking-wide
          px-24 py-4 my-12"
          >
            {" "}
            Contact
          </Link>

          <div>
            <ul className="flex justify-center py-16 text-2xl">
              <li className="mx-3 bg-highlight px-4 py-2 rounded-full">
                <a
                  className="text-purple-500"
                  href="https://www.linkedin.com/in/daniel-philip-johnson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="mx-3 bg-highlight px-4 py-2 rounded-full">
                <a
                  className="text-purple-500"
                  href="https://twitter.com/danielp_johnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="mx-3 bg-highlight px-4 py-2 rounded-full">
                <a
                  className="text-purple-500"
                  href="https://www.instagram.com/danielphilipjohnson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="mx-3 bg-highlight px-3 py-2 rounded-full">
                <a
                  className="text-purple-500"
                  href="https://www.youtube.com/c/DanielPhilipJohnson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="youtube"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LetsConnect;
