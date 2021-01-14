import React from "react";

import SEO from "../component/Seo";
import Layout from "../component/layout/Layout";
import "./contact.css";
import formbg from "../images/formbg.jpeg";
function contact() {
  return (
    <>
      <Layout>
        <SEO />
        <section className="contacts">
          <header>
            <h1 className="lg-heading">
              Contact
              <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">Got a question?</h2>
          </header>

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
                  <i className="fab fa-dev"></i>
                </div>

                <div className="hackerrank">
                  <i className="fab fa-hackerrank"></i>
                </div>

                <div className="codepen">
                  <i className="fab fa-codepen"></i>
                </div>

                <div className="stack-overflow">
                  <i className="fab fa-stack-overflow"></i>
                </div>
                <div className="free-code-camp">
                  <i className="fab fa-free-code-camp"></i>
                </div>
                <div className="github">
                  <i className="fab fa-github"></i>
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
                  <div className="col">
                    <div className="labels">
                      <label for="help">
                        What can I help you with
                        <span className="asterik">*</span>
                      </label>
                    </div>

                    <div className="select-box top">
                      <input type="checkbox" className="options-view-button" />
                      <div className="select-button" className="brd">
                        <div className="selected-value">
                          <span>Select a service</span>
                        </div>
                        <div className="chevrons">
                          <i className="fas fa-chevron-up"></i>
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </div>
                      <div className="options">
                        <div className="option">
                          <input
                            className="s-c top"
                            type="radio"
                            name="service"
                            value="build"
                          />
                          <input
                            className="s-c bottom"
                            type="radio"
                            name="service"
                            value="build"
                          />
                          <i className="fas fa-hammer"></i>
                          <span className="label">Build</span>
                          <span className="opt-val">Build</span>
                        </div>
                        <div className="option">
                          <input
                            className="s-c top"
                            type="radio"
                            name="service"
                            value="maintain"
                          />
                          <input
                            className="s-c bottom"
                            type="radio"
                            name="service"
                            value="maintain"
                          />
                          <i className="fas fa-wrench"></i>
                          <span className="label">Maintain</span>
                          <span className="opt-val">Maintain</span>
                        </div>
                        <div className="option">
                          <input
                            className="s-c top"
                            type="radio"
                            name="service"
                            value="support"
                          />
                          <input
                            className="s-c bottom"
                            type="radio"
                            name="service"
                            value="support"
                          />
                          <i className="fas fa-tools"></i>
                          <span className="label">Support</span>
                          <span className="opt-val">Support</span>
                        </div>
                        <div className="option">
                          <input
                            className="s-c top"
                            type="radio"
                            name="service"
                            value="training"
                          />
                          <input
                            className="s-c bottom"
                            type="radio"
                            name="service"
                            value="training"
                          />
                          <i className="fas fa-chalkboard-teacher"></i>
                          <span className="label">Training</span>
                          <span className="opt-val">Training</span>
                        </div>
                        <div className="option-bg"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="labels">
                      <label for="help">
                        Project type
                        <span className="asterik">*</span>
                      </label>
                    </div>

                    <div className="select-box">
                      <input type="checkbox" className="options-view-button" />
                      <div className="select-button" className="brd">
                        <div className="selected-value">
                          <span>Select a project</span>
                        </div>
                        <div className="chevrons">
                          <i className="fas fa-chevron-up"></i>
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </div>
                      <div className="options">
                        <div className="option">
                          <input
                            className="s-c top"
                            type="radio"
                            name="project"
                            value="web"
                          />
                          <input
                            className="s-c bottom"
                            type="radio"
                            name="project"
                            value="web"
                          />
                          <i className="fab fa-firefox-browser"></i>
                          <span className="label">Web</span>
                          <span className="opt-val">Web</span>
                        </div>
                        <div className="option">
                          <input
                            className="s-c top"
                            type="radio"
                            name="project"
                            value="desktop"
                          />
                          <input
                            className="s-c bottom"
                            type="radio"
                            name="project"
                            value="desktop"
                          />
                          <i className="fas fa-tools"></i>
                          <span className="label">Desktop</span>
                          <span className="opt-val">Desktop</span>
                        </div>
                        <div className="option">
                          <input
                            className="s-c top"
                            type="radio"
                            name="project"
                            value="mobile"
                          />
                          <input
                            className="s-c bottom"
                            type="radio"
                            name="project"
                            value="mobile"
                          />
                          <i className="fas fa-mobile"></i>
                          <span className="label">Mobile</span>
                          <span className="opt-val">Mobile</span>
                        </div>
                        <div className="option-bg"></div>
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

              <div className="contact">
                <p>Contact Information</p>
                <div className="info" id="from">
                  <i className="fas fa-map-marker-alt"></i>
                  <address>Truro, Cornwall, United Kingdom</address>
                </div>
                <div className="info" id="phone">
                  <i className="fas fa-phone"></i>
                  <span>+44 555-5555</span>
                </div>

                <div className="info" id="email">
                  <i className="fas fa-envelope"></i>
                  <span>daniel-philip-johnson@gmail.com</span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </>
  );
}

export default contact;
