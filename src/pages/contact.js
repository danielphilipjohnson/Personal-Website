import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faHammer,
  faWrench,
  faTools,
  faChalkboardTeacher,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

import { faFirefoxBrowser } from "@fortawesome/free-brands-svg-icons";

import SEO from "../component/Seo";
import Layout from "../component/layout/Layout";
import Header from "../component/layout/Header";

import ContactContainer from "../component/forms/contact/Contact-Container";

import "./contact.css";
import formbg from "../images/formbg.jpeg";

const contactinfo = {
  location: "Truro, Cornwall, United Kingdom",
  mobile: "+44 555-5555",
  email: "daniel-philip-johnson/gmail.com",
};

function contact() {
  return (
    <>
      <Layout>
        <SEO />
        <section className="contacts">
          <Header
            title={"Contact"}
            secondary={"Me"}
            subTitle={"Got a question?"}
          />

          <section className="form-card container">
            <div
              className="image-container"
              style={{
                backgroundImage: `url(${formbg})`,
              }}
            >
              <header>
                {/* <h2> I can make your design a reality, maintain your project or
              offer
              training</h2> */}
                <h1 id="title">Look at my work and blogs</h1>
              </header>

              <div className="boxes">
                <div className="dev">
                  <FontAwesomeIcon icon={["fab", "dev"]} />
                </div>

                <div className="hackerrank">
                  <FontAwesomeIcon icon={["fab", "hackerrank"]} />
                </div>

                <div className="codepen">
                  <FontAwesomeIcon icon={["fab", "codepen"]} />
                </div>

                <div className="stack-overflow">
                  <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
                </div>
                <div className="free-code-camp">
                  <FontAwesomeIcon icon={["fab", "free-code-camp"]} />
                </div>
                <div className="github">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </div>
              </div>
            </div>

            <div className="form-container">
              <p className="description">
                I am here to help and answer any question you might have about
                your project. I look forward to hearing from you 🙂
              </p>

              <form id="project-contact" method="GET" action="">
                <div className="row">
                  <div className="col">
                    <div className="labels">
                      <label id="name-label" for="first-name">
                        First Name
                        <span className="asterik">*</span>
                      </label>
                    </div>
                    <input
                      autofocus
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="input-field"
                      placeholder="Enter your name first name"
                      required
                    />
                  </div>
                  <div className="col">
                    <div className="labels">
                      <label id="name-label" for="last-name">
                        Last Name
                        <span className="asterik">*</span>
                      </label>
                    </div>
                    <input
                      autofocus
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="input-field"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="labels">
                      <label id="email-label" for="email">
                        Email
                        <span className="asterik">*</span>
                      </label>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input-field"
                      required
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>

                <div className="row">
                  <div class="col">
                    <div class="labels">
                      <label for="help">
                        What can I help you with
                        <span class="asterik">*</span>
                      </label>
                    </div>

                    <div class="select-box top">
                      <input type="checkbox" class="options-view-button" />
                      <div class="select-button">
                        <div class="selected-value">
                          <span>Select a service</span>
                        </div>
                        <div class="chevrons">
                          <FontAwesomeIcon icon={faChevronUp} />
                          <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                      </div>
                      <div class="options">
                        <div class="option">
                          <input
                            class="s-c top"
                            type="radio"
                            name="service"
                            value="build"
                          />
                          <input
                            class="s-c bottom"
                            type="radio"
                            name="service"
                            value="build"
                          />
                          <FontAwesomeIcon icon={faHammer} />
                          <span class="label">Build</span>
                          <span class="opt-val">Build</span>
                        </div>
                        <div class="option">
                          <input
                            class="s-c top"
                            type="radio"
                            name="service"
                            value="maintain"
                          />
                          <input
                            class="s-c bottom"
                            type="radio"
                            name="service"
                            value="maintain"
                          />
                          <FontAwesomeIcon icon={faWrench} />
                          <span class="label">Maintain</span>
                          <span class="opt-val">Maintain</span>
                        </div>
                        <div class="option">
                          <input
                            class="s-c top"
                            type="radio"
                            name="service"
                            value="support"
                          />
                          <input
                            class="s-c bottom"
                            type="radio"
                            name="service"
                            value="support"
                          />
                          <FontAwesomeIcon icon={faTools} />
                          <span class="label">Support</span>
                          <span class="opt-val">Support</span>
                        </div>
                        <div class="option">
                          <input
                            class="s-c top"
                            type="radio"
                            name="service"
                            value="training"
                          />
                          <input
                            class="s-c bottom"
                            type="radio"
                            name="service"
                            value="training"
                          />
                          <FontAwesomeIcon icon={faChalkboardTeacher} />
                          <span class="label">Training</span>
                          <span class="opt-val">Training</span>
                        </div>
                        <div class="option-bg"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="labels">
                      <label for="help">
                        What can I help you with
                        <span className="asterik">*</span>
                      </label>
                    </div>

                    <div class="select-box">
                      <input type="checkbox" class="options-view-button" />
                      <div class="select-button">
                        <div class="selected-value">
                          <span>Select a project</span>
                        </div>
                        <div class="chevrons">
                          <FontAwesomeIcon icon={faChevronUp} />
                          <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                      </div>
                      <div class="options">
                        <div class="option">
                          <input
                            class="s-c top"
                            type="radio"
                            name="project"
                            value="web"
                          />
                          <input
                            class="s-c bottom"
                            type="radio"
                            name="project"
                            value="web"
                          />
                          <FontAwesomeIcon icon={faFirefoxBrowser} />
                          <i class="fab fa-firefox-browser"></i>
                          <span class="label">Web</span>
                          <span class="opt-val">Web</span>
                        </div>
                        <div class="option">
                          <input
                            class="s-c top"
                            type="radio"
                            name="project"
                            value="desktop"
                          />
                          <input
                            class="s-c bottom"
                            type="radio"
                            name="project"
                            value="desktop"
                          />
                          <i class="fas fa-tools"></i>
                          <FontAwesomeIcon icon={faTools} />

                          <span class="label">Desktop</span>
                          <span class="opt-val">Desktop</span>
                        </div>
                        <div class="option">
                          <input
                            class="s-c top"
                            type="radio"
                            name="project"
                            value="mobile"
                          />
                          <input
                            class="s-c bottom"
                            type="radio"
                            name="project"
                            value="mobile"
                          />
                          <i class="fas fa-mobile"></i>
                          <FontAwesomeIcon icon={faMobile} />

                          <span class="label">Mobile</span>
                          <span class="opt-val">Mobile</span>
                        </div>
                        <div class="option-bg"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="labels">
                      <label for="comments">Any Comments or Suggestions?</label>
                    </div>
                    <textarea
                      id="comments"
                      className="input-field"
                      name="comment"
                      placeholder="Enter your comment here..."
                      rows="8"
                    ></textarea>
                  </div>
                </div>
                <button className="btn-submit" id="submit" type="submit">
                  Send Message
                </button>
              </form>
              <ContactContainer info={contactinfo} />
            </div>
          </section>
        </section>
      </Layout>
    </>
  );
}

export default contact;
