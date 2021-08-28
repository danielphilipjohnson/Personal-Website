import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import SocialIcons from "./social-icons";
import Profile from "./profile";
import WorkExperience from "./work-experience";
import Tools from "./tools";
import Repo from "./repo";
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
          placeholder="dominantColor"
          layout="fixed"
          height={590}
          formats={["auto", "avif", "webp", "png"]}
        />
        <div className="relative">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
            Daniel
            <span id="secondary" className="text-secondary">
              {" "}
              Philip
            </span>
            <span> Johnson</span>
          </h1>

          <div id="icons" className="icons home-cta">
            <h2 className="text-center sm-heading">
               Full-Stack Engineer at Hiyield who specialises with Vue | Nuxt | Javascript | Python | Django | Tailwind | Docker | Kubernetes
            </h2>

            <SocialIcons />

            <div className="flex justify-center">
              <Link className="border border-white text-white mr-4 py-2 px-3 bg-primary text-sm font-bold hover:opacity-75" to="/work/">
                View my work
              </Link>
              <Link className="border border-white text-white py-2 px-4 bg-primary-dark text-sm font-bold hover:opacity-75" to="/contact/">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Profile />
      <WorkExperience />
      <Repo />
      <Services />
      <Tools />
      <Education />
    </>
  );
};

export default HomeContainer;
