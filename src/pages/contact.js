import React from "react";

import SEO from "../component/Seo";
import Layout from "../component/layout/Layout";
import Header from "../component/layout/Header";

import ContactContainer from "../component/contact/contact-container";
import ImageContainer from "../component/contact/image-container";

import "./contact.css";

function contact({ location }) {
  return (
    <>
      <Layout location={location.pathname}>
        <SEO />
        <section className="contacts">
          <Header
            title={"Contact"}
            secondary={"Me"}
            subTitle={"Got a question?"}
          />

          <section className="form-card container">
            <ImageContainer />

            <ContactContainer />
          </section>
        </section>
      </Layout>
    </>
  );
}

export default contact;
