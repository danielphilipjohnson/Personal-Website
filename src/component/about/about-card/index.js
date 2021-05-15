import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import PDF from "../../../../downloads/Daniel_Philip_Johnson_Front_End_Engineer.pdf";
import banner from "../../../images/linkedinBanner.png";

function AboutCard() {
  return (
    <div className="about-info">
      <div className="profile-card">
        <div className="profile-card-head">
          <StaticImage
            className="card-head-bg"
            src="../../../images/linkedinBanner.png"
            alt="Daniel johnson"
            placeholder="none"
            width={2000}
            height={496}
            formats={["auto", "avif", "webp", "png"]}
          />
          {/* <img
            className="card-head-bg"
            src={banner}
            alt="cover of daniel philip johnson"
            height="400px"
          /> */}
        </div>

        <div className="container">
          <StaticImage
            className="profile-card-image"
            src="../../../images/profile.jpg"
            alt="Daniel johnson"
            placeholder="none"
            layout="fixed"
            width={99}
            height={99}
            formats={["auto", "avif", "webp", "png"]}
          />

          <div className="profile-card-body">
            <h1 className="profile-name">
              Daniel <span className="profile-middle-name">Philip</span> Johnson
            </h1>

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
              React Developer for CodeCareer. My goal is to help others get
              their first programming job. Lets talk: #reactjs #js #css
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
              <p>daniel-philip-johnson@gmail.com</p>
            </div>

            <div className="profile-card-body-item">
              <p>Availability: Available</p>
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
  );
}

export default AboutCard;
