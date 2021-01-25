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
import "./projects.css";

function Projects() {
  const { site } = useStaticQuery(siteQuery);
  const allProjects = site.siteMetadata.projects;
  {
    console.log(allProjects);
  }
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeType, setActiveType] = useState("all");

  const getTypeOfProjects = (type) => {
    setActiveType(type);
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
  const displayBadges = (badges) => {
    badges.forEach((item) => {
      console.log(item);
    });
  };

  useEffect(() => {
    setFilteredProjects(allProjects);
  }, [allProjects]);

  return (
    <>
      <div id="responsive" class="container">
        {/* <h2 class="section-header">Responsive Web Design</h2> */}

        <BtnGroup
          getTypeOfProjects={getTypeOfProjects}
          activeType={activeType}
        />

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
                    {/* <p>{project.description}</p> */}
                    {/* <div class="links">
                      <a href={project.codepenLink}>
                        <FontAwesomeIcon icon={faCodepen} />
                      </a>
                      <a href={project.githubLink}>
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div> */}

                    <div class="arrow-btn">
                      <div class="arrow-btn-text">
                        <a href={project.projectLink}>View Project</a>
                      </div>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                      <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <div className="badges">
                      {project.badges &&
                        project.badges.map((badge) => {
                          return <span className="badge-tech">{badge}</span>;
                        })}
                      {/* <span className="badge- {console.log(project.badges)}tech">React</span>
                      <span className="badge-tech">HTML5</span>
                      <span className="badge-tech">CSS</span> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
          badges
        }
      }
    }
  }
`;
