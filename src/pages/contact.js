import React from "react";

import SEO from "../component/Seo";
import Layout from "../component/layout/Layout";
// import Header from "../component/layout/Header";

import ContactContainer from "../component/contact";
// import ContactContainer from "../component/contact/contact-container";
// import ImageContainer from "../component/contact/image-container";

function contact({ location }) {
  return (
    <>
      <Layout location={location.pathname}>
        <SEO />
        <ContactContainer />
        {/* <section className="contacts">
          <section className="form-card">
            <ImageContainer />

            <ContactContainer />
          </section>
        </section> */}
      </Layout>
    </>
  );
}

export default contact;
