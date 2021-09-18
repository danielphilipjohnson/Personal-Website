import React from "react";

import "./biography.css";

function Biography() {
  return (
    <>
      <div className="container mb-8">
        <header>
          <h2 className="text-2xl font-bold mb-4 pb-4 border-b border-grey">
            Mission Statement:
          </h2>
          <h3 className="pl-4 mb-4 border-l-4 border-primary-light">
            "Mission driven nuxt developer with a passion to create apps that
            allows you to express your ideas."
          </h3>
        </header>

        <p className="leading-7 mb-8">
          Enthusiastic programmer who is expanding his skills at hiyield. He
          currently works as a Full-Stack python developer. I have a Theoretical
          knowledge of the fundamentals HTML, CSS and JS. Formely specialised in
          react development, until switching to nuxt and vue.js. My tech stack
          is django-rest, nuxt, vue and tailwind for styling as well as
          contributing with the WordPress team.
        </p>
      </div>
      <div className="container">
        <header>
          <h2 className="font-bold">Current Focus:</h2>
        </header>

        <div className="mb-4 flex items-center bg-badge p-3 rounded border border-grey">
          <p className="text-sm leading-7">
            <span className="mr-4">⚡</span>
            <span>
              <span className=""> {"//"} </span>
              <span> Accessibility </span>
            </span>
            <span>
              <span> {"//"} </span>
              <span> React </span>
            </span>
            <span>
              <span> {"//"} </span>
              <span> Performance </span>
            </span>
            <span>
              <span> {"//"} </span>
              <span> Responsive </span>
            </span>
          </p>
        </div>

        <header>
          <h2 className="font-bold">Technologies:</h2>
        </header>

        <div className="mb-4 flex items-center bg-badge p-3 rounded border border-grey">
          <p className="text-sm leading-7">
            <span className="mr-4">⚡</span> React, Next, Vue, Nuxt,
            Javascript(ES6), Python, django-rest, Tailwind, Docker, Kubernetes
          </p>
        </div>
      </div>
    </>
  );
}

export default Biography;
