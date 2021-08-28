const path = require(`path`);

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
              codepenLink
              githubLink
              projectLink
              badges
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
    `).then((result) => {
      // get data
      const posts = result.data.site.siteMetadata.projects;
      // loop

      posts.forEach((post, index) => {
        // make correct path
        // send the data
        createPage({
          path: post.path,
          component: path.resolve(`./src/templates/WorkProject/work.js`),
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
