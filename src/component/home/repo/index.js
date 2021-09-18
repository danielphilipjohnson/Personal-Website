import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import "./repo.css";

function Repo() {
  return (
    <section className="container mb-8">
      <h2 className="text-2xl font-bold text-purple skill-heading">
        Github Repositories:
      </h2>
      <div className="">
        <div className="flex flex-wrap md:flex-nowrap justify-between pb-4">
          <div className="md:w-1/2 repo md:mr-4">
            <a href="https://github.com/danielphilipjohnson/Front-End-Development-Path">
              <div className="repo__header flex items-center">
                <FontAwesomeIcon icon={faBook} className="text-primary mr-4" />
                <p>Front-End-Development-Path</p>
              </div>
              <p className="repo__text">
                A portfolio of front-end franmeworks I have used. From react,
                angular and vue to bootstrap to tailwind.
              </p>
              <div className="repo__footer">
                <FontAwesomeIcon icon={faGithub} />
                <span>
                  github.com/danielphilipjohnson/Front-End-Development-Path
                </span>
              </div>
            </a>
          </div>

          <div className="md:w-1/2 repo">
            <a href="https://github.com/danielphilipjohnson/Computer-Science">
              <div className="repo__header flex items-center">
                <FontAwesomeIcon icon={faBook} className="text-primary mr-4" />
                <p>Computer-Science</p>
              </div>

              <p className="repo__text">
                I always wanted to take a computer science degree so in my spare
                time I follow the Open Source Society University. Path to a free
                self-taught education in Computer Science!
              </p>
              <div className="repo__footer">
                <FontAwesomeIcon icon={faGithub} />
                <span>github.com/danielphilipjohnson/Computer-Science</span>
              </div>
            </a>
          </div>
        </div>
        <button className="border py-1 px-3 bg-highlight text-xs font-extrabold float-right text-right mb-4 uppercase">
          Go to github
        </button>
      </div>
    </section>
  );
}

export default Repo;
