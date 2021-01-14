import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../component/Seo";
import Layout from "../component/layout/Layout";
import SocialIcons from "../component/home/Icons";
import HomeTools from "../component/home/HomeTools";
import Education from "../component/Education";
import Biography from "../component/Biography";
import Clients from "../component/home/clients";
import Services from "../component/home/services";
import "./defaults.css";
import "./index.css";
import "./main.css";

import bg from "../images/showcase1.jpg";

const IndexPage = () => {
  const { site } = useStaticQuery(siteQuery);
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
            <h2 className="sm-heading">{site.siteMetadata.tagline}</h2>

            <SocialIcons />
          </div>
        </section>

        <Services />
        <HomeTools />

        <Biography />
        <Education />
        <Clients />
      </Layout>
    </>
  );
};

export default IndexPage;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        tagline
      }
    }
  }
`;
