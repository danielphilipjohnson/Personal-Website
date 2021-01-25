const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const generateWorkPages = async () => {
    const result = await graphql(`
      query {
        site {
          siteMetadata {
            projects {
              title
              path
              imageSrc
              type
              description
              codepenLink
              githubLink
              projectLink
              badges
              details {
                overview
                goals
                lessonsLearned
                mobileView
              }
            }
          }
        }
      }
    `);
    // get data
    const posts = result.data.site.siteMetadata.projects;
    // loop

    posts.forEach((post, index) => {
      console.log(post);
      // make correct path
      // send the data
      createPage({
        path: post.path,
        component: path.resolve(`./src/templates/work.js`),
        context: {
          slug: post.path,
          post: post,
        },
      });
    });
  };

  generateWorkPages();
};
