import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./home-tools.css";

function Tools() {
  const { site } = useStaticQuery(siteQuery);

  return (
    <section id="home-tools">
      <div className="container">
        <h2 className="text-purple skill-heading"> 🧰 Tools</h2>
        <h3>Here are a list of tools, I use daily during my job.</h3>
        {/* <div className="banner">
          <div className="right">
            <span role="img" aria-label="my resume">
              ✨
            </span>
            Here are a list of tools I use daily during my job.
          </div>
        </div> */}
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

export default Tools;

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
