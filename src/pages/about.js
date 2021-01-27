import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../component/Seo";
import Header from "../component/layout/Header";

import Layout from "../component/layout/Layout";

import banner from "../images/profile.jpg";
const About = ({ location }) => {
  const { site } = useStaticQuery(siteQuery);

  const setToday = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(Date.now());
    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <>
      <Layout location={location.pathname}>
        <SEO />

        <Header
          title={" About "}
          secondary={" Me"}
          subTitle={"Let me tell you a few things..."}
        />

        <div>
          <h3>{setToday()} by Daniel Johnson</h3>

          <p align="center">
            <a
              class="header-badge"
              target="_blank"
              href="https://twitter.com/danielp_johnson"
            >
              <img
                alt="Twitter Follow"
                src="https://img.shields.io/twitter/follow/danielp_johnson?style=social"
              />
            </a>

            <a
              class="header-badge"
              target="_blank"
              href="https://www.linkedin.com/in/daniel-philip-johnson/"
            >
              <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social" />
            </a>
          </p>
        </div>

        <div className="container">
          <img className="img-fluid" src={banner} alt="" srcset="" />
        </div>

        <p align="center">
          <a href="https://codepen.io/danielphilipjohnson/">
            <img
              height="30"
              src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/codepen.png"
            />
          </a>
          &nbsp;&nbsp;
          <a href="https://twitter.com/danielp_johnson">
            <img
              height="30"
              src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/twitter.png"
            />
          </a>
          &nbsp;&nbsp;
          <a href="https://www.instagram.com/danielphilipjohnson/">
            <img
              height="30"
              src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/instagram.jpg"
            />
          </a>
          &nbsp;&nbsp;
          <a href="/">
            <img
              height="30"
              src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/dev.webp"
            />
          </a>
          <a href="https://www.linkedin.com/in/daniel-philip-johnson/">
            <img
              height="30"
              src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/linkedin.png"
            />
          </a>
        </p>

        <section
          id="home"
          className="home"
          style={{
            backgroundImage: `url(${banner})`,
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
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        tagline
      }
    }
  }
`;
