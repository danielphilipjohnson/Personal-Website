import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "./education.css";

import atlassian from "../images/course-logos/atlassian.webp";
import google from "../images/course-logos/google.png";
import hong from "../images/course-logos/hong.png";
import michigan from "../images/course-logos/michigan.png";
import plymouth from "../images/course-logos/plymouth.png";
import uci from "../images/course-logos/uci.webp";
import udemy from "../images/course-logos/udemy.jpeg";

function Education() {
  const { site } = useStaticQuery(siteQuery);
  console.log(site);

  const choosePhoto = (imageType) => {
    if (imageType === "atlassian") {
      return <img className="course-logo" src={atlassian} alt="uci" />;
    } else if (imageType === "google") {
      return <img className="course-logo" src={google} alt="uci" />;
    } else if (imageType === "hong") {
      return <img className="course-logo" src={hong} alt="uci" />;
    } else if (imageType === "michigan") {
      return <img className="course-logo" src={michigan} alt="michigan" />;
    } else if (imageType === "plymouth") {
      return <img className="course-logo" src={plymouth} alt="plymouth" />;
    } else if (imageType === "uci") {
      return <img className="course-logo" src={uci} alt="uci" />;
    } else if (imageType === "udemy") {
      return <img className="course-logo" src={udemy} alt="udemy" />;
    }
    return <p>No image</p>;
  };
  return (
    <div id="education" className="bio-education">
      <div className="container education-container">
        <h2 className="text-dark">Education</h2>
        <div className="education-grid">
          <div className="course">
            <img className="course-logo" src={uci} alt="uci" />
            <div className="course-content">
              <h3>Project Management: The Basics for Success</h3>
              <p className="info">University of California</p>
              <p className="grade">
                <span className="date">Issued October 2020</span>
              </p>
              <a
                className="btn-certificate"
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/WKJ9ETHJFF7S"
              >
                <FontAwesomeIcon icon={faGraduationCap} />
                View Certificate
              </a>
            </div>
          </div>

          <div className="card course">
            <img className="course-logo" src={udemy} alt="udemy" />
            <div className="course-content">
              <h3> Modern HTML & CSS From The Beginning</h3>
              <p className="info">Udemy</p>
              <p className="grade">
                <span className="date">Issued September 2020</span>
              </p>
              <a
                className="btn-certificate"
                href="https://www.udemy.com/certificate/UC-49df60d0-c960-433b-a62b-8bbaa5cd3846/"
              >
                <i className="fas fa-graduation-cap"></i>
                View Certificate
              </a>
            </div>
          </div>

          <div className="card course">
            <img
              className="course-logo"
              src={hong}
              alt="hong kong University"
            />
            <div className="course-content">
              <h3>Full-Stack Web Development with React</h3>
              <p className="info">University of Hong Kong</p>
              <p className="grade">
                <span className="date">Issued Aug 2020</span>
              </p>
              <a
                className="btn-certificate"
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/WKJ9ETHJFF7S"
              >
                <i className="fas fa-graduation-cap"></i>
                View Certificate
              </a>
            </div>
          </div>

          <div className="course">
            <img
              className="course-logo"
              src={michigan}
              alt="michigan University"
            />
            <div className="course-content">
              <h3>Web Applications for Everybody</h3>
              <p className="info">University of Michigan</p>
              <p className="grade">
                <span className="date">June 2020</span>
              </p>
              <a
                className="btn-certificate"
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/EWWJFR4LJM7J"
              >
                <i
                  className="fas
              fa-graduation-cap"
                ></i>
                View Certificate
              </a>
            </div>
          </div>

          <div className="course">
            <img
              className="course-logo"
              src={michigan}
              alt="michigan University"
            />
            <div className="course-content">
              <h3>Python for Everybody</h3>
              <p className="info">University of Michigan</p>
              <p className="grade">
                <span className="date">March 2020</span>
              </p>
              <a
                className="btn-certificate"
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/8UFSG6W97PMY"
              >
                <i
                  className="fas
              fa-graduation-cap"
                ></i>
                View Certificate
              </a>
            </div>
          </div>

          <div className="course">
            <img className="course-logo" src={atlassian} alt="atlassian" />
            <div className="course-content">
              <h3>Version Control with Git</h3>
              <p className="info">Atlassian</p>
              <p className="grade">
                <span className="date">March 2020</span>
              </p>
              <a
                className="btn-certificate"
                href="https://www.coursera.org/account/accomplishments/certificate/WCMWFJX9QAXV"
              >
                <i className="fas fa-graduation-cap"></i>
                View Certificate
              </a>
            </div>
          </div>

          <div className="course">
            <img className="course-logo" src={google} alt="google course" />
            <div className="course-content">
              <h3>Google IT Automation with Python Specialization</h3>
              <p className="info">Google</p>
              <p className="grade">
                <span className="date">March 2020</span>
              </p>
              <a
                className="btn-certificate"
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/EEGGHB96R3KQ"
              >
                <i className="fas fa-graduation-cap"></i>
                View Certificate
              </a>
            </div>
          </div>

          <div className="course">
            <img
              className="course-logo"
              src={michigan}
              alt="michigan university"
            />
            <div className="course-content">
              <h3>Web Design for Everybody</h3>
              <p className="info">University of Michigan</p>
              <p className="grade">
                <span className="date">May 2020</span>
              </p>
              <a
                className="btn-certificate"
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/2A36K26P5QER"
              >
                <i
                  className="fas
              fa-graduation-cap"
                ></i>
                View Certificate
              </a>
            </div>
          </div>

          <div className="course">
            <img
              className="course-logo"
              src={plymouth}
              alt="plymouth university"
            />
            <div className="course-content">
              <h3>BSc Psychology</h3>
              <p className="info">University of Plymouth</p>

              <p className="grade">
                <span className="date">April 2014</span>
              </p>
              <a className="btn-certificate" href="#">
                <i
                  className="fas
              fa-graduation-cap"
                ></i>
                View Certificate
              </a>
            </div>
          </div>

          <div className="course">
            <img
              className="course-logo"
              src={plymouth}
              alt="plymouth university"
            />
            <div className="course-content">
              <h3>HND Applied Psychology</h3>
              <p className="info">University of Plymouth</p>
              <p className="grade">
                <span className="date">Issued May 2012</span>
              </p>
              <a className="btn-certificate" href="#">
                <i
                  className="fas
              fa-graduation-cap"
                ></i>
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
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
