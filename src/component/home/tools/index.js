import React from "react";
import "./tools.css";
import { StaticImage } from "gatsby-plugin-image";

function Tools() {
  return (
    <section className="tools">
      <div className="container">
        <h2 className="text-purple skill-heading"> 🧰 Tools</h2>
        <h3>Here are a list of tools, I use daily during my job.</h3>

        <div className="specializes">
          <div className="specialize">
            <img
              src="https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/js.png"
              alt="JavaScript"
            />
            <div class="specialize__inner">
              <h3>JavaScript</h3>
              <p>
                With over 2 years experience using JavaScript [ECMA5-11]
                building websites, react and angular apps.
              </p>
            </div>
          </div>
          <div class="specialize">
            <img
              src="https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/react.svg"
              alt="React"
            />
            <div class="specialize__inner">
              <h3>React</h3>
              <p>
                2 years experience building various React projects from a
                Markdown Previewer, Drum Machine and amazon clone. As well as 6
                months experience working as a React developer for a startup.
              </p>
            </div>
          </div>
          <div class="specialize">
            <img
              src="https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/Redux1.png"
              alt="Redux"
            />
            <div class="specialize__inner">
              <h3>Redux</h3>
              <p>
                When using React, Redux is my go to state manager which is
                paired with redux thunk and reselect
              </p>
            </div>
          </div>
          <div class="specialize">
            <img
              src="https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/GraphQL.png"
              alt="GraphQL"
            />
            <div class="specialize__inner">
              <h3>GraphQL</h3>
              <p>
                An alternative to Redux which I love is GraphQL. I use this as
                query language for my API's. I have been using this for almost a
                year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
