import React from "react";

import "./contact-info.css";

function ContactInfo({ info }) {
  const { location } = info;
  return (
    <div className="contact">
      <p className="contact__title">Contact Information</p>
      <div className="contact__info" id="from">
        <img
          src="https://img.icons8.com/ios/250/000000/marker.png"
          alt="my working location"
          width="25"
          height="25"
        />
        <address className="inline contact__info-item">
          Truro, Cornwall, United Kingdom
        </address>
      </div>
      <div className="contact__info" id="phone">
        <img
          src="https://img.icons8.com/ios/250/000000/linkedin.png"
          alt="my linkedin"
          width="25"
          height="25"
        />
        <span className="contact__info-item">danielphilipjohnson</span>
      </div>

      <div className="contact__info" id="email">
        <img
          src="https://img.icons8.com/ios/250/000000/mailbox-closed-flag-up.png"
          alt="my email"
          width="25"
          height="25"
        />

        <span className="contact__info-item">
          {" "}
          daniel-philip-johnson@gmail.com
        </span>
      </div>
    </div>
  );
}

export default ContactInfo;
