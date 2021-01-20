import React from "react";

import Form from "./Form";
import ContactInfo from "./Contact-Info";

function ContactContainer() {
  const contactinfo = {
    location: "Truro, Cornwall, United Kingdom",
    mobile: "+44 555-5555",
    email: "daniel-philip-johnson/gmail.com",
  };
  return (
    <div className="form-container">
      <p className="description">
        I am here to help and answer any question you might have about your
        project. I look forward to hearing from you 🙂
      </p>

      <Form />

      <ContactInfo info={contactinfo} />
    </div>
  );
}

export default ContactContainer;
