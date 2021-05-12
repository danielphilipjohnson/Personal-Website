import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import PDF from "../../downloads/Daniel_Philip_Johnson_CV.pdf";

import Seo from "../component/Seo";

import Layout from "../component/layout/Layout";
import Bio from "../component/about/bio/Biography";

import QuickBio from "../component/about/quickBio";
import Future from "../component/about/future";

import OutsideProgramming from "../component/about/outsideProgramming";
import ValuesAndMissions from "../component/about/valuesAndMissions";

import banner from "../images/linkedinBanner.png";

import "./styles/about.css";

// issue with bringing in markdown
// missing bio link
const About = ({ location }) => {
  return (
    <>
      <Layout location={location.pathname}>
        <Seo />

        <div className="about top-banner">
          <div className="about-info">
            <div className="profile-card">
              <div className="profile-card-head">
                <img
                  className="card-head-bg"
                  src={banner}
                  alt="cover of daniel philip johnson"
                  height="400px"
                />
              </div>

              <div className="container">
                <StaticImage
                  className="profile-card-image"
                  src="../images/profile.jpg"
                  alt="Daniel johnson"
                  placeholder="none"
                  layout="fixed"
                  width={99}
                  height={99}
                  formats={["auto", "avif", "webp", "png"]}
                />

                <div className="profile-card-body">
                  <h2 className="profile-name">
                    Daniel <span className="profile-middle-name">Philip</span>{" "}
                    Johnson
                  </h2>

                  <div className="profile-card-body-item">
                    <img
                      src="https://img.icons8.com/ios/250/000000/twitter.png"
                      alt="twitter icon"
                      width="25"
                      height="25"
                    />
                    <p>@danielp_johnson</p>
                  </div>

                  <p className="description">
                    React Developer for CodeCareer. My goal is to help others
                    get their first programming job. Lets talk: #reactjs #js
                    #css
                  </p>

                  <div className="profile-card-body-item">
                    <img
                      src="https://img.icons8.com/ios/250/000000/marker.png"
                      alt="marker icon"
                      width="25"
                      height="25"
                    />

                    <address>Cornwall, United Kingdom</address>
                  </div>
                  <div className="profile-card-body-item">
                    <img
                      src="https://img.icons8.com/ios/250/000000/linkedin.png"
                      alt="linkedin icon"
                      width="25"
                      height="25"
                    />

                    <p>danielphilipjohnson</p>
                  </div>

                  <div className="profile-card-body-item">
                    <img
                      src="https://img.icons8.com/ios/250/000000/mailbox-closed-flag-up.png"
                      alt="mail icon"
                      width="25"
                      height="25"
                    />

                    <p> daniel-philip-johnson@gmail.com</p>
                  </div>

                  <div className="profile-card-body-item">
                    <h3>Availability</h3>
                    <p>Freelance: Available</p>
                  </div>
                  <div className="badge bb">
                    <img
                      src="https://img.icons8.com/ios/250/000000/resume.png"
                      alt="resume icon"
                      width="25"
                      height="25"
                    />
                    <a className="bio-link" href={PDF} download>
                      Version PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Bio />

          <QuickBio />

          <ValuesAndMissions />

          <OutsideProgramming />

          <Future />
        </div>
      </Layout>
    </>
  );
};

export default About;
