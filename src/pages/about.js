import React from "react";
import { Link } from "gatsby";
import Seo from "../component/Seo";

import Layout from "../component/layout/Layout";

import AboutCard from "../component/about/about-card";
import Bio from "../component/about/bio/Biography";
import TechnologiesUsed from "../component/about/technologies-used";
import QuickBio from "../component/about/quick-bio";
import ValuesAndMissions from "../component/about/values-Missions";
import OutsideProgramming from "../component/about/outside-programming";

import Future from "../component/about/future";
import ContactMe from "../component/about/contact";

import "./styles/about.css";

const About = ({ location }) => {
  return (
    <Layout location={location.pathname}>
      <Seo />

      <div className="about top-banner">
        <AboutCard />
        {/* <TechnologiesUsed /> */}

        <Bio />
        <ValuesAndMissions />
        <QuickBio />

        <OutsideProgramming />
        <ContactMe />

        <Future />

        {/* <h2 className="text-2xl font-bold mb-4 pb-4 border-b border-grey">
          Socials
        </h2>
        <div className="flex mb-2">
          <img
            src="https://img.icons8.com/ios/25/000000/twitter.png"
            alt="twitter icon"
            width="25"
            height="25"
            className="mr-2"
          />
          <p className="text-sm">@danielp_johnson</p>
        </div>
        <div className="flex mb-2">
          <img
            src="https://img.icons8.com/ios/25/000000/marker.png"
            alt="marker icon"
            width="25"
            height="25"
            className="mr-2"
          />
          <address className="text-sm">Cornwall, United Kingdom</address>
        </div>
    <ContactMe />
          <img
            src="https://img.icons8.com/ios/25/000000/linkedin.png"
            alt="linkedin icon"
            width="25"
            height="25"
            className="mr-2"
          />

          <p className="text-sm">danielphilipjohnson</p>
        </div>

        <div className="flex mb-2">
          <img
            src="https://img.icons8.com/ios/25/000000/mailbox-closed-flag-up.png"
            alt="mail icon"
            width="25"
            height="25"
            className="mr-2"
          />
          <a href="mailto:daniel-philip-johnson@gmail.com" className="text-sm">
            Send Email
          </a>
        </div>

        <div className="flex mb-2">
          <img
            src="https://img.icons8.com/ios/25/000000/business.png"
            alt="Availability icon"
            width="22"
            height="22"
            className="mr-2"
          />
          <p className="text-sm">Availability: Consultant</p>
        </div> */}
      </div>
    </Layout>
  );
};

export default About;
