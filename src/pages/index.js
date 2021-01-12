import React from "react";

import SEO from "../component/Seo";
import Layout from "../component/layout/Layout";
import SocialIcons from "../component/home/Icons";
import "./index.css";
import "./main.css";
import bg from "../images/showcase1.jpg";
// styles

// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO />

        <section
          id="home"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <h1 className="lg-heading">
            Daniel
            <span id="secondary" className="text-secondary">
              {" "}
              Philip
            </span>
            <span> Johnson</span>
          </h1>
          <div id="icons" className="icons">
            <h2 className="sm-heading">
              Front End Engineer at CodeCareer.io who specialises with React |
              Javascript ECMA 5-11| Tailwind | Bootstrap 4 | SASS | CSS | HTML
            </h2>

            <SocialIcons />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default IndexPage;
