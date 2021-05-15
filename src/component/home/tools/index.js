import React from "react";
import "./tools.css";
import { StaticImage } from "gatsby-plugin-image";

function Tools() {
  return (
    <section className="container">
      <header>
        <h2 className="text-purple skill-heading">
          {" "}
          <span role="img" aria-label="tools">
            🧰
          </span>{" "}
          Tools
        </h2>
        <h3>Here are a list of tools, I use daily during my job.</h3>
      </header>

      <div className="specializes">
        <div className="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/javascript.png"
              alt="JavaScript"
              placeholder="none"
              layout="fixed"
              width={70}
              height={70}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>
          <div>
            <h3 className="specialize__header">JavaScript</h3>

            <p className="specialize__paragraph">
              With over 2 years experience using JavaScript [ECMA5-11] building
              websites, react and angular apps.
            </p>
          </div>
        </div>
        <div className="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/React.png"
              alt="react"
              placeholder="none"
              layout="fixed"
              width={70}
              height={70}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>

          <div>
            <h3 className="specialize__header">React</h3>
            <p className="specialize__paragraph">
              2 years experience building various React projects from a Markdown
              Previewer, Drum Machine and amazon clone. As well as 6 months
              experience working as a React developer for a startup.
            </p>
          </div>
        </div>
        <div className="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/Redux.png"
              alt="redux"
              placeholder="none"
              layout="fixed"
              width={70}
              height={70}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>

          <div>
            <h3 className="specialize__header">Redux</h3>
            <p className="specialize__paragraph">
              When using React, Redux is my go to state manager which is paired
              with redux thunk and reselect
            </p>
          </div>
        </div>
        <div className="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/graphql.png"
              alt="graphql"
              placeholder="none"
              layout="fixed"
              width={70}
              height={70}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>

          <div>
            <h3 className="specialize__header">GraphQL</h3>
            <p className="specialize__paragraph">
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
