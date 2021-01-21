import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFirefox,
  faCodepen,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import BtnGroup from "./btns";

import bg from "../../images/overlay-bg.png";

function Projects() {
  const { site } = useStaticQuery(siteQuery);
  const allProjects = site.siteMetadata.projects;

  const [filteredProjects, setFilteredProjects] = useState([]);

  const getTypeOfProjects = (type) => {
    if (type === "all") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((project) => {
          return project.type === type;
        })
      );
    }
  };
  useEffect(() => {
    setFilteredProjects(allProjects);
  }, [allProjects]);

  return (
    <>
      <BtnGroup getTypeOfProjects={getTypeOfProjects} />

      <div class="projects">
        {filteredProjects.map((project) => {
          return (
            <div class="item" key={project.imageSrc}>
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
    </>
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
          type
          description
          codepenLink
          githubLink
          projectLink
        }
      }
    }
  }
`;
