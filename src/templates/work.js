import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import Badges from "../component/shared/badgeLogos";

import Seo from "../component/Seo";

import Layout from "../component/layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

function Work({ location, data, pageContext }) {
  const { details } = pageContext.post;

  const toolUsed = details.toolLogos;

  const tabletImageName = pageContext.post.imageSrc + "-tablet";
  const mobileImageName = pageContext.post.imageSrc + "-mobile";

  // refactor into another component
  const ProjectTabletImage = ({ tabletImageName }) => {
    return data.tablet.nodes.map((edge) => {
      if (edge.name === tabletImageName) {
        const image = getImage(edge.childrenImageSharp[0].gatsbyImageData);
        return <GatsbyImage image={image} />;
      }
      return null;
    });
  };

  const ProjectMobileImage = ({ mobileImageName }) => {
    return data.mobile.nodes.map((edge) => {
      if (edge.name === mobileImageName) {
        const image = getImage(edge.childrenImageSharp[0].gatsbyImageData);
        return <GatsbyImage image={image} />;
      }
      return null;
    });
  };

  const ProjectImage = () => {
    return data.allFile.nodes.map((edge) => {
      if (edge.name === pageContext.post.imageSrc) {
        const image = getImage(edge.childrenImageSharp[0].gatsbyImageData);
        return <GatsbyImage image={image} />;
      }
      return null;
    });
  };

  return (
    <Layout location={location.pathname}>
      <Seo />
      <section id="work-temp" className="work-temp">
        <div className="image-banner">
          <ProjectImage className="image-inner" />

          <div className="container project bb ">
            <span
              className="profile-card-image profile-emoji mb-2"
              role="img"
              aria-labelledby="project icon"
            >
              🖥️
            </span>

            <h1 className="text-purple project-heading lg-heading">
              {pageContext.post.title}
            </h1>

            <div className="project-tools">
              <div className="project-tools__stats">
                <h3 className="text-purple project-tools__header">
                  Built with{" "}
                </h3>
                <Badges badges={toolUsed} />
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
              <ProjectMobileImage mobileImageName={mobileImageName} />

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

        <div className="project-process container">
          <div className="project-process--information">
            <h2 className="project-heading">Process</h2>
            <p dangerouslySetInnerHTML={{ __html: details.process }}></p>
          </div>

          <figure className="tech-figure">
            <ProjectTabletImage tabletImageName={tabletImageName} />
            <figcaption>Fig.2 - Tablet View of App</figcaption>{" "}
          </figure>
        </div>
      </section>
    </Layout>
  );
}

// resolve tablet image

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
              toolLogos
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
    allFile(filter: { absolutePath: { regex: "/images/projects/" } }) {
      distinct(field: sourceInstanceName)
      nodes {
        id
        name
        childrenImageSharp {
          gatsbyImageData(
            width: 2048
            height: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    tablet: allFile(filter: { absolutePath: { regex: "/images/projects/" } }) {
      distinct(field: sourceInstanceName)
      nodes {
        id
        name
        childrenImageSharp {
          gatsbyImageData(
            width: 765
            height: 920
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    mobile: allFile(filter: { absolutePath: { regex: "/images/projects/" } }) {
      distinct(field: sourceInstanceName)
      nodes {
        id
        name
        childrenImageSharp {
          gatsbyImageData(
            width: 375
            height: 595
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;
