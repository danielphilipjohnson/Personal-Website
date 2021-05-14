import React from "react";
import Seo from "../component/Seo";
import Layout from "../component/layout/Layout";

import HomeContainer from "../component/home/home.container";

import "../styles/defaults.css";
import "../styles/btn.css";
import "../styles/utils.css";
import "./styles/index.css";

const IndexPage = ({ location }) => {
  return (
    <>
      <Layout location={location.pathname}>
        <Seo />
        <HomeContainer />
      </Layout>
    </>
  );
};

export default IndexPage;
