import React from "react";

import ContactInfo from "./Contact-Info";

function ContactContainer({ info }) {
  return (
    <div>
      <ContactInfo {...info} />
    </div>
  );
}

export default ContactContainer;
