import React from "react";
import Seo from "../component/Seo";
import Layout from "../component/layout/Layout";

import HomeContainer from "../component/home/home.container";

import "./defaults.css";
import "./styles/index.css";
import "./main.css";
import "../styles/btn.css";
import "../styles/utils.css";

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
