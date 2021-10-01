import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";

import TopBar from "./project-bar";
import Overlay from "./overlay";

function ProjectCard({ project }) {
  const { path, title, imageSrc, badges } = project;
  const { allFile } = useStaticQuery(siteQuery);

  const ProjectImage = () => {
    return allFile.nodes.map((edge) => {
      if (edge.name === imageSrc) {
        const image = getImage(edge.childrenImageSharp[0].gatsbyImageData);

        return (
          <GatsbyImage
            image={image}
            className="projects__item-img"
            alt={edge.name}
            key={edge.name}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div
      className="projects__item border-grey border rounded mb-12"
      key={imageSrc}
    >
      <Link to={`${"/" + path}`} key={title}>
        <TopBar title={title} />
        <ProjectImage />
      </Link>
      <Overlay badges={badges} />
    </div>
  );
}

export default ProjectCard;

const siteQuery = graphql`
  query {
    allFile(filter: { absolutePath: { regex: "/images/projects/" } }) {
      distinct(field: sourceInstanceName)
      nodes {
        id
        name
        childrenImageSharp {
          gatsbyImageData(
            width: 1280
            height: 550
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;
