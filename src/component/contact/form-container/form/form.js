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

import "./form.css";

function Form() {
  return (
    <form
      id="project-contact"
      className="contact-form"
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <div className="row">
        <div className="col">
          <div className="labels">
            <label id="name-label" htmlFor="first-name">
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
            <label id="name-label" htmlFor="last-name">
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
            <label id="email-label" htmlFor="email">
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
            <label htmlFor="help">
              What can I help you with
              <span className="asterik">*</span>
            </label>
          </div>

          <div className="select-box top">
            <input type="checkbox" className="options-view-button" />
            <div className="select-button">
              <div className="selected-value">
                <span>Select a service</span>
              </div>
              <div className="chevrons">
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
              </div>{" "}
              {/* <section className="contacts">
          <section className="form-card">
            <ImageContainer />

            <ContactContainer />
          </section>
        </section> */}
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
                <FontAwesomeIcon icon={faHammer} />
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
                <FontAwesomeIcon icon={faWrench} />
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
                <FontAwesomeIcon icon={faTools} />
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
                <FontAwesomeIcon icon={faChalkboardTeacher} />
                <span className="label">Training</span>
                <span className="opt-val">Training</span>
              </div>
              <div className="option-bg"></div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="labels">
            <label htmlFor="help">
              What can I help you with
              <span className="asterik">*</span>
            </label>
          </div>

          <div className="select-box">
            <input type="checkbox" className="options-view-button" />
            <div className="select-button">
              <div className="selected-value">
                <span>Select a project</span>
              </div>
              <div className="chevrons">
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
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
                <FontAwesomeIcon icon={faFirefoxBrowser} />
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

                <FontAwesomeIcon icon={faTools} />

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
                <FontAwesomeIcon icon={faMobile} />
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
            <label htmlFor="comments">Any Comments or Suggestions?</label>
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
  );
}

export default Form;
