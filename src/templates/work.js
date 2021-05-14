import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import Badges from "../component/shared/badgeLogos";

import Seo from "../component/Seo";

import Layout from "../component/layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

function Work({ location, data, pageContext }) {
  const {
    details,
    imageSrc,
    title,
    codepenLink,
    githubLink,
  } = pageContext.post;

  const { tablet, mobile, desktop } = data;

  const {
    toolLogos,
    process,
    overview,
    goals,
    lessonsLearned,
    tabletView,
    mobileView,
  } = details;

  const ProjectImage = ({ images, imageName, className = "" }) => {
    return images.nodes.map((edge) => {
      if (edge.name === imageName) {
        const image = getImage(edge.childrenImageSharp[0].gatsbyImageData);
        return <GatsbyImage image={image} className={className} />;
      }
      return null;
    });
  };

  return (
    <Layout location={location.pathname}>
      <Seo />
      <section id="work-temp" className="work-temp">
        <div className="image-banner">
          <ProjectImage
            images={desktop}
            imageName={imageSrc}
            className="image-inner"
          />

          <div className="container project bb ">
            <span
              className="profile-card-image profile-emoji mb-2"
              role="img"
              aria-labelledby="project icon"
            >
              🖥️
            </span>

            <h1 className="text-purple project-heading lg-heading">{title}</h1>

            <div className="project-tools">
              <div className="project-tools__stats">
                <h3 className="text-purple project-tools__header">
                  Built with{" "}
                </h3>
                <Badges badges={toolLogos} />
              </div>
            </div>

            <div className="badge">
              <img
                src="https://img.icons8.com/ios/250/000000/application-window.png"
                alt=""
                width="25"
              />
              <a href={codepenLink}>To view project click here</a>
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
                <p>{overview}</p>
              </div>

              <div className="project-stat__block">
                <h2 className="project-heading mb-4">Goals</h2>
                <p>{goals}</p>
              </div>
              <div className="project-stat__block">
                <h2 className="project-heading mb-4">Lessons Learned </h2>
                <p>{lessonsLearned}</p>
              </div>
            </div>

            <figure className="tech-figure">
              <ProjectImage images={mobile} imageName={mobileView} />
              <figcaption>Fig.1 - Mobile View of App</figcaption>
            </figure>

            <div>
              <h2 className="project-heading mb-4">Respository </h2>
              <a href={githubLink}>
                <div className="repo">
                  <div className="repo__header">
                    <img
                      src="https://img.icons8.com/ios/250/000000/journal.png"
                      alt=""
                      width="25"
                    />
                    <p>{title}</p>
                  </div>

                  <p className="repo__text">
                    {/* make sitemap field */}
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
            <p dangerouslySetInnerHTML={{ __html: process }}></p>
          </div>

          <figure className="tech-figure">
            <ProjectImage images={tablet} imageName={tabletView} />
            <figcaption>Fig.2 - Tablet View of App</figcaption>{" "}
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
              process
              tabletView
            }
          }
        }
      }
    }
    desktop: allFile(filter: { absolutePath: { regex: "/images/projects/" } }) {
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
