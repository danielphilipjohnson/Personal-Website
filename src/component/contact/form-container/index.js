import React from "react";

import Form from "./form/form";
import ContactInfo from "./info/contact-info";

import "./form-container.css";

function FormContainer() {
  const contactinfo = {
    location: "Truro, Cornwall, United Kingdom",
    mobile: "+44 555-5555",
    email: "daniel-philip-johnson@gmail.com",
  };

  return (
    <div className="form-container">
      <p className="description">
        I am here to help and answer any question you might have about your
        project. I look forward to hearing from you{" "}
        <span role="img" aria-label="happy">
          🙂
        </span>
      </p>

      <Form />

      <ContactInfo info={contactinfo} />
    </div>
  );
}

export default FormContainer;
