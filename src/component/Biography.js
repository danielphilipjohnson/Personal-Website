import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Biography() {
  const { site } = useStaticQuery(siteQuery);
  console.log(site);
  return (
    <div className="bio">
      <div className="bio-content">
        <h3 className="text-secondary">Biography:</h3>
        <h4 className="mission">
          Mission driven react developer with a passion to create apps that
          allows you to express your ideas.
        </h4>

        <p>
          Enthusiastic programmer looking to expand his skills with the right
          front-end react developer position. I have a Theoretical knowledge of
          the fundamentals HTML, CSS and JS. I specialise in react development,
          graphql, redux, redux thunk and reselect. I'm seeking to further
          develop my front end skills and be part of a team that can accelerate
          my development.
        </p>
        <p>
          I started with web development during my years at univeristy. I made
          websites and 2D games as a hobby. In my 3rd year I was responsible for
          creating programs for neuroscience lab projects. Recently I started to
          pursue web development as a career because it is something I enjoy. I
          enrolled with coursera and completed courses, im currently updating my
          freecodecamp projects and improving my skills with Udemy courses.
        </p>
        <p>
          Current Focus:
          <span className="text-secondary"> Accessibility </span>
          //
          <span className="text-secondary"> React </span>
          //
          <span className="text-secondary"> Python </span>
        </p>
      </div>
    </div>
  );
}

export default Biography;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        tagline
      }
    }
  }
`;
