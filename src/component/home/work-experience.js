import React from "react";

import "./work-experience.css";

function WorkExperience() {
  return (
    <div className="container container-narrow">
      <h2 className="text-secondary">Work Experience:</h2>

      <ul className="work-experience">
        <li className="job-current">
          <h5 className="job-title">
            React Developer -{" "}
            <a
              href=" http://jobs.codecareer.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeCareer.io
            </a>
          </h5>
          <div className="job-meta">
            <span>Remote </span>
            <span>November 2020 - Present</span>
          </div>
          <p className="job-description">
            In my current role, I use React.js, Javascript ECMA 11 and CSS, BS4
            for styling. I interact with express.js routes, store data in
            MongoDB and use popular node packages of form-hooks and Axios. My
            main task is to maintain a hiring system website. My jobs include
            adding new features while also improving responsiveness and reduce
            the time taken for the browser to render. I also assist in adding
            features to a job board website for developers
            http://jobs.codecareer.io/. My recent work includes implementing
            front-end CRUD functionality for posting jobs to the job board,
            built a custom hook for API requests, updated SEO and favicons. My
            next goals are to refactor a portion of the codebase, reduce API
            requests with local storage and implement infinite scrolling.
          </p>
        </li>
        <li className="">
          <h5 className="job-title">
            Generic job -{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Generic company name
            </a>
          </h5>
          <div className="job-meta">
            <span>Remote </span>
            <span>May 2033 - September 2035</span>
          </div>
          <p className="job-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quod
            laudantium incidunt odio corporis. Perspiciatis perferendis
            voluptatibus eum animi dolorem neque distinctio sint ipsa!
            Architecto nobis eum consequatur nesciunt et!Ipsam cum, est possimus
            maxime labore quo ut ratione adipisci porro natus qui incidunt nobis
            molestiae? Impedit delectus accusantium doloribus beatae sunt.
            Voluptas, repellat nam! Nostrum, magnam. Sunt, tempora. Facilis.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default WorkExperience;
