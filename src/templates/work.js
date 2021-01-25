import React from "react";
import SEO from "../component/Seo";

import Layout from "../component/layout/Layout";
import Header from "../component/layout/Header";

function work({ location, data, pageContext }) {
  console.log(pageContext);
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto explicabo cupiditate perferendis ad unde iure
              necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
              deleniti distinctio dolores quaerat ut nihil aliquid!Provident
              assumenda accusamus minima excepturi laudantium nisi sapiente
              perspiciatis doloribus fugit ratione ea delectus commodi
              doloremque ullam aperiam eos mollitia pariatur molestiae,
              veritatis illo iure nihil architecto. Ipsam, provident adipisci?
            </p>

            <h2>Goals</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
              architecto necessitatibus vitae inventore placeat magnam quia
              impedit nesciunt. Iste dolor saepe accusantium tempore possimus
              quam commodi exercitationem quidem blanditiis suscipit!Aliquam,
              minus reprehenderit laboriosam assumenda, dicta similique facere
              earum tempora nulla error quaerat odio autem possimus, dolore est
              placeat facilis nostrum dignissimos tenetur adipisci cumque
              repudiandae. Modi cumque molestias dolore!
            </p>

            <h2>Lessons Learned </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
              quaerat similique delectus aspernatur aut cum. Totam est modi
              accusantium tempore! Sed, porro!
            </p>
          </div>

          <div>mobile view</div>
        </div>
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
          }
        }
      }
    }
  }
`;
