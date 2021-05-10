import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import SocialIcons from "./social-icons";
import Profile from "./profile";
import WorkExperience from "./work-experience";
import Tools from "./tools";

import Education from "./education";

import Services from "./services";

const HomeContainer = () => {
  return (
    <>
      <section id="home" className="home">
        <StaticImage
          className="img-bg"
          src="../../images/showcase1.jpg"
          alt="showcase"
          placeholder="none"
          layout="fixed"
          height={590}
          formats={["auto", "avif", "webp", "png"]}
        />
        <div className="relative">
          <h1 className="lg-heading text-center">
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

            <div className="btn-group">
              <Link className="btn-outline light" to="/work/">
                View my work
              </Link>
              <Link className="btn-outline light" to="/contact/">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Profile />
      <WorkExperience />
      <Tools />
      {/* <Services />
      <Education /> */}
    </>
  );
};

export default HomeContainer;
