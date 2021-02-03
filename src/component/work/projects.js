import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirefox } from "@fortawesome/free-brands-svg-icons";

import BtnGroup from "./btns";

import getBadgeLogo from "../../utils/getBadgeLogo";

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
      <div id="responsive" className="container">
        <BtnGroup
          getTypeOfProjects={getTypeOfProjects}
          activeType={activeType}
        />

        <div className="projects">
          {filteredProjects.map((project) => {
            return (
              <Link to={`${"/" + project.path}`} key={project.title}>
                <div className="item" key={project.imageSrc}>
                  <div className="bar">
                    <FontAwesomeIcon icon={faFirefox} />
                    <i className="window-buttons"></i>
                    <span className="title">{project.title}</span>
                  </div>
                  <img
                    className="item-img"
                    src={project.imageSrc}
                    alt="ddd page"
                  />
                  <div
                    className="overlay"
                    style={{
                      backgroundImage: `url(${bg})`,
                    }}
                  >
                    <div className="content">
                      <div className="badges">
                        {project.badges &&
                          project.badges.map((badge) => {
                            return (
                              <span className="badge-tech" key={badge}>
                                {getBadgeLogo(badge)}
                                {/* <img src={JavaScriptLogo} /> */}
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
