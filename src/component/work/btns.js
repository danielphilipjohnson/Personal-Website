import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Btns({ getTypeOfProjects, activeType }) {
  const { site } = useStaticQuery(siteQuery);
  const allTypes = site.siteMetadata.projectTypes;
  return (
    <div className="btn-group">
      {allTypes.map((btn) => {
        const btnLowered = btn.toLowerCase();

        if (btnLowered === activeType) {
          return (
            <button
              className="btn-outline active"
              onClick={() => {
                getTypeOfProjects(btnLowered);
              }}
              key={btnLowered}
            >
              {btn}
            </button>
          );
        }
        return (
          <button
            className="btn-outline"
            onClick={() => {
              getTypeOfProjects(btnLowered);
            }}
            key={btnLowered}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}

export default Btns;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        projectTypes
      }
    }
  }
`;
