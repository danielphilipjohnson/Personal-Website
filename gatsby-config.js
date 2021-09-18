const projects = require("./gatsbyConfig/projects");
const education = require("./gatsbyConfig/siteMetadata/education");

const plugins = require("./gatsbyConfig/plugins");

module.exports = {
  siteMetadata: {
    title: `Daniel Philip Johnson`,
    titleTemplate: "React Developer · %s",
    url: "http://danielphilipjohnson.com/",
    siteUrl: `https://danielphilipjohnson.com/`,
    image: "images/banner.png",
    twitterUsername: "@danielp_johnson",
    author: `Daniel Philip Johnson`,
    description: `Full-Stack Engineer at Hiyield who specialises with Vue | Nuxt | Javascript | Python | Django | Tailwind | Bootstrap 4 | SASS`,
    keywords:
      "Front-End Engineer, Front-End Engineer, english, UK, London, web development, reactjs, nodejs, graphql",
    twitterImage: "images/bannertagline.png",
    facebookImage: "images/banner.png",
    profileImage:
      "https://pbs.twprojectTypesimg.com/profile_images/1339602638111830020/k0dGL2Ye_400x400.png",
    tagline: `Front End Engineer at CodeCareer.io who specialises with React |
      Javascript | Tailwind | Bootstrap 4 | SASS`,
    specialities: [
      {
        src:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/js.png",
        heading: `JavaScript`,
        description: `With over 2 years experience using JavaScript [ECMA5-11] building websites, react and angular apps.`,
      },
      {
        src:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/react.svg",
        heading: `React`,
        description: `2 years experience building various React projects from a Markdown Previewer, Drum Machine and amazon clone. As well as 6 months experience 
        working as a React developer for a startup.`,
      },
      {
        src:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/Redux1.png",
        heading: `Redux`,
        description: `When using React, Redux is my go to state manager which is paired with redux thunk and reselect`,
      },
      {
        src:
          "https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/GraphQL.png",
        heading: `GraphQL`,
        description: `An alternative to Redux which I love is GraphQL. I use this as query language for my API's. I have been using
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
    education,
    projectTypes: ["All", "Js", "Responsive", "Angular", "Material"],
    projects: projects,
  },
  plugins: plugins,
};
