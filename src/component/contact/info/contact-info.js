import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "./contact-info.css";

function ContactInfo({ info }) {
  const { location, mobile, email } = info;
  return (
    <div className="contact">
      <p>Contact Information</p>
      <div className="info" id="from">
        <img
          src="https://img.icons8.com/ios/250/000000/marker.png"
          alt=""
          width="25"
        />
        <address>{location}</address>
      </div>
      <div className="info" id="phone">
        <img
          src="https://img.icons8.com/ios/250/000000/linkedin.png"
          alt=""
          width="25"
        />

        <span>danielphilipjohnson</span>
        {/* <FontAwesomeIcon icon={faPhone} />
        <span>{mobile}</span> */}
      </div>

      <div className="info" id="email">
        <img
          src="https://img.icons8.com/ios/250/000000/mailbox-closed-flag-up.png"
          alt=""
          width="25"
        />

        <span> daniel-philip-johnson@gmail.com</span>
      </div>
    </div>
  );
}

export default ContactInfo;
