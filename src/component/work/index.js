import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import BtnGroup from "./btns";

import Projects from "./projects";

function WorkContainer() {
  const { site } = useStaticQuery(siteQuery);

  const allProjects = site.siteMetadata.projects;
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeType, setActiveType] = useState("responsive");

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
    <section id="work" className="container">
      <h1 className="text-purple page-heading lg-heading">Projects</h1>
      <div className="badge badge__text mb-1">
        <span className="badge__text" role="img" aria-label="my resume">
          ⚡
        </span>
        <span>
          On this page you will see a list of my personal projects I have built
          and each will explain what I have learned and what tools I used.
        </span>
      </div>

      <h2 className="text-purple skill-heading">
        <span role="img" aria-label="Daniel Johnson">
          🙋‍♂️
        </span>{" "}
        List of projects
      </h2>
      <BtnGroup getTypeOfProjects={getTypeOfProjects} activeType={activeType} />
      <Projects filteredProjects={filteredProjects} />
    </section>
  );
}

export default WorkContainer;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        projects {
          title
          path
          imageSrc
          type
          codepenLink
          githubLink
          projectLink
          badges
        }
      }
    }
  }
`;
