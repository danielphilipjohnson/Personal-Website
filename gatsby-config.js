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
    twitterImage: "images/bannertagline.png",
    facebookImage: "images/banner.png",
    profileImage:
      "https://pbs.twimg.com/profile_images/1339602638111830020/k0dGL2Ye_400x400.png",
    tagline: `Front End Engineer at CodeCareer.io who specialises with React |
      Javascript | Tailwind | Bootstrap 4 | SASS`,
    specialities: [
      {
        src:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/js.png",
        heading: `JavaScript`,
        description: ` I have been using JavaScript for over two years which I have built
        numerous projects and web apps.`,
      },
      {
        src:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/react.svg",
        heading: `React`,
        description: ` I have built numerous projects with React which include a Markdown
        Previewer, Drum Machine and a portfolio. Currently I'am finishing
        of an amazon clone.`,
      },
      {
        src:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/Redux1.png",
        heading: `Redux`,
        description: ` I use this as my current state manager. I have over a years
        experience.`,
      },
      {
        src:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/GraphQL.png",
        heading: `GraphQL`,
        description: `I use GraphQL as query language for my API's. I have been using
        this for almost a year.`,
      },
    ],
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
    education: [
      {
        imageType: "uci",
        title: "Project Management: The Basics for Success",
        school: "University of California",
        issueDate: "October 2020",
        certificateLink:
          "https://www.coursera.org/account/accomplishments/specialization/certificate/WKJ9ETHJFF7S",
      },
      {
        imageType: "udemy",
        title: "Modern HTML & CSS From The Beginning",
        school: "Udemy",
        issueDate: "September 2020",
        certificateLink:
          "https://www.udemy.com/certificate/UC-49df60d0-c960-433b-a62b-8bbaa5cd3846/",
      },
      {
        imageType: "hong",
        title: "Full-Stack Web Development with React",
        school: "University of Hong Kong",
        issueDate: "Aug 2020",
        certificateLink:
          "https://www.coursera.org/account/accomplishments/specialization/certificate/WKJ9ETHJFF7S",
      },
      {
        imageType: "michigan",
        title: "Web Applications for Everybody",
        school: "University of Michigan",
        issueDate: "June 2020",
        certificateLink:
          "https://www.coursera.org/account/accomplishments/specialization/certificate/EWWJFR4LJM7J",
      },
      {
        imageType: "michigan",
        title: "Python for Everybody",
        school: "University of Michigan",
        issueDate: "March 2020",
        certificateLink:
          "https://www.coursera.org/account/accomplishments/specialization/certificate/8UFSG6W97PMY",
      },
      {
        imageType: "atlassian",
        title: "Version Control with Git",
        school: "Atlassian",
        issueDate: "March 2020",
        certificateLink:
          "https://www.coursera.org/account/accomplishments/certificate/WCMWFJX9QAXV",
      },
      {
        imageType: "google",
        title: "Google IT Automation with Python Specialization",
        school: "Google",
        issueDate: "March 2020",
        certificateLink:
          "https://www.coursera.org/account/accomplishments/specialization/certificate/EEGGHB96R3KQ",
      },
      {
        imageType: "michigan",
        title: "Web Design for Everybody",
        school: "University of Michigan",
        issueDate: "May 2020",
        certificateLink:
          "https://www.coursera.org/account/accomplishments/specialization/certificate/2A36K26P5QER",
      },
      {
        imageType: "plymouth",
        title: "BSc Psychology",
        school: "University of Plymouth",
        issueDate: "April 2014",
        certificateLink: "",
      },
      {
        imageType: "plymouth",
        title: "HND Applied Psychology",
        school: "University of Plymouth",
        issueDate: "May 2012",
        certificateLink: "",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Daniel Philip Johnson`,
        short_name: `Daniel Johnson`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#1A011E`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/favicons/apple-icon-57x57.png`,
            sizes: `57x57`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-60x60.png`,
            sizes: `60x60`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-76x76.png`,
            sizes: `76x76`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-114x114.png`,
            sizes: `114x114`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-120x120.png`,
            sizes: `120x120`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-180x180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: "/images/icon.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
        ],
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
