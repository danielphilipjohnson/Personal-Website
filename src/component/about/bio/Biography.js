import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "./biography.css";
function Biography() {
  const { site } = useStaticQuery(siteQuery);
  return (
    <div className="bio container">
      <div className="bio-content">
        <h2 className="bio-name-heading-2 text-purple skill-heading">
          Mission Statement:
        </h2>
        <h4 className="bio-mission-heading">
          {site.siteMetadata.biography.statement}
        </h4>

        <p className="bio-content">
          {site.siteMetadata.biography.missionStatement}
        </p>
        <p className="bio-content">
          {site.siteMetadata.biography.subStatement}
        </p>
        <p className="bio-content">
          Current Focus:
          {site.siteMetadata.biography.focuses.map((focus, i) => {
            return (
              <span key={focus + i}>
                <span> {"//"} </span>
                <span className="text-purple-dark "> {focus} </span>
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default Biography;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        biography {
          statement
          missionStatement
          subStatement
          focuses
        }
      }
    }
  }
`;
