import React from "react";

import SEO from "../component/Seo";
import Layout from "../component/layout/Layout";
import SocialIcons from "../component/home/Icons";
import HomeTools from "../component/home/HomeTools";
import "./defaults.css";
import "./index.css";
import "./main.css";

import bg from "../images/showcase1.jpg";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO />

        <section
          id="home"
          className="home"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <h1 className="lg-heading">
            Daniel
            <span id="secondary" className="text-secondary">
              {" "}
              Philip
            </span>
            <span> Johnson</span>
          </h1>
          <div id="icons" className="icons home-cta">
            <h2 className="sm-heading">
              Front End Engineer at CodeCareer.io who specialises with React |
              Javascript | Tailwind | Bootstrap 4 | SASS
            </h2>

            <SocialIcons />
          </div>
        </section>
        <HomeTools />
      </Layout>
    </>
  );
};

export default IndexPage;
