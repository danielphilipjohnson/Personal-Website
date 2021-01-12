module.exports = {
  siteMetadata: {
    title: `Daniel Philip Johnson`,
    titleTemplate: "React Developer · %s",
    url: "http://danielphilipjohnson.me/",
    image: "images/banner.png",
    twitterUsername: "@danielp_johnson",
    author: `Daniel Philip Johnson`,
    description: `Front-End Engineer for CodeCareer who specialises in React developer, graphql, Node, express and MongoDB.`,
    keywords:
      "Front-End Engineer, Front-End Engineer, english, UK, London, web development, reactjs, nodejs, graphql",
    twitterImage: "images/banner.png",
    facebookImage: "images/banner.png",
    profileImage:
      "https://pbs.twimg.com/profile_images/1339602638111830020/k0dGL2Ye_400x400.png",
    socials: [
      {
        link: "https://github.com/danielphilipjohnson",
        FontAwesomeIcon: {
          type: "fab",
          logo: "github",
        },
      },
      {
        link: "https://twitter.com/danielp_johnson",
        FontAwesomeIcon: {
          type: "fab",
          logo: "twitter",
        },
      },
      {
        link: "https://www.linkedin.com/in/daniel-philip-johnson/",
        FontAwesomeIcon: {
          type: "fab",
          logo: "linkedin",
        },
      },
      {
        link: "https://codepen.io/danielphilipjohnson/",
        FontAwesomeIcon: {
          type: "fab",
          logo: "codepen",
        },
      },
      {
        link: "https://stackoverflow.com/users/13921677/daniel-philip-johnson",
        FontAwesomeIcon: {
          type: "fab",
          logo: "stack-overflow",
        },
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
