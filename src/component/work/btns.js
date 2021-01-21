import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Btns({ getTypeOfProjects }) {
  const { site } = useStaticQuery(siteQuery);
  const allTypes = site.siteMetadata.projectTypes;
  return (
    <div className="btn-group">
      {allTypes.map((btn) => {
        const btnLowered = btn.toLowerCase();
        return (
          <button
            className="btn-outline"
            onClick={() => {
              getTypeOfProjects(btnLowered);
            }}
          >
            {btnLowered}
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
