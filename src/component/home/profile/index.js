import React from "react";
import { Link } from "gatsby";
import PDF from "../../../../downloads/Daniel_Philip_Johnson_Front_End_Engineer.pdf";

import "./profile.css";

function Profile() {
  return (
    <section className="container">
      <h2 className="text-purple skill-heading">
        <span role="img" aria-label="Daniel Johnson">
          🙋‍♂️
        </span>{" "}
        About me
      </h2>
      <div className="badge-container mb-4">
        <div className="badge-content">
          <span className="heading-2">
            Hi{" "}
            <span role="img" aria-label="happy to meet you">
              👋{" "}
            </span>
            I am Daniel✨
          </span>
          <p>
            <span role="img" aria-label="As a front end engineer">
              👨‍💻{" "}
            </span>
            I work remote{" "}
            <span role="img" aria-label="from my house">
              🏠
            </span>{" "}
            in Cornwall
          </p>
        </div>
        <div className="badge">
          <span role="img" aria-label="my resume">
            📝
          </span>
          <a href={PDF} download>
            Resume PDF
          </a>
        </div>
      </div>

      <div className="profile-text">
        <blockquote>
          <p>
            I am a
            <span className="text-highlight">
              <strong>Front-End Engineer</strong>
            </span>
            with more than
            <span className="text-highlight">
              <strong>2+ years experience</strong>
            </span>
            building responsive and accessible web-applications and 6 months
            experience in the startup world working remotely with
            <a href="https://codecareer.teachable.com/">
              <span className="text-highlight">
                <strong>codecareer.io</strong>
              </span>
            </a>
            .
          </p>

          <p>
            I primarly build front end views with the{" "}
            <span className="text-highlight">
              <strong>React</strong>
            </span>{" "}
            framework and use both{" "}
            <span className="text-highlight">
              <strong>Next.js</strong>
            </span>{" "}
            and
            <span className="text-highlight">
              <strong>Gatsby</strong>
            </span>
            . For styling I use
            <span className="text-highlight">
              <strong>TailwindCSS</strong>
            </span>
            , vanilla
            <span className="text-highlight">
              <strong>CSS</strong>
            </span>{" "}
            and on occassion
            <span className="text-highlight">
              <strong>Sass</strong>
            </span>
            for legacy projects. I dabble with some backend issues such as
            MongoDB and mongoose schemas.
          </p>
          <p>
            My responsibilities, include{" "}
            <span className="text-highlight">
              <strong>maintaining</strong>
            </span>{" "}
            a job board hiring system for junior developers. Currently, I am{" "}
            <span className="text-highlight">
              <strong>refactoring</strong>
            </span>{" "}
            the codebase and{" "}
            <span className="text-highlight">
              <strong>optimizing</strong>
            </span>{" "}
            load times.
          </p>
          <p>
            In my spare time, I am writing a TailwindCSS for a publisher as well
            as writing a about using Gatsby.js. I also contribute to open source
            projects. and I am about to start a blog series and data structures.
          </p>
          <div className="badge-container">
            <div className="badge">
              <span role="img" aria-label="go here">
                👉{" "}
              </span>
              If you want to know
              <Link to="about">about me</Link>
            </div>
          </div>
        </blockquote>
      </div>
    </section>
  );
}

export default Profile;
