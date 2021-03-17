import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Btns({ getTypeOfProjects, activeType }) {
  const { site } = useStaticQuery(siteQuery);
  const allTypes = site.siteMetadata.projectTypes;
  return (
    <div className="btn-group-between">
      {allTypes.map((btn) => {
        const btnLowered = btn.toLowerCase();

        if (btnLowered === activeType) {
          return (
            <button
              className="btn-outline btn-projects active"
              key={btnLowered}
              onClick={() => {
                getTypeOfProjects(btnLowered);
              }}
            >
              <span aria-hidden="true" focusable="false">
                ⚡
              </span>
              {btn}
            </button>
          );
        }
        return (
          <button
            className="btn-outline btn-projects"
            onClick={() => {
              getTypeOfProjects(btnLowered);
            }}
            key={btnLowered}
          >
            <span aria-hidden="true" focusable="false">
              ⚡
            </span>
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
