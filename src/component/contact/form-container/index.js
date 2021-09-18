import React from "react";

import Form from "./form/form";
import ContactInfo from "./info/contact-info";

import "./form-container.css";

function FormContainer() {
  return (
    <div className="form-container">
      <p className="form__description">
        I am here to help and answer any question you might have about your
        project. I look forward to hearing from you{" "}
        <span role="img" aria-label="happy">
          🙂
        </span>
      </p>

      <Form />
      <ContactInfo />
    </div>
  );
}

export default FormContainer;
