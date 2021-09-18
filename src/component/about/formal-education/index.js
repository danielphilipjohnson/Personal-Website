import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function FormalEducation() {
  return (
    <div id="education" className="container container-narrow mb-16">
      <h2 className="text-2xl font-bold mb-4 pb-4 border-b border-grey">
        <span role="img" aria-label="graduation">
          🎓
        </span>{" "}
        Education
      </h2>

      <ul className="work-experience">
        <li className="job-current">
          <div className="flex items-center mb-3">
            <StaticImage
              src="../../../images/course-logos/plymouth.png"
              alt="hiyield"
              className="border-2 border-highlight"
              placeholder="none"
              layout="fixed"
              width={72}
              height={72}
              formats={["auto", "avif", "webp", "png"]}
            />
            <header className="ml-4 leading-normal">
              <h3 className="text-lg font-extrabold">BSc Psychology </h3>
              <h4 className="font-bold text-sm ">
                <a
                  className="text-purple font-italic"
                  href="https://www.plymouth.ac.uk/courses/undergraduate/bsc-psychology"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @University of Plymouth
                </a>
              </h4>
              <h5 className="font-italic text-xs">May 2014</h5>
            </header>
          </div>
          <ul className="mb-4">
            <li className="mb-2">
              In this course I studied the following topics Individual
              Differences, human development, Social, Developmental, Cognition,
              and Biological Psychology. I chose the following four current
              topics:
            </li>
            <li className="mb-2">
              <span className="bg-badge px-2 py-1 rounded mb-2 text-xs">
                <strong>Neurobiology and crime:</strong>
              </span>
              <p className="py-2">
                I Researched how lies are formed in the brain and what leads to
                body cues.
              </p>
            </li>

            <li className="mb-2">
              <span className="bg-badge px-2 py-1 rounded mb-2 text-xs">
                <strong>Neuroscience of memory:</strong>
              </span>
              <p className="py-2">
                The role of mental imagery and mental health. The embodied brain
                and memory
              </p>
            </li>
            <li className="mb-2">
              <span className="bg-badge px-2 py-1 rounded mb-2 text-xs">
                <strong>Mental disorders and Pharmaceuticalogy:</strong>
              </span>

              <p className="py-2">
                Investigated Alzhemiers and the role of beta amyloid plaques The
                role of anxiety in PTSD
              </p>
            </li>
            <li className="mb-2">
              <span className="bg-badge px-2 py-1 rounded mb-2 text-xs">
                <strong>The role implicit priming in memory</strong>
              </span>
              <p className="py-2">
                My group project focused on the role implicit priming plays in
                forming memories. We investigated if the priming effect occurred
                due to muscle memory.
              </p>
            </li>
          </ul>
        </li>
      </ul>

      <ul className="work-experience">
        <li className="job-current">
          <div className="flex items-center mb-3">
            <StaticImage
              src="../../../images/course-logos/plymouth.png"
              alt="hiyield"
              className="border-2 border-highlight"
              placeholder="none"
              layout="fixed"
              width={72}
              height={72}
              formats={["auto", "avif", "webp", "png"]}
            />
            <header className="ml-4 leading-normal">
              <h3 className="text-lg font-extrabold">HND Applied Psychology</h3>
              <h4 className="font-bold">
                <a
                  className="text-purple font-italic"
                  href="https://www.truro-penwith.ac.uk/downloads/HE_Course_PDFs/HND_Applied_Psychology.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Penwith College
                </a>
              </h4>
              <h5 className="font-italic text-xs">May 2012</h5>
            </header>
          </div>
          <ul className="mb-4">
            <li className="mb-2">
              In this course I studied the following topics: Advanced Data
              Analysis, Education Psychology,Communication, Clinical Psychology,
              Applied Cognition, Environmental Psychology,Health Psychology and
              Performance Psychology. For my final project I chose if perceptual
              fluency can increase retention of information.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default FormalEducation;
