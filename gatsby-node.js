const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.onCreateNode = ({ node }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     console.log(node.internal.type);
//   }
// };

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const generateWorkPages = async () => {
    await graphql(`
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
    `).then((result) => {
      // get data
      const posts = result.data.site.siteMetadata.projects;
      // loop

      posts.forEach((post, index) => {
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
    });
  };

  await generateWorkPages();
};

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   console.log(node);
//   const { createNodeField } = actions;
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `/` });
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     });
//   }
// };
