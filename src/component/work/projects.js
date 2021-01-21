import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFirefox,
  faCodepen,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import bg from "../../images/overlay-bg.png";

function Projects() {
  const { site } = useStaticQuery(siteQuery);

  return (
    <div class="projects">
      {site.siteMetadata.projects.map((project) => {
        return (
          <div class="item">
            <div class="bar">
              <FontAwesomeIcon icon={faFirefox} />
              <i class="window-buttons"></i>
              <span class="title">{project.title}</span>
            </div>
            <img class="item-img" src={project.imageSrc} alt="ddd page" />
            <div
              class="overlay"
              style={{
                backgroundImage: `url(${bg})`,
              }}
            >
              <div class="content">
                <p>{project.description}</p>
              </div>

              <div class="arrow-btn">
                <div class="arrow-btn-text">
                  <a href={project.projectLink}>View Project</a>
                </div>
                <FontAwesomeIcon icon={faLongArrowAltRight} />
                <i class="fas fa-long-arrow-alt-right"></i>
              </div>

              <div class="links">
                <a href={project.codepenLink}>
                  <FontAwesomeIcon icon={faCodepen} />
                </a>
                <a href={project.githubLink}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        projects {
          title
          imageSrc
          types
          description
          codepenLink
          githubLink
          projectLink
        }
      }
    }
  }
`;