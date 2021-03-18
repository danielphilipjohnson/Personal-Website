import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./tools.css";

function Tools() {
  const { site } = useStaticQuery(siteQuery);

  return (
    <section className="tools">
      <h2 className="text-purple skill-heading"> 🧰 Tools</h2>
      <h3>Here are a list of tools, I use daily during my job.</h3>

      <div className="specializes">
        {site.siteMetadata.specialities.map((skill) => {
          const { heading, src, description } = skill;
          return (
            <div className="specialize" key={heading}>
              <img src={src} alt={heading} />
              <div className="specialize__inner">
                <h3>{heading}</h3>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
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
