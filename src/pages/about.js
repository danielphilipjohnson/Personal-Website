import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faDev,
  faHackerrank,
  faCodepen,
  faStackOverflow,
  faFreeCodeCamp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import SEO from "../component/Seo";
import Header from "../component/layout/Header";

import Layout from "../component/layout/Layout";

import profile from "../images/profile.jpg";
import banner from "../images/linkedinBanner.png";

import AngularLogo from "../images/about-logos/angular.svg";
import ReactLogo from "../images/about-logos/react.svg";
import GatsbyLogo from "../images/about-logos/gatsby.svg";
import GraphQlLogo from "../images/about-logos/graphql.svg";

import JavaScriptLogo from "../images/about-logos/javascript.svg";
import TypescriptLogo from "../images/about-logos/ts.svg";
import SassLogo from "../images/about-logos/sass.svg";
import BootstrapLogo from "../images/about-logos/bootstrap4.svg";
import GithubLogo from "../images/about-logos/github.svg";
import NpmLogo from "../images/about-logos/npm.svg";
// import CypressLogo from "../images/about-logos/cypress.png";
import TailwindLogo from "../images/about-logos/tailwind.png";

import "./styles/about.css";

const About = ({ location }) => {
  const {
    site: {
      siteMetadata: {
        about: { aboutStats, aboutInfo, quickBio, valuesMissions, future },
      },
    },
  } = useStaticQuery(siteQuery);

  return (
    <>
      <Layout location={location.pathname}>
        <SEO />

        <Header
          title={" About "}
          secondary={" Me"}
          subTitle={"Let me tell you a few things..."}
        />

        <div className="about">
          <div className="container about-container">
            <div className="about-info alt-bio">
              <div class="profile-card">
                <div class="profile-card-head">
                  <img
                    class="card-head-bg"
                    src={banner}
                    alt="cover of daniel philip johnson"
                  />
                </div>

                <img
                  src={profile}
                  alt="Daniel johnson"
                  class="profile-card-image"
                />

                <div class="profile-card-body">
                  <h2 class="profile-name">
                    Daniel <span>Philip</span> Johnson
                  </h2>
                  {aboutStats.map((stat) => {
                    return (
                      <a
                        class="header-badge"
                        target="_blank"
                        rel="noreferrer"
                        href={stat.link}
                      >
                        <img alt={stat.alt} src={stat.imageSrc} />
                      </a>
                    );
                  })}

                  <div class="profile-card-body-item">
                    <h3>Occupation</h3>
                    <h4>React Developer</h4>
                  </div>

                  <div class="profile-card-body-item">
                    <h3>Technologies I use</h3>
                    <div className="icons-technology">
                      <img
                        className="img-fluid"
                        src={AngularLogo}
                        alt="Angular"
                      />
                      <img src={ReactLogo} alt="React" />
                      <img src={GatsbyLogo} alt="GatsbyJS" />
                      <img src={GraphQlLogo} alt="GraphQL" />

                      <img src={JavaScriptLogo} alt="JavaScript" />
                      <img src={TypescriptLogo} alt="TypeScript" />
                      <img src={SassLogo} alt="SASS" />
                      <img src={BootstrapLogo} alt="Bootstrap" />
                      <img
                        className="img-fluid"
                        src={TailwindLogo}
                        alt="Tailwind"
                      />
                      <img src={GithubLogo} alt="Git Version Control" />
                      {/* <img src={NpmLogo} alt="NPM" /> */}
                    </div>
                  </div>
                  <div class="profile-card-body-item">
                    <h3>Graduated</h3>
                    <h4>
                      <span role="img" aria-labelledby="graduation cap">
                        🎓
                      </span>
                      Bsc Psychology | University of Plymouth
                      <span role="img" aria-labelledby="school">
                        🏫
                      </span>
                    </h4>
                  </div>

                  <div class="profile-card-body-item">
                    <h3>Location</h3>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <address> Cornwall, United Kingdom</address>
                  </div>

                  <div class="profile-card-body-item">
                    <h3>Contact</h3>
                    <FontAwesomeIcon icon={faPhone} />
                    <span> +44 555-5555</span>
                  </div>

                  <div class="profile-card-body-item">
                    <h3>Email</h3>
                    <FontAwesomeIcon icon={faEnvelope} />

                    <span> daniel-philip-johnson@gmail.com</span>
                  </div>

                  <div class="profile-card-body-item">
                    <h3>Availability</h3>
                    <p>Freelance: Available</p>
                  </div>

                  <div class="btn-group">
                    <Link className="btn-outline" to="/work">
                      View my work
                    </Link>

                    <a
                      class="btn-outline"
                      href="./assets/cv/Daniel_Johnson_Junior_Web_Developer.pdf"
                      download=""
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                      Resume
                    </a>
                  </div>
                  {/* <div class="connect">
                    <h2>Connect</h2>
                    <div class="boxes sm">
                      <div class="dev">
                        <a
                          href="https://dev.to/danielphilipjohnson"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faDev} />
                        </a>
                      </div>
                      <div class="hackerrank">
                        <a
                          href="https://www.hackerrank.com/daniel_p_johnson"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faHackerrank} />
                        </a>
                      </div>
                      <div class="codepen">
                        <a
                          href="https://codepen.io/danielphilipjohnson/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faCodepen} />
                        </a>
                      </div>
                      <div class="stack-overflow">
                        <a
                          href="https://stackoverflow.com/users/13921677/daniel-philip-johnson"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faStackOverflow} />
                        </a>
                      </div>
                      <div class="free-code-camp">
                        <a
                          href="https://www.freecodecamp.org/daniel-philip-johnson"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faFreeCodeCamp} />
                        </a>
                      </div>
                      <div class="github">
                        <a
                          href="https://github.com/danielphilipjohnson/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>

                <div class="profile-card-footer">
                  {/* <div class="github-stats">
                    <h2>Github Statistics</h2>
                    <p>
                      <a href="https://github.com/danielphilipjohnson/github-readme-stats">
                        <img
                          src="https://camo.githubusercontent.com/db37043947c98251b225e363ea8a2bdb30e2122b/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d64616e69656c7068696c69706a6f686e736f6e266c61796f75743d636f6d70616374"
                          alt="Top Langs"
                          data-canonical-src="https://github-readme-stats.vercel.app/api/top-langs/?username=danielphilipjohnson&amp;layout=compact"
                        />
                      </a>
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
            <div
              className="profile-text"
              dangerouslySetInnerHTML={{ __html: aboutInfo.html }}
            ></div>
          </div>

          <section className="alt-bio bio-section" aria-label="quick bio">
            <div className="container container-text">
              <h2 className="text-secondary">{quickBio.heading} </h2>

              <p dangerouslySetInnerHTML={{ __html: quickBio.html }}></p>
            </div>
          </section>

          <section
            className="values-missions bio-section"
            aria-label="my values and missions"
          >
            <div className="container container-text">
              <h2 className="text-secondary">{valuesMissions.heading}</h2>

              <p dangerouslySetInnerHTML={{ __html: valuesMissions.html }}></p>
            </div>
          </section>

          <section
            className="alt-bio bio-section"
            aria-label="what I do outside of programming"
          >
            <div className="container container-text">
              <h2>OUTSIDE OF PROGRAMMING </h2>
              <p>
                Although it seems like my life is entirely ruled by programming
                and computers. I do have spare time and things that I cherish. I
                love to read about psychology from both books and journals. I
                also love reading in general. Here are some books I've enjoyed
                reading right now.
              </p>

              <ul className="bio-list">
                <li>
                  <a href="https://www.amazon.co.uk/Habits-Success-Inspired-Ideas-Help-ebook/dp/B07FTQMQZM">
                    Habits for success Inspired Ideas to help you soar: Brian
                    Benson
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.co.uk/Illusion-Invincibility-Organizations-Inspired-Incas-ebook/dp/B07V3XTSDS">
                    The illusion of invincibility: Paul Williams{" "}
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.co.uk/First-20-Hours-Learn-Anything/dp/0670921912">
                    The first 20 hours: Josh Kaufman
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.co.uk/Your-Next-Thing-Matthew-Mockridge/dp/1642501417">
                    The next big thing: Matthew Mockridge
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.co.uk/Get-Done-Ways-Release-Inner/dp/1633537900">
                    GET IT DONE 31 Ways to release your inner boss: Hayley
                    Hobson
                  </a>
                </li>
              </ul>
              <p>
                In another life, I was actually for a while a semi-professional
                Fortnite player. I enjoyed playing it a lot. However, after a
                while, I started to feel a great sense of unfulfillment. I
                started, to realise just because you are good at something
                doesn't necessarily mean you should force yourself to do it. I
                still prefer anonymity for the reason I never liked to disclose
                my real identity. Despite that, I still wish to try public
                speaking at conferences. Who knows what the future holds?
              </p>
              <p>
                During my competition days, coding made me really happy. I got
                out of bed excited and, it drives my girlfriend crazy as I
                always bother her with my projects and what I had learnt. It
                still happens now. Always she sits there and tries hard to
                understand.
              </p>
              <p>
                The significant part of my life and the biggest change is my
                girlfriend Fabiola. I don't want to name her fully because I
                want her to still feel some anonymity and not feel pressured.
                With her, everything started to click for me in my programming
                career. Having someone that believes your dream so much that
                even when you feel low and down afterlife beating you. She is
                there still believing in me. She keeps my life in balance by
                forcing me to take breaks when I decide to overdo it. Also
                giving me constant encouragement to be better and quick to offer
                some pointers on what needs addressing. Really we are a great
                team.
              </p>
            </div>
          </section>

          <section
            className="values-missions bio-section"
            aria-label="my future plans"
          >
            <div className="container container-text">
              <h2 className="text-secondary">The FUTURE </h2>
              <p dangerouslySetInnerHTML={{ __html: future.html }}></p>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default About;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        about {
          aboutStats {
            imageSrc
            link
            alt
          }
          aboutInfo {
            image {
              src
              alt
            }
            html
          }
          quickBio {
            heading
            html
          }
          valuesMissions {
            heading
            html
          }
          future {
            html
          }
        }
      }
    }
  }
`;
