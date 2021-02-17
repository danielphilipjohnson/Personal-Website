module.exports = [
  "gatsby-plugin-sass",
  "gatsby-plugin-sharp",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-offline",
  `gatsby-plugin-fontawesome-css`,
  `gatsby-transformer-remark`,
  // {
  //   resolve: "gatsby-plugin-manifest",
  //   options: {
  //     name: `Daniel Philip Johnson`,
  //     short_name: `Daniel Johnson`,
  //     start_url: `/`,
  //     background_color: `#FFF`,
  //     theme_color: `#1A011E`,
  //     display: `minimal-ui`,
  //     icon: `src/images/icon.png`, // This path is relative to the root of the site.
  //     icons: [
  //       {
  //         src: `/favicons/apple-icon-57x57.png`,
  //         sizes: `57x57`,
  //         type: `image/png`,
  //       },
  //       {
  //         src: `/favicons/apple-icon-60x60.png`,
  //         sizes: `60x60`,
  //         type: `image/png`,
  //       },
  //       {
  //         src: `/favicons/apple-icon-72x72.png`,
  //         sizes: `72x72`,
  //         type: `image/png`,
  //       },
  //       {
  //         src: `/favicons/apple-icon-76x76.png`,
  //         sizes: `76x76`,
  //         type: `image/png`,
  //       },
  //       {
  //         src: `/favicons/apple-icon-114x114.png`,
  //         sizes: `114x114`,
  //         type: `image/png`,
  //       },
  //       {
  //         src: `/favicons/apple-icon-120x120.png`,
  //         sizes: `120x120`,
  //         type: `image/png`,
  //       },
  //       {
  //         src: `/favicons/apple-icon-144x144.png`,
  //         sizes: `144x144`,
  //         type: `image/png`,
  //       },
  //       {
  //         src: `/favicons/apple-icon-152x152.png`,
  //         sizes: `152x152`,
  //         type: `image/png`,
  //       },
  //       {
  //         src: `/favicons/apple-icon-180x180.png`,
  //         sizes: `180x180`,
  //         type: `image/png`,
  //       },
  //       {
  //         src: `/favicons/android-icon-192x192.png`,
  //         sizes: `192x192`,
  //         type: `image/png`,
  //       },
  //       {
  //         src: "/images/icon.png",
  //         type: "image/png",
  //         sizes: "512x512",
  //       },
  //       {
  //         src: `/favicmapons/favicon-32x32.png`,
  //         sizes: `32x32`,
  //         type: `image/png`,
  //       },
  //       {
  //         src: `/favicons/favicon-96x96.png`,
  //         sizes: `96x96`,
  //         type: `image/png`,
  //       },
  //       {
  //         src: `/favicons/favicon-16x16.png`,
  //         sizes: `16x16`,
  //         type: `image/png`,
  //       },
  //     ],
  //   },
  // },

  // {
  //   resolve: `gatsby-source-filesystem`,
  //   options: {
  //     name: `src`,
  //     path: `${__dirname}/src/`,
  //   },
  // },

  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "./src/images/",
    },
    __key: "images",
  },

  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `./src/markdown/about`,
    },
  },
  "gatsby-plugin-mdx",
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "pages",
      path: "src/pages/",
    },
    __key: "pages",
  },

  // {
  //   resolve: "gatsby-plugin-static-folders",
  //   options: {
  //     folders: ["/images"],
  //   },
  // },
];
