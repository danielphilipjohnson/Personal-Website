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
    <Link to={`${"/" + path}`} key={title}>
      <div className="projects__item" key={imageSrc}>
        <TopBar title={title} />

        <ProjectImage />
        <Overlay badges={badges} />
      </div>
    </Link>
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
            width: 550
            height: 270
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;
