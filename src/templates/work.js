import React from "react";
import { graphql } from "gatsby";

import SEO from "../component/Seo";

import Layout from "../component/layout/Layout";

import "./styles.css";

function Work({ location, data, pageContext }) {
  const { details } = pageContext.post;

  const toolUsed = details.toolUsed;
  return (
    <Layout location={location.pathname}>
      <SEO />
      <section id="work-temp" className="work-temp">
        {/* <Header
          title={"Project: "}
          secondary={pageContext.post.title}
          subTitle={"Daniel Philip Johnson"}
        /> */}
        <div className="image-banner">
          <div
            className="image-inner"
            style={{
              backgroundImage: `url(${pageContext.post.imageSrc})`,
            }}
          ></div>
          <div className="container project">
            <div>
              <img
                className="profile-card-image profile-emoji"
                src="https://img.icons8.com/ios/250/000000/macbook.png"
                alt=""
              />
            </div>

            <h1 className="text-purple project-heading lg-heading">
              {pageContext.post.title}
            </h1>

            <div className="project-tools bb ">
              {/* <div className="project-tools__heading">
                <h3 className="lg-heading">Built With</h3>
              </div> */}

              <div className="project-tools__stats">
                <h3 className="text-purple">Built with </h3>
                {toolUsed.map((tool) => {
                  const { name, src, about } = tool;
                  return (
                    <div className="project-tool" key={name}>
                      <img src={src} alt={name} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container"></div>
        </div>

        <div className="project-stat">
          <div className="container">
            <div className="project-stat__information">
              <div className="project-stat__block">
                <h2 className="text-secondary project-stat__block--header">
                  Overview
                </h2>
                <p>{details.overview}</p>
              </div>

              <div className="project-stat__block">
                <h2 className="text-secondary">Goals</h2>
                <p>{details.goals}</p>
              </div>
              <div className="project-stat__block">
                <h2 className="text-secondary">Lessons Learned </h2>
                <p>{details.lessonsLearned}</p>
              </div>
            </div>

            <figure className="tech-figure">
              <img
                className="img-fluid"
                src={details.mobileView}
                alt="mobile view"
              />
              <figcaption>Fig.1 - Mobile View of App</figcaption>
            </figure>
          </div>
        </div>

        <div className="btn-group ">
          <a
            className="btn-outline btn-outline-primary"
            href={pageContext.post.codepenLink}
          >
            View project
          </a>
          <a
            className="btn-outline btn-outline-primary"
            href={pageContext.post.githubLink}
          >
            Github source
          </a>
        </div>

        <div className="project-process container">
          <div className="project-process--information">
            <h2 className="text-secondary">Process</h2>
            <p dangerouslySetInnerHTML={{ __html: details.process }}></p>
          </div>

          <figure className="tech-figure">
            <img
              className="img-fluid"
              src={details.tabletView}
              alt="tablet view"
            />
            <figcaption>Fig.2 - Tablet View of App</figcaption>
          </figure>
        </div>
      </section>
    </Layout>
  );
}

export default Work;

export const query = graphql`
  query($slug: String!) {
    allSitePage(filter: { path: { eq: $slug } }) {
      nodes {
        path
        context {
          post {
            path
            badges
            codepenLink
            description
            githubLink
            imageSrc
            path
            projectLink
            title
            type
            details {
              overview
              goals
              lessonsLearned
              mobileView
              toolUsed {
                name
                src
                about
              }
              process
              tabletView
            }
          }
        }
      }
    }
  }
`;
