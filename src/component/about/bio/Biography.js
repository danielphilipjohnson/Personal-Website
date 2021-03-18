import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "./biography.css";
function Biography() {
  const { site } = useStaticQuery(siteQuery);
  return (
    <div className="bio">
      <div className="container">
        <div className="bio-content">
          <h2 className="text-purple skill-heading">Mission Statement:</h2>
          <h4 className="mission">{site.siteMetadata.biography.statement}</h4>

          <p>{site.siteMetadata.biography.missionStatement}</p>
          <p>{site.siteMetadata.biography.subStatement}</p>
          <p>
            Current Focus:
            {site.siteMetadata.biography.focuses.map((focus, i) => {
              return (
                <span key={focus + i}>
                  <span> {"//"} </span>
                  <span className="text-purple"> {focus} </span>
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
