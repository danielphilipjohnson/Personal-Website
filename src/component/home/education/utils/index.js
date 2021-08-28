import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const GetBadgeLogo = (name) => {
  const cleanedName = name.toLowerCase();
  const { allFile } = useStaticQuery(siteQuery);

  const ResponsiveBadge = () => {
    if (cleanedName === "responsive") {
      return <FontAwesomeIcon icon={faMobileAlt} />;
    } else {
      return null;
    }
  };

  const ImageBadges = () => {
    return allFile.nodes.map((edge) => {
      const image = getImage(edge.childrenImageSharp[0].gatsbyImageData);
      if (edge.name === cleanedName) {
        return (
          <GatsbyImage
            image={image}
            className="img-fluid"
            alt={cleanedName}
            key={edge.name}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <ResponsiveBadge />
      <ImageBadges />
    </>
  );
};
export default GetBadgeLogo;

// fetch badges for projects

const siteQuery = graphql`
  query {
    allFile(filter: { absolutePath: { regex: "/images/project-logos/" } }) {
      distinct(field: sourceInstanceName)
      nodes {
        id
        name
        childrenImageSharp {
          gatsbyImageData(
            width: 40
            height: 40
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;
