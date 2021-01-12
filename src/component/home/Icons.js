import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faTwitter,
  faLinkedinIn,
  faStackOverflow,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  fab,
  faGithubAlt,
  faTwitter,
  faLinkedinIn,
  faStackOverflow,
  faCodepen
);

function Icons() {
  const { site } = useStaticQuery(siteQuery);
  return (
    <>
      <div id="social-icons" className="social-icons badge-contact-sm">
        {site.siteMetadata.socials.map((social) => {
          return (
            <a
              key={social.FontAwesomeIcon.logo}
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={[
                  `${social.FontAwesomeIcon.type}`,
                  `${social.FontAwesomeIcon.logo}`,
                ]}
                size="2x"
              />
            </a>
          );
        })}
      </div>
      {/* <div className="badge-contact-sm">
        <a
          href="https://codepen.io/danielphilipjohnson/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/codepen.png"
            alt="codepen"
          />
        </a>
        <a
          href="https://dev.to/danielphilipjohnson"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/dev.webp"
            alt="dev blog"
          />
        </a>
        <a
          href="https://www.instagram.com/danielphilipjohnson/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/instagram.jpg"
            alt="instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-philip-johnson/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://twitter.com/danielp_johnson"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/twitter.png"
            alt="twitter"
          />
        </a>
      </div> */}
    </>
  );
}

export default Icons;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        profileImage
        socials {
          link
          FontAwesomeIcon {
            logo
            type
          }
        }
      }
    }
  }
`;
