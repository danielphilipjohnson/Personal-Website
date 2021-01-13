import React from "react";

function Education() {
  return (
    <div id="education" className="bio-education tabcontent">
      <h2 className="text-secondary">Education</h2>

      <div className="education-grid">
        <div className="card course">
          <img
            className="course-logo"
            src="./img/course-logos/uci.webp"
            alt="uci"
          />
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
              <i className="fas fa-graduation-cap"></i>
              View Certificate
            </a>
          </div>
        </div>

        <div className="card course">
          <img
            className="course-logo"
            src="./img/course-logos/udemy.jpeg"
            alt="udemy"
          />
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
            src="./img/course-logos/hong.png"
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
            src="./img/course-logos/michigan.png"
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
            src="./img/course-logos/michigan.png"
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
          <img
            className="course-logo"
            src="./img/course-logos/atlassian.webp"
            alt="atlassian"
          />
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
          <img
            className="course-logo"
            src="./img/course-logos/google.png"
            alt="google course"
          />
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
            src="./img/course-logos/michigan.png"
            alt="michigan university"
          />
          <div className="course-content">
            <h3> Web Design for Everybody</h3>
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
            src="./img/course-logos/plymouth.png"
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
            src="./img/course-logos/plymouth.png"
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
  );
}

export default Education;
