import React from "react";

import SEO from "../component/Seo";

import Layout from "../component/layout/Layout";
import Projects from "../component/work";

const WorkPage = ({ location }) => {
  return (
    <Layout location={location.pathname}>
      <SEO />

      <Projects />
    </Layout>
  );
};

export default WorkPage;
