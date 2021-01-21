import React from "react";

import SEO from "../component/Seo";
import Layout from "../component/layout/Layout";
import Header from "../component/layout/Header";
import Projects from "../component/work/projects";

import "./styles/work.css";

const WorkPage = ({ location }) => {
  return (
    <>
      <Layout location={location.pathname}>
        <section id="work" className="work">
          <Header
            title={"My"}
            secondary={"Work"}
            subTitle={"Check out some of my projects..."}
          />

          <div id="responsive" class="container">
            <h2 class="section-header">Responsive Web Design</h2>
            <Projects />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WorkPage;
