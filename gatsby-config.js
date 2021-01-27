const projects = require("./gatsbyConfig/projects");

module.exports.plugins = require("./gatsbyConfig/plugins");

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
      "https://pbs.twprojectTypesimg.com/profile_images/1339602638111830020/k0dGL2Ye_400x400.png",
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
    biography: {
      statement: `Mission driven react developer with a passion to create apps that
      allows you to express your ideas.`,
      missionStatement: ` Enthusiastic programmer looking to expand his skills with the right
      front-end react developer position. I have a Theoretical knowledge of
      the fundamentals HTML, CSS and JS. I specialise in react development,
      graphql, redux, redux thunk and reselect. I'm seeking to further
      develop my front end skills and be part of a team that can accelerate
      my development.`,
      subStatement: `I started with web development during my years at univeristy. I made
      websites and 2D games as a hobby. In my 3rd year I was responsible for
      creating programs for neuroscience lab projects. Recently I started to
      pursue web development as a career because it is something I enjoy. I
      enrolled with coursera and completed courses, im currently updating my
      freecodecamp projects and improving my skills with Udemy courses.`,
      focuses: ["Accessibility", `React`, `Performance`, `Responsibility`],
    },
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
    projectTypes: ["All", "Js", "Responsive", "Angular", "Material"],
    projects: projects,
  },
};
