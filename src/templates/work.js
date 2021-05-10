import React from "react";
import { graphql } from "gatsby";

import SEO from "../component/Seo";

import Layout from "../component/layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <div className="container project bb ">
            <span className="profile-card-image profile-emoji mb-2">
              🖥️
              {/* <img
                className="profile-card-image profile-emoji"
                src="https://img.icons8.com/ios/250/000000/macbook.png"
                alt=""
              /> */}
            </span>

            <h1 className="text-purple project-heading lg-heading">
              {pageContext.post.title}
            </h1>

            <div className="project-tools">
              {/* <div className="project-tools__heading">
                <h3 className="lg-heading">Built With</h3>
              </div> */}

              <div className="project-tools__stats">
                <h3 className="text-purple project-tools__header">
                  Built with{" "}
                </h3>
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

            <div className="badge">
              <img
                src="https://img.icons8.com/ios/250/000000/application-window.png"
                alt=""
                width="25"
              />
              <a href={pageContext.post.codepenLink}>
                To view project click here
              </a>
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
                <h2 className="project-heading mb-4">Overview</h2>
                <p>{details.overview}</p>
              </div>

              <div className="project-stat__block">
                <h2 className="project-heading mb-4">Goals</h2>
                <p>{details.goals}</p>
              </div>
              <div className="project-stat__block">
                <h2 className="project-heading mb-4">Lessons Learned </h2>
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

            <div>
              <h2 className="project-heading mb-4">Respository </h2>
              <a href={pageContext.post.githubLink}>
                <div className="repo">
                  <div className="repo__header">
                    <img
                      src="https://img.icons8.com/ios/250/000000/journal.png"
                      alt=""
                      width="25"
                    />
                    <p>{pageContext.post.title}</p>
                  </div>

                  <p className="repo__text">
                    What is freeCodeCamp? We’re a nonprofit community that helps
                    you learn to code by building projects. How can you help me
                    learn to code? You'll learn to code by completing coding
                    challenges and buil…
                  </p>
                  <div className="repo__footer">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                    <span>github.com</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="btn-group ">
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
        </div> */}

        <div className="project-process container">
          <div className="project-process--information">
            <h2 className="project-heading">Process</h2>
            <p dangerouslySetInnerHTML={{ __html: details.process }}></p>
          </div>

          <figure className="tech-figure">
            <img
              className="img-fluid"
              src={details.tabletView}
              alt="tablet view"
            />
            <figcaption>Fig.2 - Tablet View of App</figcaption>{" "}
          </figure>
        </div>
      </section>
    </Layout>
  );
}

export default Work;

// export const query = graphql`
//   query($slug: String!) {
//     allSitePage(filter: { path: { eq: $slug } }) {
//       nodes {
//         path
//         context {
//           post {
//             path
//             badges
//             codepenLink
//             description
//             githubLink
//             imageSrc
//             path
//             projectLink
//             title
//             type
//             details {
//               overview
//               goals
//               lessonsLearned
//               mobileView
//               toolUsed {
//                 name
//                 src
//                 about
//               }
//               process
//               tabletView
//             }
//           }
//         }
//       }
//     }
//   }
// `;
