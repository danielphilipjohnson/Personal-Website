import React from "react";

import Seo from "../component/Seo";
import Layout from "../component/layout/Layout";

import ContactContainer from "../component/contact";

function contact({ location }) {
  return (
    <Layout location={location.pathname}>
      <Seo />
      <ContactContainer />
    </Layout>
  );
}

export default contact;
