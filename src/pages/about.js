import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../component/Seo";
import Header from "../component/layout/Header";

import Layout from "../component/layout/Layout";

import banner from "../images/profile.jpg";

import "./styles/about.css";

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

        <div className="about-stats">
          <h3>{setToday()} by Daniel Johnson</h3>
          <p>
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

        <div className="container about">
          <div className="about-info">
            <img className="img-fluid" src={banner} alt="" srcset="" />

            <p>
              Hi, it's Daniel. I am an English front-end engineer from Truro
              Cornwall who currently works remotely for codecareer.io. I'm
              responsible for maintaining a hiring system and well as
              contributing to a job board. In my spare time, I have a series of
              react side projects and I also contribute to the community with
              React and web resources.
            </p>
            <p>
              My professional life is a summary: I graduated from the University
              of Plymouth with a BSc in psychology in 2014. It was at university
              I discovered my passion for development. I started with
              programming my own project for a neuroscience experiment and then
              onto helping others. During my neuroscience lessons, I loved the
              topic of vision and memory. It was "vision" that took a lot of my
              interest like how colours catch our eyes and how the placement of
              items has importance. Around the same time, I developed an
              interest in web development during my free time.{" "}
            </p>
            <p>
              After, I finished my four years of studies. I started to travel
              around the world. Deciding my next plan and my goals. It suddenly
              hit me during this period while applying for graduate psychology
              positions. I found myself spending more and more time programming
              in my spare time. Developing a strong connection. So I decided to
              start with freecodecamp. I successfully finished in 2017 and then
              progressed onto Udacity in 2018 whilst working a full-time job. I
              gained a lot of experience and confidence in web development and
              setout my targetted path. Improving areas that required attention
              and growing my connections. Recently, I successfully joined
              codecareer.io as a react developer and future content creator.{" "}
            </p>
          </div>

          <div className="used-technologies">get icons</div>

          <div className="quick-bio">
            <h3 className="text-secondary">📔 Quick Biography </h3>
            <p>
              <b>When did I discover programming:</b> Well, when I was a young
              child, my mother, in her spare time would copy code from a manual
              to make games run on the{" "}
              <a href="https://en.wikipedia.org/wiki/Commodore_64">
                Commodore 64 (CBM 64)
              </a>
              but putting them into memory. She kept this console for quite some
              time it was the closest thing we had to a computer. The first game
              I remember helping run was{" "}
              <a href="https://www.retrogamer.net/retro_games80/blue-meanies-from-outer-space/">
                Blue Meanies from Outer Space
              </a>
              . It was so exciting to see it running, however, not so for my
              mom. She claimed all that time for a space invaders clone.
            </p>
          </div>
        </div>
        {/* <p align="center">
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
            <img src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/dev.webp" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-philip-johnson/">
            <img
              height="30"
              src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/linkedin.png"
            />
          </a>
        </p> */}

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
