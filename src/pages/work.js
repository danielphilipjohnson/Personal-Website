import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFirefox,
  faCodepen,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import SEO from "../component/Seo";
import Layout from "../component/layout/Layout";
import Projects from "../component/work/projects";

import bg from "../images/overlay-bg.png";

import "./styles/work.css";

function Work({ location }) {
  return (
    <Layout location={location.pathname}>
      <SEO />

      <main id="work" className="work">
        <h1 class="lg-heading">
          My
          <span class="text-secondary">Work</span>
        </h1>
        <h2 class="sm-heading">Check out some of my projects...</h2>

        <div id="responsive" class="container">
          <h2 class="section-header">Responsive Web Design</h2>
          <Projects />
        </div>
      </main>
    </Layout>
  );
}

export default Work;
