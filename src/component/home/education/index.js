import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "./education.css";

import atlassian from "../../../images/course-logos/atlassian.webp";
import google from "../../../images/course-logos/google.png";
import hong from "../../../images/course-logos/hong.png";
import freecodecamp from "../../../images/course-logos/freecodecamp.jpeg";
import michigan from "../../../images/course-logos/michigan.png";
import plymouth from "../../../images/course-logos/plymouth.png";
import uci from "../../../images/course-logos/uci.webp";
import udemy from "../../../images/course-logos/udemy.jpeg";

function Education() {
  const { site } = useStaticQuery(siteQuery);
  const [displayShowMore, setDisplayShowMore] = useState(true);

  const [currentEducation, setCurrentEducation] = useState(
    site.siteMetadata.education.slice(0, 3)
  );
  const seeAll = () => {
    setDisplayShowMore(false);
    setCurrentEducation(
      site.siteMetadata.education.slice(0, site.siteMetadata.education.length)
    );
  };

  const choosePhoto = (imageType) => {
    if (imageType === "atlassian") {
      return (
        <StaticImage
          className="course-logo"
          src="../../../images/course-logos/atlassian.webp"
          alt="uci"
          placeholder="none"
          layout="fixed"
          width={75}
          height={75}
          quality="90"
          formats={["auto", "avif", "webp", "png"]}
        />
      );
    } else if (imageType === "google") {
      return (
        <StaticImage
          className="course-logo"
          src="../../../images/course-logos/google.png"
          alt="google"
          placeholder="none"
          height={75}
          width={75}
          quality="90"
          formats={["auto", "avif", "webp", "png"]}
        />
      );
    } else if (imageType === "hong") {
      return (
        <StaticImage
          className="course-logo"
          src="../../../images/course-logos/hong.png"
          alt="hong"
          placeholder="none"
          height={75}
          width={75}
          quality="90"
          formats={["auto", "avif", "webp", "png"]}
        />
      );
    } else if (imageType === "freecodecamp") {
      return (
        <StaticImage
          className="course-logo"
          src="../../../images/course-logos/freecodecamp.jpeg"
          alt="freecodecamp"
          placeholder="none"
          height={75}
          width={75}
          quality="90"
          formats={["auto", "avif", "webp", "png"]}
        />
      );
    } else if (imageType === "michigan") {
      return (
        <StaticImage
          className="course-logo"
          src="../../../images/course-logos/michigan.png"
          alt="michigan"
          placeholder="none"
          height={75}
          width={75}
          quality="90"
          formats={["auto", "avif", "webp", "png"]}
        />
      );
    } else if (imageType === "plymouth") {
      return (
        <StaticImage
          className="course-logo"
          src="../../../images/course-logos/plymouth.png"
          alt="plymouth"
          placeholder="none"
          height={75}
          width={75}
          quality="90"
          formats={["auto", "avif", "webp", "png"]}
        />
      );
    } else if (imageType === "uci") {
      return (
        <StaticImage
          className="course-logo"
          src="../../../images/course-logos/uci.webp"
          alt="uci"
          placeholder="none"
          height={75}
          width={75}
          quality="90"
          formats={["auto", "avif", "webp", "png"]}
        />
      );
    } else if (imageType === "udemy") {
      return (
        <StaticImage
          className="course-logo"
          src="../../../images/course-logos/udemy.jpeg"
          alt="udemy"
          placeholder="none"
          height={75}
          width={75}
          quality="90"
          formats={["auto", "avif", "webp", "png"]}
        />
      );
    }
    return <p>No image</p>;
  };
  return (
    <div id="education" className="bio-education">
      <div className="container container-narrow">
        <h2 className="text-purple skill-heading">
          <span crole="img" aria-label="graduation">
            🎓
          </span>{" "}
          Education
        </h2>
        <div className="job-meta">
          <span>May 2014</span>
        </div>
        <ul className="work-experience">
          <li className="job-current">
            <h5 className="job-title">
              BSc Psychology{" "}
              <a
                className="text-purple"
                href="https://www.plymouth.ac.uk/courses/undergraduate/bsc-psychology"
                target="_blank"
                rel="noopener noreferrer"
              >
                @University of Plymouth
              </a>
            </h5>

            <ul className="job-description">
              <li>
                In this course I studied the following topics Individual
                Differences, human development, Social, Developmental,
                Cognition, and Biological Psychology. I chose the following four
                current topics:
              </li>
              <li>
                <span className="text-highlight">
                  <strong>Neurobiology and crime:</strong>
                </span>
                <p>
                  Researched how lies are formed in the brain and what leads to
                  body cues.
                </p>
              </li>

              <li>
                <span className="text-highlight">
                  <strong>Neuroscience:</strong>
                </span>

                <p>
                  The role of mental imagery and mental health. The embodied
                  brain and memory
                </p>
              </li>
              <li>
                <span className="text-highlight">
                  <strong>Mental disorders and Pharmaceuticalogy:</strong>
                </span>

                <p>
                  Investigated Alzhemiers and the role of beta amyloid plaques
                  The role of anxiety in PTSD
                </p>
              </li>
            </ul>
          </li>
        </ul>

        <h2 className="text-purple skill-heading">📜 Courses</h2>

        <div className="education-grid">
          {currentEducation.map((course) => {
            return (
              <div
                className="course"
                key={course.certificateLink + course.issueDate}
              >
                {choosePhoto(course.imageType)}
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p className="info">{course.school}</p>
                  <p className="grade">
                    <span className="date">Issued {course.issueDate}</span>
                  </p>
                  {course.certificateLink && (
                    <a
                      className="btn-certificate"
                      href={course.certificateLink}
                    >
                      <FontAwesomeIcon icon={faGraduationCap} />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
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
