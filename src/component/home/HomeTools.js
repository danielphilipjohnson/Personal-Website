import React from "react";
import "./home-tools.css";

function HomeTools() {
  return (
    <section id="home-tools">
      <div className="container">
        <p className="lead">
          A React Developer that makes web apps for mobiles, tablets and
          desktops while focusing on accessbility and responsiveness.
        </p>
        <h2 className="section-title">I build with</h2>
        <div className="bottom-line"></div>

        <div className="specials">
          <div>
            <img
              src="https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/js.png"
              alt="js"
            />
            <h3>JavaScript</h3>
            <p>
              I have been using JavaScript for over two years which I have built
              numerous projects and web apps.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/react.svg"
              alt="react"
            />
            <h3>React</h3>
            <p>
              I have built numerous projects with React which include a Markdown
              Previewer, Drum Machine and a portfolio. Currently I'am finishing
              of an amazon clone.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/Redux1.png"
              alt="Redux"
            />
            <h3>Redux</h3>
            <p>
              I use this as my current state manager. I have over a years
              experience.
            </p>
          </div>

          <div>
            <img
              src="https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/GraphQL.png"
              alt="GraphQL"
            />
            <h3>GraphQL</h3>
            <p>
              I use GraphQL as query language for my API's. I have been using
              this for almost a year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeTools;
