import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Example from "./projects/allProjects";
import LetsConnect from "../shared/letsConnect";
function WorkContainer() {
  const { site } = useStaticQuery(siteQuery);
  const types = ["responsive", "material", "js"];
  const allProjects = site.siteMetadata.projects;

  return (
    <section id="work">
      <div className="image-banner">
        <StaticImage
          className="card-head-bg"
          src="../../../images/hero/desktop.jpeg"
          alt="Daniel johnson"
          placeholder="none"
          width={2000}
          height={496}
          formats={["auto", "png"]}
        />

        <div className="container project">
          <span
            className="profile-card-image profile-emoji mb-2"
            role="img"
            aria-label="project icon"
          >
            🖥️
          </span>
        </div>
      </div>
      <div className="container mb-8">
        <h1 className="text-purple page-heading lg-heading border-b border-grey">
          Projects
        </h1>
        <div className="mb-8 flex items-center bg-badge p-3 rounded border border-grey">
          <p className="text-sm leading-7">
            ⚡ <span className="font-bold"> Personal projects </span>
            <span className="block">
              On this page you will see a list of my personal projects I have
              built and tools I have used.
            </span>
          </p>
        </div>

        <Example types={types} projects={allProjects} />
      </div>

      <LetsConnect
        header="Have a digital product you want built. Lets connect!"
        paragraph="I’d love to chat about new opportunities or your product idea!"
        url="/connect"
        linkText="Contact"
      />
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
