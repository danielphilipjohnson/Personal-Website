import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import SocialIcons from "../../component/home/Icons";
import HomeTools from "../../component/home/HomeTools";

import Education from "../../component/home/Education";
import Biography from "../../component/home/Biography";
import Clients from "../../component/home/clients";
import Services from "../../component/home/services";

import bg from "../../images/showcase1.jpg";

const HomeContainer = () => {
  const { site } = useStaticQuery(siteQuery);
  return (
    <>
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

      <HomeTools />
      <Biography />
      <Services />
      <Clients />
      <Education />
    </>
  );
};

export default HomeContainer;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        tagline
      }
    }
  }
`;
