import React from "react";
import "./tools.css";
import { StaticImage } from "gatsby-plugin-image";

function Tools() {
  return (
    <section className="container">
      <header>
        <h2 className="text-purple skill-heading"> 🧰 Tools</h2>
        <h3>Here are a list of tools, I use daily during my job.</h3>
      </header>

      <div className="specializes">
        <div className="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/png/javascript.png"
              alt="JavaScript"
              placeholder="none"
              layout="fixed"
              width={85}
              height={80}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>
          <div>
            <h3>JavaScript</h3>
            <p>
              With over 2 years experience using JavaScript [ECMA5-11] building
              websites, react and angular apps.
            </p>
          </div>
        </div>
        <div class="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/png/react.png"
              alt="react"
              placeholder="none"
              layout="fixed"
              width={85}
              height={76}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>

          <div>
            <h3>React</h3>
            <p>
              2 years experience building various React projects from a Markdown
              Previewer, Drum Machine and amazon clone. As well as 6 months
              experience working as a React developer for a startup.
            </p>
          </div>
        </div>
        <div class="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/png/redux.png"
              alt="redux"
              placeholder="none"
              layout="fixed"
              width={85}
              height={76}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>

          <div>
            <h3>Redux</h3>
            <p>
              When using React, Redux is my go to state manager which is paired
              with redux thunk and reselect
            </p>
          </div>
        </div>
        <div class="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/png/graphql.png"
              alt="graphql"
              placeholder="none"
              layout="fixed"
              width={85}
              height={85}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>

          <div>
            <h3>GraphQL</h3>
            <p>
              An alternative to Redux which I love is GraphQL. I use this as
              query language for my API's. I have been using this for almost a
              year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
