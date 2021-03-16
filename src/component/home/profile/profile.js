import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "./profile.css";

function Profile() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(siteQuery);
  return (
    <div className="container">
      <div className="profile-text">
        <div
          dangerouslySetInnerHTML={{
            __html: siteMetadata.about.aboutInfo.html,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Profile;
const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        tagline
        about {
          aboutInfo {
            html
          }
        }
      }
    }
  }
`;
