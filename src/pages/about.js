import React from "react";
import Seo from "../component/Seo";

import Layout from "../component/layout/Layout";

import AboutCard from "../component/about/about-card";
import Bio from "../component/about/bio/Biography";
import QuickBio from "../component/about/quick-bio";
import ValuesAndMissions from "../component/about/values-Missions";
import OutsideProgramming from "../component/about/outside-programming";

import Future from "../component/about/future";
import ContactMe from "../component/about/contact";
import FormalEducation from "../component/about/formal-education";

import "./styles/about.css";

const About = ({ location }) => {
  const description =
    "My name is Daniel Philip Johnson. I'm a FullStack Developer who loves Vue, Nuxt and Tailwind. My current goal is to become a senior Engineer";
  const title = "About me: Daniel Philip Johnson";
  const keywords =
    "Full-Stack Engineer, Full-Stack  Engineer, english, UK, Cornwall, London, web development, vue, nuxt, next, reactjs, nodejs, graphql";
  return (
    <Layout location={location.pathname}>
      <Seo description={description} title={title} keywords={keywords} />
      <div className="about top-banner">
        <AboutCard />
        {/* <TechnologiesUsed /> */}
        <Bio />
        <ValuesAndMissions />
        <QuickBio />

        <OutsideProgramming />
        <Future />
        <FormalEducation />

        <ContactMe />
      </div>
    </Layout>
  );
};

export default About;
