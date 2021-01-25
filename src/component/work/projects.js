import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirefox } from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import BtnGroup from "./btns";

import bg from "../../images/overlay-bg.png";
import "./projects.css";

function Projects() {
  const { site } = useStaticQuery(siteQuery);
  const allProjects = site.siteMetadata.projects;
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
                    <div class="arrow-btn">
                      <div class="arrow-btn-text">
                        <Link to={`${"/" + project.path}`}>View Project</Link>
                      </div>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </div>
                    <div className="badges">
                      {project.badges &&
                        project.badges.map((badge) => {
                          return <span className="badge-tech">{badge}</span>;
                        })}
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
          path
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
