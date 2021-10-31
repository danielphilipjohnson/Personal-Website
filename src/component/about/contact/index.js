import React from "react";
import { Link } from "gatsby";

import WannaChat from "./wanna-chat";
import FindMe from "./find-me";

function Contact() {
  return (
    <>
      <div className="container">
        <h2 className="text-3xl font-bold mb-2 pb-2 border-b border-grey">
          📫 Contact Me
        </h2>
        <div className="mb-4 flex items-center bg-badge p-3 rounded border border-grey">
          <p className="text-sm leading-7">
            <span className="mr-4"> 👉</span>
            If you want to talk with me you can contact me
            <Link className="ml-1 text-primary font-bold" to="/contact">
              here
            </Link>
          </p>
        </div>
      </div>
      <FindMe />
      <WannaChat />
    </>
  );
}

export default Contact;
