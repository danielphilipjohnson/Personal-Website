import React from "react";

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
            autoFocus
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
      <div className="row">
        <button className="btn-submit col" id="submit" type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
}

export default Form;
