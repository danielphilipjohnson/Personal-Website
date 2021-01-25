import React from "react";
import SEO from "../component/Seo";

import Layout from "../component/layout/Layout";
import Header from "../component/layout/Header";

function work({ location, data, pageContext }) {
  console.log(pageContext);

  const { details } = pageContext.post;

  const toolUsed = details.toolUsed;
  console.log(toolUsed);
  return (
    <Layout location={location.pathname}>
      <SEO />
      <section id="work" className="work">
        <Header
          title={"Project: "}
          secondary={pageContext.post.title}
          subTitle={"Daniel Philip Johnson"}
        />

        <div
          style={{
            backgroundImage: `url(${pageContext.post.imageSrc})`,
            width: "500px",
            height: "500px",
          }}
        ></div>

        <div>
          <div>
            <h2>Overview</h2>
            <p>{details.overview}</p>

            <h2>Goals</h2>
            <p>{details.goals}</p>

            <h2>Lessons Learned </h2>
            <p>{details.lessonsLearned}</p>
          </div>

          <div>
            <img src={details.mobileView} alt="" srcset="" />
          </div>
        </div>

        <article>
          <h3>What was used</h3>
          {toolUsed.map((tool) => {
            const { name, src, about } = tool;
            return (
              <>
                <img src={src} alt={name} />
                <h4>{name}</h4>
                <p>{about}</p>
              </>
            );
          })}
        </article>

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
