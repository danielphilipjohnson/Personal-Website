import React from "react";
import ContactInfo from "./contact-container";
import ImageContainer from "./image-container";

import "./contact.css";

function ContactContainer() {
  return (
    <section className="contacts">
      <section className="form-card">
        <ImageContainer />

        <ContactInfo />
      </section>
    </section>
  );
}

export default ContactContainer;
