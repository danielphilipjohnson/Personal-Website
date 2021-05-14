import React from "react";

import Seo from "../component/Seo";
import Layout from "../component/layout/Layout";
import Projects from "../component/work";

const WorkPage = ({ location }) => {
  return (
    <Layout location={location.pathname}>
      <Seo />
      <Projects />
    </Layout>
  );
};

export default WorkPage;
