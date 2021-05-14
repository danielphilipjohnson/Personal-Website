import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layout/";

function TechnologiesUsed() {
  const { allFile } = useStaticQuery(siteQuery);

  return (
    <Layout
      sectionLabel={"Technologies I use"}
      icon={"🏆"}
      iconLabel={"trophy"}
      title={"Technologies I use"}
    >
      <div className="profile-card-body-item">
        <div className="icons-technology">
          {allFile.nodes.map((edge) => {
            const image = getImage(edge.childrenImageSharp[0]?.gatsbyImageData);
            return (
              <GatsbyImage
                image={image}
                className="img-fluid icons-technology-img"
                alt={edge.name}
                key={edge.name}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default TechnologiesUsed;
const siteQuery = graphql`
  query {
    allFile(filter: { absolutePath: { regex: "/images/about-logos/" } }) {
      distinct(field: sourceInstanceName)
      nodes {
        id
        name
        childrenImageSharp {
          gatsbyImageData(
            width: 100
            height: 100
            placeholder: DOMINANT_COLOR
            quality: 50
            formats: [AUTO, WEBP, AVIF, PNG]
          )
        }
      }
    }
  }
`;
