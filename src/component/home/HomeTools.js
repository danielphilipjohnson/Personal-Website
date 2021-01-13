import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./home-tools.css";

function HomeTools() {
  const { site } = useStaticQuery(siteQuery);

  return (
    <section id="home-tools">
      <div className="container">
        <h2 className="lg-heading">About Me</h2>
        <p className="lead">
          A React Developer that focuses on performant, responsive and
          accessible designs...
        </p>

        <h2 className="section-title">I build with</h2>
        <div className="bottom-line"></div>

        <div className="specials">
          {site.siteMetadata.specialities.map((skill) => {
            return (
              <div key={skill.heading}>
                <img src={skill.src} alt={skill.heading} />
                <h3>{skill.heading}</h3>
                <p>{skill.description}</p>
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
