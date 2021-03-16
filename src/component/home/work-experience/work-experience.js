import React from "react";

import "./work-experience.css";

function WorkExperience() {
  return (
    <section className="experience">
      <div className="container container-narrow">
        <h2 className="md-heading text-purple skill-heading">👨‍💻 Experience:</h2>
        <div className="job-meta">
          <span>November 2020 - Present</span>
        </div>
        <ul className="work-experience">
          <li className="job-current">
            <h5 className="job-title">
              React Developer{" "}
              <a
                className="text-purple"
                href=" http://jobs.codecareer.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @CodeCareer.io
              </a>
            </h5>
            <em className="text-highlight">
              Startup that assists junior developers finding jobs via a job
              board.
            </em>

            <ul className="job-description">
              <li>
                I work as part of a
                <span className="text-highlight">
                  frontend development team
                </span>
                implementing features in
                <span className="text-highlight">ReactJS.</span> I also interact
                with a designer by asking for feedback of completed work, and
                informing what parts of the design might need to change to be
                more accessible.
              </li>
              <li>
                We we uses the <span className="text-highlight">agile</span>
                methodology and <span className="text-highlight">jira</span>
                where developers are assigned features.
              </li>

              <li>
                Daily, I use React.js,
                <span className="text-highlight">Javascript</span> ECMA 5-11,
                CSS, <span className="text-highlight">Tailwind CSS</span>
                for styling and occasionally
                <span className="text-highlight">Bootstrap 4</span>. I interact
                with
                <span className="text-highlight">express.js</span> routes, store
                data in <span className="text-highlight">MongoDB</span> and use
                ORM <span className="text-highlight">mongoose.</span> The
                popular node packages we use is
                <span className="text-highlight">form-hooks</span> and
                <span className="text-highlight">Axios.</span>
              </li>

              <li>
                My responsibilities involve
                <span className="text-highlight">
                  maintaining the hiring system
                </span>
                by
                <span className="text-highlight">adding new features</span> and
                <span className="text-highlight">updating job posts</span>.
                Currently, I am
                <span className="text-highlight">refactoring</span> parts of the
                codebase, improving
                <span className="text-highlight">responsiveness</span> by reduce
                calling repaint and the time taken for the browser to render.
              </li>

              <li>
                My recent work includes implementing front-end
                <span className="text-highlight">CRUD</span>
                functionality for posting jobs to the job board, built a custom
                hook for API requests,
                <span className="text-highlight">updated SEO</span> and
                favicons. My next goals are to
                <span className="text-highlight">reduce API requests</span> with
                <span className="text-highlight">local storage </span>and
                implement infinite scrolling.
              </li>
            </ul>
          </li>

          <li className="job-current">
            <h5 className="job-title">
              Cleaner{" "}
              <a
                className="text-purple"
                href="https://www.cityfm.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @City Facilities Management
              </a>
            </h5>
            <div className="job-meta">
              <span>June 2019 — Present</span>
            </div>
            <p className="job-description">
              I interact with customers daily as well as coordinate with ASDA
              workers. I have almost{" "}
              <span className="text-highlight">
                6 years of customer service skills
              </span>{" "}
              with previous jobs at Sainsbury's and Co-op.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WorkExperience;
