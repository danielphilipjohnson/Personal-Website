import React from "react";
import SEO from "../component/Seo";

import Layout from "../component/layout/Layout";
import Header from "../component/layout/Header";

import "./styles.css";

function work({ location, data, pageContext }) {
  console.log(pageContext);

  const { details } = pageContext.post;

  const toolUsed = details.toolUsed;
  console.log(toolUsed);
  return (
    <Layout location={location.pathname}>
      <SEO />
      <section id="work-temp" className="work-temp">
        <Header
          title={"Project: "}
          secondary={pageContext.post.title}
          subTitle={"Daniel Philip Johnson"}
        />

        <div
          className="cta"
          style={{
            backgroundImage: `url(${pageContext.post.imageSrc})`,
          }}
        >
          <div className="btn-group cta__btn-group">
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
        </div>

        <div className="container project-stat">
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

          <figure className="project-stat__figure">
            <img
              className="img-fluid"
              src={details.mobileView}
              alt="mobile view"
            />
            <figcaption>Fig.1 - Mobile View of App</figcaption>
          </figure>
        </div>

        <div className="project-tools">
          <div className="container">
            <div className="project-tools__heading">
              <h3 className="lg-heading">Built With</h3>
              <div class="bottom-line"></div>
            </div>

            <div className="project-tools__stats">
              {toolUsed.map((tool) => {
                const { name, src, about } = tool;
                return (
                  <div className="project-tool">
                    <img src={src} alt={name} />
                    <h4>{name}</h4>
                    <p>{about}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="project-process container">
          <div className="project-process--information">
            <h2 className="text-secondary">Process</h2>
            <p>{details.process}</p>
          </div>

          {/* <div>
            <img
              className="img-fluid"
              src={details.tabletView}
              alt="tablet view"
            />
          </div> */}
          <figure className="project-stat__figure">
            <img
              className="img-fluid"
              src={details.tabletView}
              alt="tablet view"
            />
            <figcaption>Fig.2 - Tablet View of App</figcaption>
          </figure>
        </div>
        {/* 

        <article>
          <div>
            {" "}
            <h3>Process</h3>
            <p>{details.process}</p>
          </div>

          <div>
            <img src={details.tabletView} alt="tablet view" />
          </div>
        </article>
        {details.reusablecomponents && (
          <article>
            <h3>Reusable components if exists</h3>
          </article>
        )} */}
      </section>
    </Layout>
  );
}

export default work;

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
