import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFirefox,
  faCodepen,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import SEO from "../component/Seo";
import Layout from "../component/layout/Layout";
import bg from "../images/overlay-bg.png";

import "./styles/work.css";

function Work({ location }) {
  return (
    <Layout location={location.pathname}>
      <SEO />

      <main id="work" className="work">
        <h1 class="lg-heading">
          My
          <span class="text-secondary">Work</span>
        </h1>
        <h2 class="sm-heading">Check out some of my projects...</h2>

        <div id="responsive" class="tabcontent">
          <h2 class="section-header">Responsive Web Design</h2>
          <div class="projects">
            <div class="item">
              <div class="bar">
                <FontAwesomeIcon icon={faFirefox} />
                <i class="window-buttons"></i>
                <span class="title">Tribute Page</span>
              </div>
              <img
                class="item-img"
                src="../../../images/responsive-img/tributepage.png"
                alt="ddd page"
              />
              <div
                class="overlay"
                style={{
                  backgroundImage: `url(${bg})`,
                }}
              >
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure eiu.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/VwaJrPg">
                      view project
                    </a>
                  </div>
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/VwaJrPg">
                    <FontAwesomeIcon icon={faCodepen} />
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/1.Tribute-Page">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Survey Form</span>
              </div>
              <img
                src="../../../images/responsive-img/surveryform.png"
                alt="Survey form"
              />
              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure eius.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/oNxabPN">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/oNxabPN">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/2.Survey_form">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Product Landing</span>
              </div>
              <img
                src={"../../../images/responsive-img/productlanding.png"}
                alt="landing
              page"
              />

              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/LYNgrGV">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/LYNgrGV">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/3.Product-Landing-Page">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Technical Document</span>
              </div>
              <img
                src="../../../images/responsive-img/technicaldocument.png"
                alt="technical
              documentation"
              />

              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/PoNVJLW">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/PoNVJLW">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/4.Technical-Documentation-Page">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Portfolio</span>
              </div>
              <img
                src="../../../images/responsive-img/portfolio.jpg"
                alt="personal
              portfolio"
              />

              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/JjXmZGj">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/JjXmZGj">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="front-end" class="tabcontent">
          <h2 class="section-header">Front End Libraries</h2>
          <div class="projects">
            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Random Quote Machine</span>
              </div>

              <img
                src="../../../images/front-end-lib/quotemachine.png"
                alt="random quote
              machine"
              />

              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure eius.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/bGEgaoo">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/bGEgaoo">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/1.%20Build%20a%20Random-Quote-Machine">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Markdown Previewer</span>
              </div>
              <img
                src="../../../images/front-end-lib/markdown.png"
                alt="markdown viewer"
              />
              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure eius itaque mollitia veniam
                    vitae earum nesciunt voluptate.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/vYLgpjX">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/vYLgpjX">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/2.%20Build%20a%20Markdown%20Previewer">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Drum Machine</span>
              </div>

              <img
                src="../../../images/front-end-lib/drummachine.png"
                alt="drum machine"
              />

              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/mdVRLam">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/mdVRLam">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/3.%20Build%20a%20Drum%20Machine">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Javascript Calculator</span>
              </div>

              <img
                src="../../../images/front-end-lib/calculator.png"
                alt="js calculator"
              />

              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure eius itaque mollitia veniam
                    vitae earum nesciunt voluptate.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/abdpKOv">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/abdpKOv">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/4.%20Build%20a%20JavaScript%20Calculator">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Pomodoro Clock</span>
              </div>

              <img
                src="../../../images/front-end-lib/pomodoro.png"
                alt="pomodoro clock"
              />

              <div class="overlay">
                <div class="content">
                  <h2>Pomodoro Clock</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure eius itaque mollitia veniam
                    vitae earum nesciunt voluptate.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/OJMWEXZ">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/OJMWEXZ">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/5.%20Build%20a%20Pomodoro%20Clock">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Local Weather</span>
              </div>

              <img
                src="../../../images/front-end-lib/weatherapp.png"
                alt="local weather"
              />

              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure eius itaque mollitia veniam
                    vitae earum nesciunt voluptate.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/OJMWEQB">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/OJMWEQB">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Local-Weather">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Recipe Box</span>
              </div>
              <img
                src={`../../../images/front-end-lib/recipebox.png`}
                alt="recipe box"
              />
              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure eius itaque mollitia veniam
                    vitae earum nesciunt voluptate.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/VwePBBR">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/VwePBBR">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Recipe-Box">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Simon</span>
              </div>
              <img
                src={`../../../images/front-end-lib/simon.jpg`}
                alt="simon"
              />

              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure eius itaque mollitia veniam
                    vitae earum nesciunt voluptate.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/QWypLgY">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/QWypLgY">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Simon">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Tic Tac Toe</span>
              </div>
              <img
                src={`../../../images/front-end-lib/tictac.png`}
                alt="tic tac toe"
              />

              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure eius itaque mollitia veniam
                    vitae earum nesciunt voluptate.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/gOPmYvK">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/gOPmYvK">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Tic%20Tac%20Toe">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Twitch.tv JSON-API</span>
              </div>
              <img
                src="../../../images/front-end-lib/twitchviewer.png"
                alt="twitch app"
              />

              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure eius itaque mollitia veniam
                    vitae earum nesciunt voluptate.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/ZEQezmb">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/ZEQezmb">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="bar">
                <i class="fab fa-firefox"></i>
                <i class="window-buttons"></i>
                <span class="title">Wiki Viewer</span>
              </div>
              <img
                src="../../../images/front-end-lib/wikiviewer.png"
                alt="wiki viewer"
              />
              <div class="overlay">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem eligendi deleniti iure eius itaque mollitia veniam
                    vitae earum nesciunt voluptate.
                  </p>
                </div>

                <div class="arrow-btn">
                  <div class="arrow-btn-text">
                    <a href="https://codepen.io/danielphilipjohnson/full/LYGWYBg">
                      view project
                    </a>
                  </div>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="links">
                  <a href="https://codepen.io/danielphilipjohnson/full/LYGWYBg">
                    <i class="fab fa-codepen"></i>
                  </a>
                  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Wiki-Viewer">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Work;
