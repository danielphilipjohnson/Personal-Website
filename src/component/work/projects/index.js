import React from "react";
import ProjectCard from "./project";
import "./projects.css";
function Projects({ filteredProjects }) {
  const ProjectCards = () => {
    return filteredProjects.map((project) => {
      return <ProjectCard project={project} key={project.title} />;
    });
  };

  return (
    <div className="projects">
      <ProjectCards />
    </div>
  );
}

export default Projects;
