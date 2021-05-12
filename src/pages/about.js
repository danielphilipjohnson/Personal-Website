import React from "react";

import Seo from "../component/Seo";

import Layout from "../component/layout/Layout";

import AboutCard from "../component/about/about-card";
import Bio from "../component/about/bio/Biography";
import TechnologiesUsed from "../component/about/technologies-used";
import QuickBio from "../component/about/quickBio";
import ValuesAndMissions from "../component/about/valuesAndMissions";
import OutsideProgramming from "../component/about/outsideProgramming";

import Future from "../component/about/future";

import "./styles/about.css";

const About = ({ location }) => {
  return (
    <Layout location={location.pathname}>
      <Seo />

      <div className="about top-banner">
        <AboutCard />
        <Bio />
        <TechnologiesUsed />
        <QuickBio />
        <ValuesAndMissions />
        <OutsideProgramming />
        <Future />
      </div>
    </Layout>
  );
};

export default About;
