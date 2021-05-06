import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
