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
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <address>{location}</address>
      </div>
      <div className="info" id="phone">
        <FontAwesomeIcon icon={faPhone} />
        <span>{mobile}</span>
      </div>

      <div className="info" id="email">
        <FontAwesomeIcon icon={faEnvelope} />
        <span>{email}</span>
      </div>
    </div>
  );
}

export default ContactInfo;
