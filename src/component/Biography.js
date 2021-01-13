import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Biography() {
  const { site } = useStaticQuery(siteQuery);
  return (
    <div className="bio">
      <div className="bio-content">
        <h3 className="text-secondary">Biography:</h3>
        <h4 className="mission">{site.siteMetadata.biography.statement}</h4>

        <p>{site.siteMetadata.biography.missionStatement}</p>
        <p>{site.siteMetadata.biography.subStatement}</p>
        <p>
          Current Focus:
          {site.siteMetadata.biography.focuses.map((focus) => {
            return (
              <>
                //
                <span className="text-secondary"> {focus} </span>
              </>
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
