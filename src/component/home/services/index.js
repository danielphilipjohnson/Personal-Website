import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faObjectUngroup } from "@fortawesome/free-regular-svg-icons";

import {
  faCode,
  faPencilAlt,
  faBook,
  faLaptopCode,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";

import "./services.css";

function services() {
  return (
    <section id="home-services" className="home-services container">
      <h2 className="text-2xl font-extrabold text-purple skill-heading">
        {"  "}
        <span role="img" aria-label="icon of offer">
       💼  {"  "} 
        </span>
        {"  "}  What I offer
      </h2>

      <div className="process">
        <div className="service">
          <div className="text-xl">
            <FontAwesomeIcon icon={faPencilAlt} className="text-primary" />
          </div>
          <div className="service__container">
            <h3 className="service__header">Technical Writing</h3>
            <p className="service__text">
              Writing tutorials about my favourite technologies, APIs with
              Node.js and contributing to open source.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="text-xl">
            <FontAwesomeIcon icon={faCode} className="text-primary" />
          </div>
          <div className="service__container">
            <h3 className="service__header">Writing Code</h3>
            <p className="service__text">
              Need help adding to your a codebase or a open source project, I
              can use Javascript, React and Nuxt. feel free to contact me.
            </p>
          </div>
        </div>

        <div className="service">
          <div className="text-xl">
            <FontAwesomeIcon icon={faBook} className="text-primary" />
          </div>
          <div className="service__container">
            <h3 className="service__header">Writing books and documentation</h3>
            <p className="service__text">
              Currently writing a book about Tailwind CSS and JavaScript blog content.
            
            </p>
          </div>
        </div>

        <div className="service">
          <div className="text-xl">
            <FontAwesomeIcon icon={faLaptopCode} className="text-primary" />
          </div>
          <div className="service__container">
            <h3 className="service__header">Web Applications</h3>
            <p className="service__text">
              Building fast, responsive and engaging apps to bring your ideas to
              life.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="text-xl">
            <FontAwesomeIcon icon={faObjectUngroup} className="text-primary" />
          </div>
          <div className="service__container">
            <h3 className="service__header">Responsive Design</h3>
            <p className="service__text">
              Making sure your designs work no matter what device a user views
              it.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="text-xl">
            <FontAwesomeIcon icon={faHammer} className="text-primary" />
          </div>
          <div className="service__container">
            <h3 className="service__header">Code Refactoring</h3>
            <p className="service__text">
              Need help refactoring a codebase, implementing new features in
              react apps with clean code, and performance improvements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default services;
