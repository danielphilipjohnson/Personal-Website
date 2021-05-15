import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import chooseEducationImage from "../util";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "./education.css";

function Education() {
  const { site } = useStaticQuery(siteQuery);
  const [displayShowMore, setDisplayShowMore] = useState(true);
  const maxDisplay = 3;

  const [currentEducation, setCurrentEducation] = useState(
    site.siteMetadata.education.slice(0, maxDisplay)
  );

  const seeAll = () => {
    setDisplayShowMore(false);
    setCurrentEducation(
      site.siteMetadata.education.slice(0, site.siteMetadata.education.length)
    );
  };

  return (
    <div id="education" className="container container-narrow">
      <h2 className="text-purple skill-heading">
        <span role="img" aria-label="graduation">
          🎓
        </span>{" "}
        Education
      </h2>
      <div className="job-meta">
        <span>May 2014</span>
      </div>
      <ul className="work-experience">
        <li className="job-current ">
          <h3 className="job-title">
            BSc Psychology{" "}
            <a
              className="text-purple"
              href="https://www.plymouth.ac.uk/courses/undergraduate/bsc-psychology"
              target="_blank"
              rel="noopener noreferrer"
            >
              @University of Plymouth
            </a>
          </h3>

          <ul className="job-description">
            <li className="job-description__list">
              In this course I studied the following topics Individual
              Differences, human development, Social, Developmental, Cognition,
              and Biological Psychology. I chose the following four current
              topics:
            </li>
            <li className="job-description__list">
              <span className="text-highlight">
                <strong>Neurobiology and crime:</strong>
              </span>
              <p>
                Researched how lies are formed in the brain and what leads to
                body cues.
              </p>
            </li>

            <li className="job-description__list">
              <span className="text-highlight">
                <strong>Neuroscience:</strong>
              </span>

              <p>
                The role of mental imagery and mental health. The embodied brain
                and memory
              </p>
            </li>
            <li className="job-description__list">
              <span className="text-highlight">
                <strong>Mental disorders and Pharmaceuticalogy:</strong>
              </span>

              <p>
                Investigated Alzhemiers and the role of beta amyloid plaques The
                role of anxiety in PTSD
              </p>
            </li>
          </ul>
        </li>
      </ul>

      <h2 className="text-purple skill-heading">
        {" "}
        <span role="img" aria-label="icon of courses">
          📜
        </span>{" "}
        Courses
      </h2>

      <div className="education-grid">
        {currentEducation.map((course) => {
          return (
            <div
              className="course"
              key={course.certificateLink + course.issueDate}
            >
              <div>{chooseEducationImage(course.imageType)}</div>

              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-info">{course.school}</p>
                <p className="course-grade">
                  <span className="date">Issued {course.issueDate}</span>
                </p>
                {course.certificateLink && (
                  <a className="btn-certificate" href={course.certificateLink}>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {displayShowMore && (
        <button className="show-more text-center" onClick={() => seeAll()}>
          Show More
        </button>
      )}
    </div>
  );
}

export default Education;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        education {
          imageType
          title
          school
          issueDate
          certificateLink
        }
      }
    }
  }
`;
