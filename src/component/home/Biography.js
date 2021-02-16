import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "./biography.css";
function Biography() {
  const { site } = useStaticQuery(siteQuery);
  return (
    <div className="bio">
      <div className="container">
        <div className="bio-content">
          <h2 className="md-heading text-secondary">Biography:</h2>
          <div className="bottom-line secondary"></div>
          <h4 className="mission">{site.siteMetadata.biography.statement}</h4>

          <p>{site.siteMetadata.biography.missionStatement}</p>
          <p>{site.siteMetadata.biography.subStatement}</p>
          <p>
            Current Focus:
            {site.siteMetadata.biography.focuses.map((focus, i) => {
              return (
                <span key={focus + i}>
                  <span> {"//"} </span>
                  <span className="text-secondary"> {focus} </span>
                </span>
              );
            })}
          </p>
        </div>
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
