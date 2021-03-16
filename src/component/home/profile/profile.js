import React from "react";

import "./profile.css";

function Profile() {
  return (
    <section className="profile">
      <div className="container">
        <h2 className="md-heading text-purple skill-heading">🙋‍♂️ About me</h2>
        <div className="banner">
          <div className="left">
            <span className="heading-2">Hi 👋 I am Daniel✨</span>
            <p>👨‍💻 I work remote 🏠 from Cornwall</p>
          </div>
          <div className="right">
            <span>📝</span>
            <a href="#"> Resume PDF</a>
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
              <span className="emoji">🛠️</span> a job board hiring system for
              junior developers. Currently, I am{" "}
              <span className="text-highlight">
                <strong>refactoring</strong>
              </span>{" "}
              the codebase and{" "}
              <span className="text-highlight">
                <strong>optimizing</strong>
              </span>{" "}
              load times <span className="emoji">⏱️</span>.
            </p>
            <p>
              In my spare time, I am writing a TailwindCSS{" "}
              <span className="emoji">📖</span> for a publisher as well as
              writing a <span className="emoji">📖</span> about using Gatsby.js.
              I also contribute to open source projects{" "}
              <span className="emoji">✨</span>. and I am about to start a blog
              series and data structures.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Profile;
