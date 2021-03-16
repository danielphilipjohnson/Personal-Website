import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import SocialIcons from "../../component/home/Icons";
import HomeTools from "../../component/home/HomeTools";

import Education from "../../component/home/Education";
import Biography from "../../component/home/Biography";

import Clients from "../../component/home/clients";

import Services from "./services/services";
import Profile from "./profile/profile";

import WorkExperience from "../../component/home/work-experience";

import bg from "../../images/showcase1.jpg";

const HomeContainer = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(siteQuery);

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
          <h2 className="sm-heading">{siteMetadata.tagline}</h2>

          <SocialIcons />

          <div className="btn-group">
            <Link className="btn-outline light" to="/work/">
              View my work
            </Link>
            <Link className="btn-outline light" to="/contact/">
              Contact
            </Link>
          </div>
        </div>
      </section>
      <WorkExperience />
      <Profile />

      <HomeTools />
      <Services />
      <Biography />

      {/* <Clients /> */}
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
        about {
          aboutStats {
            imageSrc
            link
            alt
          }
          aboutInfo {
            image {
              src
              alt
            }
            html
          }
        }
      }
    }
  }
`;
