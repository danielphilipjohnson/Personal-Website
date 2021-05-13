import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirefox } from "@fortawesome/free-brands-svg-icons";
import getBadgeLogo from "../../utils/getBadgeLogo";

function Card({ project }) {
  const { path, title, imageSrc, badges } = project;
  const { allFile } = useStaticQuery(siteQuery);

  const ProjectImage = () => {
    return allFile.nodes.map((edge) => {
      if (edge.name === imageSrc) {
        const image = getImage(edge.childrenImageSharp[0].gatsbyImageData);
        return <GatsbyImage image={image} />;
      }
    });
  };

  const Badges = () => {
    return badges.map((badge) => {
      return (
        <span className="badge-tech" key={badge}>
          {getBadgeLogo(badge)}
          {badge}
        </span>
      );
    });
  };

  return (
    <Link to={`${"/" + path}`} key={title}>
      <div className="item" key={imageSrc}>
        <div className="bar">
          <FontAwesomeIcon icon={faFirefox} />
          <i className="window-buttons"></i>
          <span className="title">{title}</span>
        </div>

        <ProjectImage />

        <div className="overlay">
          <div className="content">
            <div className="badges">
              <Badges />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;

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
