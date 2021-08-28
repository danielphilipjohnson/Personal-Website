import React from "react";
import FormContainer from "./form-container";
import ImageContainer from "./image-container";

import "./contact.css";

function ContactContainer() {
  return (
    <section className="contacts">
      <section className="form-card">
        <ImageContainer />

        <FormContainer />
      </section>
    </section>
  );
}

export default ContactContainer;
