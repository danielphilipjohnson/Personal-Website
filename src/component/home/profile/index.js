import React, { useState } from "react";
import { Link } from "gatsby";
import PDF from "../../../../downloads/Daniel_Philip_Johnson_Front_End_Engineer.pdf";

import "./profile.css";

function Profile() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="container mb-8">
      <div className="py-8 border-b border-highlight badge-container mb-4">
        <div className="badge-content">
          <span className="text-3xl">
            Hi{" "}
            <span role="img" aria-label="happy to meet you">
              👋{" "}
            </span>
            I am Daniel✨
          </span>
          <p className="pt-2 text-xl">
            <span role="img" aria-label="As a front end engineer">
              👨‍💻{" "}
            </span>
            I work remote{" "}
            <span role="img" aria-label="from my house">
              🏠
            </span>{" "}
            in Cornwall
          </p>
        </div>
        <div className="w-max bg-badge rounded px-3 py-3 mt-4">
          <span className="mr-2" role="img" aria-label="my resume">
            📝
          </span>
          <a href={PDF} download>
            Resume PDF
          </a>
        </div>
      </div>

      <div>
        <blockquote>
          <p className="leading-loose mb-2">
            I am a
            <span className="phrase-highlight">
              <strong>Full-Stack Engineer</strong>
            </span>
            with more than
            <span className="phrase-highlight">
              <strong>2+ years</strong>
            </span>
            of coding experience who is embarking on a journey to become a
            <span className="phrase-highlight">
              <strong>senior engineer</strong>
            </span>
            with
            <span className="phrase-highlight">
              <strong>hiyield</strong>
            </span>
            . I am in my second developer role rocking the
            <span className="phrase-highlight">
              <strong>startup</strong>
            </span>
            scene and continue to enjoy building
            <span className="phrase-highlight">
              <strong>rapid greenfield projects</strong>
            </span>
            to help clients get their vision to market first.
          </p>

          {showMore && (
            <>
              <p className="leading-loose mb-4">
                As a
                <span className="phrase-highlight">
                  <strong>Full-Stack Engineer</strong>
                </span>
                I get to use a lot of languages ranging from
                <span className="phrase-highlight">
                  <strong>Python</strong>
                </span>
                ,
                <span className="phrase-highlight">
                  <strong>Django</strong>
                </span>
                ,
                <span className="phrase-highlight">
                  <strong>JavaScript</strong>
                </span>
                and
                <span className="phrase-highlight">
                  <strong>Typescript</strong>
                </span>
                . I have worked on projects that have used ASP.net ,
                django-rest,
                <span className="phrase-highlight">
                  <strong>express</strong>
                </span>
                and
                <span className="phrase-highlight">
                  <strong>WordPress</strong>
                </span>
                . I have created front end applications with
                <span className="phrase-highlight">
                  <strong>React</strong>
                </span>
                ,Next, gatsby ,
                <span className="phrase-highlight">
                  <strong>vue</strong>
                </span>
                and
                <span className="phrase-highlight">
                  <strong>nuxt</strong>
                </span>
                and for styling I use
                <span className="phrase-highlight">
                  <strong>Tailwind</strong>
                </span>
                and
                <span className="phrase-highlight">
                  <strong>Bootstrap</strong>
                </span>
                . I have experience with various state management
                <span className="phrase-highlight">
                  <strong>Vuex</strong>
                </span>
                , redux, redux-thunks, select, sagas and
                <span className="phrase-highlight">
                  <strong>GraphQL</strong>
                </span>
                . For creating websites with content management systems I use
                WordPress (PHP) and
                <span className="phrase-highlight">
                  <strong>Prismic</strong>
                </span>
                .
              </p>

              <p className="leading-loose mb-4">
                In my spare time, I am building some libraries for vue.js and
                improving my next skills. I’m planning on releasing YouTube
              </p>

              <div className="badge-container">
                <div className="badge">
                  <span role="img" aria-label="go here">
                    👉{" "}
                  </span>
                  If you want to know
                  <Link to="about">about me</Link>
                </div>
              </div>
            </>
          )}
        </blockquote>
        {!showMore && (
          <div className="flex justify-end w-full">
            <button
              className="border py-1 px-3 bg-highlight text-sm font-bold"
              onClick={() => setShowMore(true)}
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Profile;
