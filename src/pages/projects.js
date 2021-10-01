import React from "react";

import Seo from "../component/Seo";
import Layout from "../component/layout/Layout";
import Projects from "../component/work";

// need to add better seo
const ProjectPage = ({ location }) => {
  const description =
    "Welcome to my portfolio, on this page you will find projects that I have worked as a FullStack developer. As well as personal projects. Let's see them!";
  const title = "My Portfolio: Daniel Philip Johnson";
  const keywords =
    "Full-Stack Engineer, Full-Stack Engineer, english, UK, Cornwall, London, web development, vue, nuxt, next, reactjs, nodejs, graphql";
  return (
    <Layout location={location.pathname}>
      <Seo description={description} title={title} keywords={keywords} />
      <Projects />
    </Layout>
  );
};

export default ProjectPage;
