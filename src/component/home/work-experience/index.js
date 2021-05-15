import React from "react";

import "./work-experience.css";

function WorkExperience() {
  return (
    <section className="container container-narrow">
      <h2 className="text-purple skill-heading">
        {" "}
        <span role="img" aria-label="Daniel Johnson's">
          👨‍💻
        </span>{" "}
        Experience:
      </h2>
      <div className="job-meta">
        <span>November 2020 - Present</span>
      </div>
      <ul className="work-experience">
        <li className="job-current">
          <h3 className="job-title">
            React Developer{" "}
            <a
              className="text-purple"
              href=" http://jobs.codecareer.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @CodeCareer.io
            </a>
          </h3>
          <em className="text-highlight">
            Startup that assists junior developers finding jobs via a job board.
          </em>

          <ul className="job-description">
            <li className="job-description__list">
              I work as part of a
              <span className="text-highlight">
                <strong>frontend development team</strong>
              </span>
              implementing features in
              <span className="text-highlight">
                <strong>ReactJS.</strong>
              </span>{" "}
              I also interact with a designer by asking for feedback of
              completed work, and informing what parts of the design might need
              to change to be more accessible.
            </li>
            <li className="job-description__list">
              We uses the{" "}
              <span className="text-highlight">
                <strong>agile</strong>
              </span>
              methodology and{" "}
              <span className="text-highlight">
                <strong>jira</strong>
              </span>
              where developers are assigned features.
            </li>

            <li className="job-description__list">
              Daily, I use React.js,
              <span className="text-highlight">
                <strong>Javascript</strong>
              </span>{" "}
              ECMA 5-11, CSS,{" "}
              <span className="text-highlight">
                <strong>Tailwind CSS</strong>
              </span>
              for styling and occasionally
              <span className="text-highlight">
                <strong>Bootstrap 4</strong>
              </span>
              . I interact with
              <span className="text-highlight">
                <strong>express.js</strong>
              </span>{" "}
              routes, store data in{" "}
              <span className="text-highlight">
                <strong>MongoDB</strong>
              </span>{" "}
              and use ORM{" "}
              <span className="text-highlight">
                <strong>mongoose.</strong>
              </span>{" "}
              The popular node packages we use is
              <span className="text-highlight">
                <strong>form-hooks</strong>
              </span>{" "}
              and
              <span className="text-highlight">
                <strong>Axios.</strong>
              </span>
            </li>

            <li className="job-description__list">
              My responsibilities involve
              <span className="text-highlight">
                <strong>maintaining the hiring system</strong>
              </span>
              by
              <span className="text-highlight">
                <strong>adding new features</strong>
              </span>{" "}
              and
              <span className="text-highlight">
                <strong>updating job posts</strong>
              </span>
              . Currently, I am
              <span className="text-highlight">
                <strong>refactoring</strong>
              </span>{" "}
              parts of the codebase, improving
              <span className="text-highlight">
                <strong>responsiveness</strong>
              </span>{" "}
              by reduce calling repaint and the time taken for the browser to
              render.
            </li>

            <li className="job-description__list">
              My recent work includes implementing front-end
              <span className="text-highlight">
                <strong>CRUD</strong>
              </span>
              functionality for posting jobs to the job board, built a custom
              hook for API requests,
              <span className="text-highlight">
                <strong>updated SEO</strong>
              </span>{" "}
              and favicons. My next goals are to
              <span className="text-highlight">
                <strong>reduce API requests</strong>
              </span>{" "}
              with
              <span className="text-highlight">
                <strong>local storage</strong>{" "}
              </span>
              and implement infinite scrolling.
            </li>
          </ul>
        </li>

        <li className="job-current">
          <h3 className="job-title">
            Cleaner{" "}
            <a
              className="text-purple"
              href="https://www.cityfm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @City Facilities Management
            </a>
          </h3>
          <div className="job-meta">
            <span>June 2019 — Present</span>
          </div>
          <p className="job-description">
            I interact with customers daily as well as coordinate with ASDA
            workers. I have almost{" "}
            <span className="text-highlight">
              <strong>6 years of customer service skills</strong>
            </span>{" "}
            with previous jobs at Sainsbury's and Co-op.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default WorkExperience;
