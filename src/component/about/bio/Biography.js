import React from "react";

import "./biography.css";

function Biography() {
  return (
    <div className="bio container">
      <h2 className="bio-name-heading-2 text-purple skill-heading">
        Mission Statement:
      </h2>
      <h4 className="bio-mission-heading">
        Mission driven react developer with a passion to create apps that allows
        you to express your ideas.
      </h4>

      <p className="bio-content">
        Enthusiastic programmer looking to expand his skills with the right
        front-end react developer position. I have a Theoretical knowledge of
        the fundamentals HTML, CSS and JS. I specialise in react development,
        graphql, redux, redux thunk and reselect. I'm seeking to further develop
        my front end skills and be part of a team that can accelerate my
        development.
      </p>
      <p className="bio-content">
        I started with web development during my years at univeristy. I made
        websites and 2D games as a hobby. In my 3rd year I was responsible for
        creating programs for neuroscience lab projects. Recently I started to
        pursue web development as a career because it is something I enjoy. I
        enrolled with coursera and completed courses, im currently updating my
        freecodecamp projects and improving my skills with Udemy courses.
      </p>
      <p className="bio-content">
        Current Focus:
        <span>
          <span> {"//"} </span>
          <span className="text-purple-dark "> Accessibility </span>
        </span>
        <span>
          <span> {"//"} </span>
          <span className="text-purple-dark "> React </span>
        </span>
        <span>
          <span> {"//"} </span>
          <span className="text-purple-dark "> Performance </span>
        </span>
        <span>
          <span> {"//"} </span>
          <span className="text-purple-dark "> Responsive </span>
        </span>
      </p>
    </div>
  );
}

export default Biography;
