import React from "react";
import Layout from "../layout/";

function NewLayout() {
  return (
    <section className="bg-badge py-16" aria-label="my future plans">
      <div className="container">
        <h2 className="text-2xl font-bold mb-4 pb-4 border-b border-grey text-center">
          <span role="img" aria-label="green heart">
            💚
          </span>{" "}
          "The FUTURE"
        </h2>

        <p className="pb-12 text-black text-center">
          Ways to support my journey, values and mission Follow Me You can
          encourage me on Twitter, Instagram and LinkedIn. Tell me what you need
          to know about web-development I would love to write about it and help
          by making learning material. I want to create content in the forms of
          blogs, posts and YouTube. Share, share and share again! If you enjoy
          my content, please share it with friends and family. Comment and give
          me valuable feedback! I want my projects to be of high quality. Learn
          React or Vue.js These are areas I specialise in so can answer your
          questions and possibly help collaborate. Contribute Also, come join me
          on some GitHub projects and practice with me! Find an issue with my
          tutorial GitHub source let me know! Make a pull request and show off
          your skills.
        </p>

        <h2 className="text-2xl font-bold mb-4 pb-4 border-b border-grey">
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
        <img
          src="https://img.icons8.com/ios/25/000000/linkedin.png"
          alt="linkedin icon"
          width="25"
          height="25"
          className="mr-2"
        />

        <p className="text-sm">danielphilipjohnson</p>

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
        </div>
      </div>
    </section>
  );
}

export default NewLayout;
