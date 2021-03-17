import React from "react";
import SEO from "../component/Seo";
import Layout from "../component/layout/Layout";

import HomeContainer from "../component/home/home.container";
import "../styles/btn.css";
import "./defaults.css";
import "./index.css";
import "./main.css";

const IndexPage = ({ location }) => {
  return (
    <>
      <Layout location={location.pathname}>
        <SEO />
        <HomeContainer />
      </Layout>
    </>
  );
};

export default IndexPage;
