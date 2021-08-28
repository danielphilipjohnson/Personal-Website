import React, { useState } from "react";
import "./tools.css";
import { StaticImage } from "gatsby-plugin-image";

function Tools() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="container">
      <header>
        <h2 className="text-2xl font-extrabold text-purple skill-heading">
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
              src="../../../images/about-logos/python.png"
              alt="i use Python"
              placeholder="none"
              layout="fixed"
              width={70}
              height={70}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>
          <div>
            <h3 className="specialize__header">Python</h3>
            <p className="specialize__paragraph">
              With over 3 years experience using Python. Used for automation,
              API's with flask, django and fastAPI.
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
              width={80}
              height={80}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>

          <div>
            <h3 className="specialize__header">React</h3>
            <p className="specialize__paragraph">
              2 years experience building various React projects from a Markdown
              Previewer, Drum Machine and amazon clone.
            </p>
          </div>
        </div>

        <div className="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/nuxt.png"
              alt="nuxt"
              placeholder="none"
              layout="fixed"
              width={90}
              height={80}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>
          <div>
            <h3 className="specialize__header">Nuxt</h3>
            <p className="specialize__paragraph">
              After changing from a react developer I jumped into vue and Nuxt
              projects. I'm enjoying every minute of it.
            </p>
          </div>
        </div>

        <div className="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/wordpress.png"
              alt="wordpress"
              placeholder="none"
              layout="fixed"
              width={70}
              height={70}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>
          <div>
            <h3 className="specialize__header">Wordpress</h3>
            <p className="specialize__paragraph">
              Experience building wordpress websites with custom acf
            </p>
          </div>
        </div>

        <div className="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/django-rest.png"
              alt="django-rest"
              placeholder="none"
              layout="fixed"
              width={70}
              height={70}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>
          <div>
            <h3 className="specialize__header">Django Rest</h3>
            <p className="specialize__paragraph">
              For making nice small API's, I use the django rest framework. It's
              easy to switch out the databases.
            </p>
          </div>
        </div>

       

        {showMore && (
          <>
           <div className="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/postgres.png"
              alt="postgres"
              placeholder="none"
              layout="fixed"
              width={70}
              height={70}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>
          <div>
            <h3 className="specialize__header">Postgres</h3>
            <p className="specialize__paragraph">
              When the project requires working with database I use Postgres.
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

        <div className="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/docker.png"
              alt="docker"
              placeholder="none"
              layout="fixed"
              width={85}
              height={60}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>
          <div>
            <h3 className="specialize__header">Docker</h3>
            <p className="specialize__paragraph">
              Started to level up my skill in devops. To further my career and
              support the senior developer.
            </p>
          </div>
        </div>

        <div className="specialize">
          <div className="img-container">
            <StaticImage
              src="../../../images/about-logos/kubernetes.png"
              alt="wordpress"
              placeholder="none"
              layout="fixed"
              width={70}
              height={70}
              formats={["auto", "avif", "webp", "png"]}
            />
          </div>
          <div>
            <h3 className="specialize__header">Kubernetes</h3>
            <p className="specialize__paragraph">
              As part of leveling up my devop skills, i've deployed pods onto my
              raspberry pi's to play with scaling.
            </p>
          </div>
        </div>


          </>
        )}
        
      </div>
      {!showMore && (
          <button
            className="show-more text-center mb-8"
            onClick={() => setShowMore(true)}
          >
            Show More
          </button>
        )}
    </section>
  );
}

export default Tools;
