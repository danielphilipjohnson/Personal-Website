import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./home-tools.css";

function HomeTools() {
  const { site } = useStaticQuery(siteQuery);

  return (
    <section id="home-tools">
      <div className="container">
        <h2 className="section-title">I build with</h2>
        <div className="bottom-line"></div>

        <div className="specials">
          {site.siteMetadata.specialities.map((skill) => {
            const { heading, src, description } = skill;
            return (
              <div key={heading}>
                <img src={src} alt={heading} />
                <h3>{heading}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeTools;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        specialities {
          src
          heading
          description
        }
      }
    }
  }
`;
