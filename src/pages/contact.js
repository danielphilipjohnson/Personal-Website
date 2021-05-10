import React from "react";

import SEO from "../component/Seo";
import Layout from "../component/layout/Layout";

import ContactContainer from "../component/contact";

function contact({ location }) {
  return (
    <Layout location={location.pathname}>
      <SEO />
      <ContactContainer />
    </Layout>
  );
}

export default contact;
