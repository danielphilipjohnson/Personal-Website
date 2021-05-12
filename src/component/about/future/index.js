import React from "react";
import Layout from "../layout/";

function Future() {
  return (
    <Layout
      sectionLabel={"my future plans"}
      icon={"💚"}
      iconLabel={"green heart"}
      title={"The FUTURE"}
    >
      <p className="bio-content">
        Ways to support my journey, values and mission Follow Me You can
        encourage me on Twitter, Instagram and LinkedIn. Tell me what you need
        to know about web-development I would love to write about it and help by
        making learning material. I want to create content in the forms of
        blogs, posts and YouTube. Share, share and share again! If you enjoy my
        content, please share it with friends and family. Comment and give me
        valuable feedback! I want my projects to be of high quality. Learn React
        or Vue.js These are areas I specialise in so can answer your questions
        and possibly help collaborate. Contribute Also, come join me on some
        GitHub projects and practice with me! Find an issue with my tutorial
        GitHub source let me know! Make a pull request and show off your skills.
      </p>
    </Layout>
  );
}

export default Future;
