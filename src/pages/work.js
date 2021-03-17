import React from "react";

import SEO from "../component/Seo";

import Layout from "../component/layout/Layout";
import Projects from "../component/work";

import "./styles/work.css";

const WorkPage = ({ location }) => {
  return (
    <>
      <Layout location={location.pathname}>
        <SEO />
        <section id="work" className="work">
          <Projects />
        </section>
      </Layout>
    </>
  );
};

export default WorkPage;
