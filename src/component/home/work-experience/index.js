import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
function WorkExperience() {
  const [showMoreCodeCareer, setshowMoreCodeCareer] = useState(false);
  const [showMoreHiyield, setshowMoreHiyield] = useState(false);

  function MoreHiYield() {
    return (
      <>
        <li className="mb-3">
          My daily responsibilities are creating
          <span className="phrase-highlight">
            <strong>Restful API’s</strong>
          </span>
          with the
          <span className="phrase-highlight">
            <strong>Django REST framework</strong>
          </span>
          and storing data into a
          <span className="phrase-highlight">
            <strong>PostgreSQL database</strong>
          </span>
          . Building
          <span className="phrase-highlight">
            <strong>front end web applications</strong>
          </span>
          with vue.js and nuxt and assisting with the production of digital
          agencies websites with{" "}
          <span className="phrase-highlight">
            <strong>PHP</strong>
          </span>{" "}
          and{" "}
          <span className="phrase-highlight">
            <strong>WordPress</strong>
          </span>
          . Implementing designs with Tailwind and Bootstrap.
        </li>

        <li className="mb-3">
          Creating a continuous workflow with{" "}
          <span className="phrase-highlight">
            <strong>Docker</strong>
          </span>{" "}
          /{" "}
          <span className="phrase-highlight">
            <strong>Kubernetes</strong>
          </span>
          and deploying with Digital Ocean and netlify. Always looking to
          improve security by adopting the latest standards and ensuring great
          reliability of our web applications.
        </li>
      </>
    );
  }

  function MoreCodeCareer() {
    return (
      <>
        <li className="mb-3">
          Daily, I used React.js,{" "}
          <span className="phrase-highlight">
            <strong>Javascript</strong>
          </span>{" "}
          ECMA 5-11, CSS,{" "}
          <span className="phrase-highlight">
            <strong>Tailwind CSS</strong>
          </span>{" "}
          for styling and occasionally Bootstrap 4. I interacted with
          <span className="phrase-highlight">
            <strong>express.js</strong>
          </span>{" "}
          routes, stored data in a{" "}
          <span className="phrase-highlight">
            <strong>MongoDB</strong>
          </span>{" "}
          and used the mongoose ORM. The popular node packages we used was
          form-hooks and Axios.
        </li>
        <li className="mb-3">
          My responsibilities involved maintaining the hiring system,
          implementing new features and updating job posts. I implemented
          front-end
          <span className="phrase-highlight">
            <strong>CRUD</strong>
          </span>{" "}
          functionality for posting jobs to the job board, built a
          <span className="phrase-highlight">
            <strong>custom hook</strong>
          </span>
          for API requests and improved the SEO score. Successfully reduced API
          requests with local storage and implemented infinite scrolling. I
          <span className="phrase-highlight">
            <strong>refactored large parts</strong>
          </span>{" "}
          of the codebase,
          <span className="phrase-highlight">
            <strong>improved responsiveness</strong>
          </span>{" "}
          by reducing calling repaint and the time taken for the browser to
          render.
        </li>
        <li className="mb-3">
          Later I used python to run an automated process every 30 minutes, to
          fetch data from various API's, parse the data and then clean the
          fields so they matched our UI. Then save them to the MongoDB backend.
        </li>
      </>
    );
  }
  return (
    <section className="container container-narrow">
      <h2 className="text-2xl font-bold text-purple skill-heading">
        {" "}
        <span role="img" aria-label="Daniel Johnson's">
          👨‍💻
        </span>{" "}
        Experience:
      </h2>

      <ul className="mb-4 leading-loose">
        <li className="pb-4 mb-3 border-b border-highlight">
          <div className="flex items-center mb-3">
            <StaticImage
              src="../../../images/work-logos/hiyield.jpg"
              alt="hiyield"
              className="border-2 border-highlight"
              placeholder="none"
              layout="fixed"
              width={72}
              height={72}
              formats={["auto", "avif", "webp", "png"]}
            />
            <header className="ml-4 leading-normal">
              <h3 className="text-lg font-extrabold">Full-Stack Engineer </h3>
              <h4 className="font-bold">
                <a
                  className="text-purple"
                  href="https://hiyield.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @hiyield.co.uk
                </a>
              </h4>
              <h5 className="font-italic">July 2021 - Present</h5>
            </header>
          </div>

          <blockquote className="italic mb-3">
            “A tech-focused digital agency in Cornwall who create User-centered
            products, websites, and experiences that engage, delight, and
            deliver true value to both our clients and their customers.”
          </blockquote>

          <div className="my-2">
            <div className="">
              I work as a
              <span className="phrase-highlight">
                <strong>junior Full-Stack Engineer</strong>
              </span>
              who
              <span className="phrase-highlight">
                <strong>supports others</strong>
              </span>
              with their projects and to keep on
              <span className="phrase-highlight">
                <strong>top of the backlog</strong>
              </span>
              . I also
              <span className="phrase-highlight">
                <strong>interact with designers</strong>
              </span>
              asking for feedback of completed work, and informing what parts of
              the design might need to change to be more accessible.
            </div>

            {showMoreHiyield && <MoreHiYield />}
            {!showMoreHiyield && (
              <div className="flex justify-end w-full">
                <button
                  className="border py-1 px-3 bg-highlight text-sm font-bold"
                  onClick={() => setshowMoreHiyield(true)}
                >
                  Read More
                </button>
              </div>
            )}
          </div>
        </li>

        <li>
          <div className="flex items-center mb-3">
          <StaticImage
              src="../../../images/work-logos/codecareer.png"
              alt="codecareer"
              className="border-2 border-highlight"
              placeholder="none"
              layout="fixed"
              width={72}
              height={72}
              formats={["auto", "avif", "webp", "png"]}
            />
           
            <header className="ml-4 leading-normal">
              <h3 className="text-lg font-extrabold"> React Developer </h3>
              <h4 className="font-bold">
                <a
                  className="text-purple"
                  href=" http://jobs.codecareer.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @CodeCareer.io
                </a>
              </h4>
              <h5 className="font-italic">June 2020 — April 2021</h5>
            </header>
          </div>

          <blockquote className="italic mb-3">
            Startup that assists junior developers finding jobs via a job board.
          </blockquote>

          <ul className="my-2">
            <li className="">
              I worked as part of a frontend development team using React.js,
              JavaScript and CSS, TailwindCSS and Bootstrap4. We used the{" "}
              <span className="phrase-highlight">
                <strong>agile</strong>
              </span>
              methodology and a{" "}
              <span className="phrase-highlight">
                <strong>jira</strong>
              </span>{" "}
              Kaban board to assign features.
            </li>
          </ul>
          {showMoreCodeCareer && <MoreCodeCareer />}
            {!showMoreCodeCareer && (
              <div className="flex justify-end w-full">
                <button
                  className="border py-1 px-3 bg-highlight text-sm font-bold"
                  onClick={() => setshowMoreCodeCareer(true)}
                >
                  Read More
                </button>
              </div>
            )}
        </li>
      </ul>
    </section>
  );
}

export default WorkExperience;
