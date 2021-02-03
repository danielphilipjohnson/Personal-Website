import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirefox } from "@fortawesome/free-brands-svg-icons";

import BtnGroup from "./btns";

import bg from "../../images/overlay-bg.png";
import JavaScriptLogo from "../../images/about-logos/html.svg";
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

  const getBadgeLogo = (name) => {
    if (name == "HTML5") {
    } else if (name == "CSS") {
    } else if (name == "Responsive") {
    } else if (name == "freecodecamp") {
    } else if (name == "SASS") {
    } else if (name == "Materialize") {
    } else if (name == "Front-End") {
    } else if (name == "Javascript") {
    }
  };

  useEffect(() => {
    setFilteredProjects(allProjects);
  }, [allProjects]);

  return (
    <>
      <div id="responsive" class="container">
        <BtnGroup
          getTypeOfProjects={getTypeOfProjects}
          activeType={activeType}
        />

        <div class="projects">
          {filteredProjects.map((project) => {
            return (
              <Link to={`${"/" + project.path}`}>
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
                      <div className="badges">
                        {project.badges &&
                          project.badges.map((badge) => {
                            return (
                              <span className="badge-tech">
                                <img src={JavaScriptLogo} />
                                {badge}
                              </span>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
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
