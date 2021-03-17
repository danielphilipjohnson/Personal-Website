import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import SocialIcons from "./social-icons";
import Tools from "./tools";

import Education from "./education";

import Services from "./services";
import Profile from "./profile";

import WorkExperience from "./work-experience";

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
        <h1 className="lg-heading text-center">
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

      <Profile />
      <WorkExperience />
      <Tools />
      <Services />
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
