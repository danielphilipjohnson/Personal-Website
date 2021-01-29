import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import SEO from "../component/Seo";
import Header from "../component/layout/Header";

import Layout from "../component/layout/Layout";

import profile from "../images/profile.jpg";
import banner from "../images/linkedinBanner.png";

import "./styles/about.css";

const About = ({ location }) => {
  const {
    site: {
      siteMetadata: {
        about: { aboutStats, aboutInfo, quickBio, valuesMissions, future },
      },
    },
  } = useStaticQuery(siteQuery);

  const setToday = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(Date.now());
    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

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
                    alt="background image of freecodecamp"
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
                      <a class="header-badge" target="_blank" href={stat.link}>
                        <img alt={stat.alt} src={stat.imageSrc} />
                      </a>
                    );
                  })}
                  <div class="profile-card-body-item">
                    <h3>Occupation</h3>
                    <h4>React Developer</h4>
                  </div>

                  {/* <div className="about-stats">
                    <h3>{setToday()} by Daniel Johnson</h3>
                    <p></p>
                  </div> */}

                  <div class="profile-card-body-item">
                    <h3>What I use</h3>
                    <p>
                      🖥️
                      <span> Kubuntu 20.04 and Manjaro 20.0.3</span>
                    </p>
                  </div>
                  <div class="profile-card-body-item">
                    <h3>Graduated</h3>
                    <h4>🎓 Bsc Psychology | University of Plymouth 🏫</h4>
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
                  {/* <div class="connect">
              <h2>Connect</h2>
              <div class="boxes sm">
                <div class="dev">
                  <a
                    href="https://dev.to/danielphilipjohnson"
                    target="_blank"
                    rel="noopener"
                  >
                    <i class="fab fa-dev"></i>
                  </a>
                </div>
                <div class="hackerrank">
                  <a
                    href="https://www.hackerrank.com/daniel_p_johnson"
                    target="_blank"
                    rel="noopener"
                  >
                    <i class="fab fa-hackerrank"></i>
                  </a>
                </div>
                <div class="codepen">
                  <a
                    href="https://codepen.io/danielphilipjohnson/"
                    target="_blank"
                    rel="noopener"
                  >
                    <i class="fab fa-codepen"></i>
                  </a>
                </div>
                <div class="stack-overflow">
                  <a
                    href="https://stackoverflow.com/users/13921677/daniel-philip-johnson"
                    target="_blank"
                    rel="noopener"
                  >
                    <i class="fab fa-stack-overflow"></i>
                  </a>
                </div>
                <div class="free-code-camp">
                  <a
                    href="https://www.freecodecamp.org/daniel-philip-johnson"
                    target="_blank"
                    rel="noopener"
                  >
                    <i class="fab fa-free-code-camp"></i>
                  </a>
                </div>
                <div class="github">
                  <a
                    href="https://github.com/danielphilipjohnson/"
                    target="_blank"
                    rel="noopener"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div> */}
                </div>
              </div>

              {/* {
                <img
                  className="img-fluid"
                  src={aboutInfo.image.src}
                  alt={aboutInfo.image.alt}
                />
              } */}
            </div>
            <div>
              <div className="profile-text">
                {aboutInfo.text.map((txt) => {
                  return <p>{txt}</p>;
                })}
              </div>
              <div className="used-technologies">
                <h3>Technologies I use</h3>
                <p>
                  The following is a selection of my tools that I use for my
                  professional work.
                </p>
                <div className="icons">
                  <img
                    className="img-fluid"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0REMDAzMTt9Cgkuc3Qxe2ZpbGw6I0MzMDAyRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxMjUsMzAgMTI1LDMwIDEyNSwzMCAzMS45LDYzLjIgNDYuMSwxODYuMyAxMjUsMjMwIDEyNSwyMzAgMTI1LDIzMCAyMDMuOSwxODYuMyAyMTguMSw2My4yIAkiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTI1LDMwIDEyNSw1Mi4yIDEyNSw1Mi4xIDEyNSwxNTMuNCAxMjUsMTUzLjQgMTI1LDIzMCAxMjUsMjMwIDIwMy45LDE4Ni4zIDIxOC4xLDYzLjIgMTI1LDMwIAkiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQoJCUwxMjUsNTIuMXogTTE0MiwxMzUuNEgxMDhsMTctNDAuOUwxNDIsMTM1LjR6Ii8+CjwvZz4KPC9zdmc+Cg=="
                    alt="Angular"
                  />
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzJfMV8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0OTAuNiA0MzYuOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkwLjYgNDM2Ljk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNjFEQUZCO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDkwLjYsMjE4LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40YzE0LjQtNjMuNiw4LTExNC4yLTIwLjItMTMwLjRjLTYuNS0zLjgtMTQuMS01LjYtMjIuNC01LjZ2MjIuMwoJCWM0LjYsMCw4LjMsMC45LDExLjQsMi42YzEzLjYsNy44LDE5LjUsMzcuNSwxNC45LDc1LjdjLTEuMSw5LjQtMi45LDE5LjMtNS4xLDI5LjRjLTE5LjYtNC44LTQxLTguNS02My41LTEwLjkKCQljLTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MGMzMi42LTMwLjMsNjMuMi00Ni45LDg0LTQ2LjlWMGwwLDBjLTI3LjUsMC02My41LDE5LjYtOTkuOSw1My42Yy0zNi40LTMzLjgtNzIuNC01My4yLTk5LjktNTMuMgoJCXYyMi4zYzIwLjcsMCw1MS40LDE2LjUsODQsNDYuNmMtMTQsMTQuNy0yOCwzMS40LTQxLjMsNDkuOWMtMjIuNiwyLjQtNDQsNi4xLTYzLjYsMTFjLTIuMy0xMC00LTE5LjctNS4yLTI5CgkJYy00LjctMzguMiwxLjEtNjcuOSwxNC42LTc1LjhjMy0xLjgsNi45LTIuNiwxMS41LTIuNlYwLjVsMCwwYy04LjQsMC0xNiwxLjgtMjIuNiw1LjZjLTI4LjEsMTYuMi0zNC40LDY2LjctMTkuOSwxMzAuMQoJCUM0MC41LDE1NS40LDAsMTg2LjEsMCwyMTguNWMwLDMyLjUsNDAuNyw2My4zLDEwMy4xLDgyLjRjLTE0LjQsNjMuNi04LDExNC4yLDIwLjIsMTMwLjRjNi41LDMuOCwxNC4xLDUuNiwyMi41LDUuNgoJCWMyNy41LDAsNjMuNS0xOS42LDk5LjktNTMuNmMzNi40LDMzLjgsNzIuNCw1My4yLDk5LjksNTMuMmM4LjQsMCwxNi0xLjgsMjIuNi01LjZjMjguMS0xNi4yLDM0LjQtNjYuNywxOS45LTEzMC4xCgkJQzQ1MC4xLDI4MS43LDQ5MC42LDI1MC45LDQ5MC42LDIxOC41eiBNMzYwLjQsMTUxLjhjLTMuNywxMi45LTguMywyNi4yLTEzLjUsMzkuNWMtNC4xLTgtOC40LTE2LTEzLjEtMjQKCQljLTQuNi04LTkuNS0xNS44LTE0LjQtMjMuNEMzMzMuNiwxNDYsMzQ3LjMsMTQ4LjYsMzYwLjQsMTUxLjh6IE0zMTQuNiwyNTguM2MtNy44LDEzLjUtMTUuOCwyNi4zLTI0LjEsMzguMmMtMTQuOSwxLjMtMzAsMi00NS4yLDIKCQljLTE1LjEsMC0zMC4yLTAuNy00NS0xLjljLTguMy0xMS45LTE2LjQtMjQuNi0yNC4yLTM4Yy03LjYtMTMuMS0xNC41LTI2LjQtMjAuOC0zOS44YzYuMi0xMy40LDEzLjItMjYuOCwyMC43LTM5LjkKCQljNy44LTEzLjUsMTUuOC0yNi4zLDI0LjEtMzguMmMxNC45LTEuMywzMC0yLDQ1LjItMmMxNS4xLDAsMzAuMiwwLjcsNDUsMS45YzguMywxMS45LDE2LjQsMjQuNiwyNC4yLDM4CgkJYzcuNiwxMy4xLDE0LjUsMjYuNCwyMC44LDM5LjhDMzI5LDIzMS44LDMyMi4xLDI0NS4yLDMxNC42LDI1OC4zeiBNMzQ2LjksMjQ1LjNjNS40LDEzLjQsMTAsMjYuOCwxMy44LDM5LjgKCQljLTEzLjEsMy4yLTI2LjksNS45LTQxLjIsOGM0LjktNy43LDkuOC0xNS42LDE0LjQtMjMuN0MzMzguNSwyNjEuNCwzNDIuOCwyNTMuMywzNDYuOSwyNDUuM3ogTTI0NS41LDM1MgoJCWMtOS4zLTkuNi0xOC42LTIwLjMtMjcuOC0zMmM5LDAuNCwxOC4yLDAuNywyNy41LDAuN2M5LjQsMCwxOC43LTAuMiwyNy44LTAuN0MyNjQsMzMxLjcsMjU0LjcsMzQyLjQsMjQ1LjUsMzUyeiBNMTcxLjEsMjkzLjEKCQljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOWMzLjctMTIuOSw4LjMtMjYuMiwxMy41LTM5LjVjNC4xLDgsOC40LDE2LDEzLjEsMjRTMTY2LjIsMjg1LjUsMTcxLjEsMjkzLjF6IE0yNDUsODUKCQljOS4zLDkuNiwxOC42LDIwLjMsMjcuOCwzMmMtOS0wLjQtMTguMi0wLjctMjcuNS0wLjdjLTkuNCwwLTE4LjcsMC4yLTI3LjgsMC43QzIyNi41LDEwNS4zLDIzNS44LDk0LjYsMjQ1LDg1eiBNMTcxLDE0My45CgkJYy00LjksNy43LTkuOCwxNS42LTE0LjQsMjMuN2MtNC42LDgtOC45LDE2LTEzLDI0Yy01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOEMxNDIuOSwxNDguNywxNTYuNywxNDYsMTcxLDE0My45eiBNODAuNSwyNjkuMQoJCWMtMzUuNC0xNS4xLTU4LjMtMzQuOS01OC4zLTUwLjZzMjIuOS0zNS42LDU4LjMtNTAuNmM4LjYtMy43LDE4LTcsMjcuNy0xMC4xYzUuNywxOS42LDEzLjIsNDAsMjIuNSw2MC45CgkJYy05LjIsMjAuOC0xNi42LDQxLjEtMjIuMiw2MC42Qzk4LjYsMjc2LjIsODkuMiwyNzIuOCw4MC41LDI2OS4xeiBNMTM0LjMsNDEyYy0xMy42LTcuOC0xOS41LTM3LjUtMTQuOS03NS43CgkJYzEuMS05LjQsMi45LTE5LjMsNS4xLTI5LjRjMTkuNiw0LjgsNDEsOC41LDYzLjUsMTAuOWMxMy41LDE4LjUsMjcuNSwzNS4zLDQxLjYsNTBjLTMyLjYsMzAuMy02My4yLDQ2LjktODQsNDYuOQoJCUMxNDEuMSw0MTQuNiwxMzcuMyw0MTMuNywxMzQuMyw0MTJ6IE0zNzEuNSwzMzUuOGM0LjcsMzguMi0xLjEsNjcuOS0xNC42LDc1LjhjLTMsMS44LTYuOSwyLjYtMTEuNSwyLjZjLTIwLjcsMC01MS40LTE2LjUtODQtNDYuNgoJCWMxNC0xNC43LDI4LTMxLjQsNDEuMy00OS45YzIyLjYtMi40LDQ0LTYuMSw2My42LTExQzM2OC42LDMxNi44LDM3MC40LDMyNi41LDM3MS41LDMzNS44eiBNNDEwLDI2OS4xYy04LjYsMy43LTE4LDctMjcuNywxMC4xCgkJYy01LjctMTkuNi0xMy4yLTQwLTIyLjUtNjAuOWM5LjItMjAuOCwxNi42LTQxLjEsMjIuMi02MC42YzkuOSwzLjEsMTkuMyw2LjUsMjguMSwxMC4yYzM1LjQsMTUuMSw1OC4zLDM0LjksNTguMyw1MC42CgkJQzQ2OC4zLDIzNC4yLDQ0NS40LDI1NC4xLDQxMCwyNjkuMXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDUuMSwwLjRMMTQ1LjEsMC40TDE0NS4xLDAuNHoiLz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjI0NS4yIiBjeT0iMjE4LjUiIHI9IjQ1LjciLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNDQuOCwwLjFMMzQ0LjgsMC4xTDM0NC44LDAuMXoiLz4KPC9nPgo8L3N2Zz4K"
                    alt="React"
                  />
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU2cHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMjgsMCBDNTcuMzA3NTk4MSwwIDAsNTcuMzA3Mzc0IDAsMTI4IEMwLDE5OC42OTI4NSA1Ny4zMDc4MjIxLDI1NiAxMjgsMjU2IEMxOTguNjkyODUsMjU2IDI1NiwxOTguNjkyNjI2IDI1NiwxMjggQzI1Niw1Ny4zMDczNzQgMTk4LjY5Mjg1LDAgMTI4LDAgWiBNMjcuNTAzOTczLDEyOS4zMzQzMTMgTDEyNi42NjU0NjMsMjI4LjQ5NjAyNyBDNzIuMjE0NDUxMiwyMjcuNzg2MzA1IDI4LjIxMzQ3MTEsMTgzLjc4NTMyNSAyNy41MDM5NzMsMTI5LjMzNDMxMyBaIE0xNTAuNDk2MjY1LDIyNS45ODMzMjQgTDMwLjAxNjY3NjEsMTA1LjUwMzczNSBDNDAuMjMyODIxNiw2MC44MjMyNzY2IDgwLjIyMjM0ODIsMjcuNDg3MTcwOSAxMjgsMjcuNDg3MTcwOSBDMTYxLjM5NzQ4OSwyNy40ODcxNzA5IDE5MC45ODQ5MjcsNDMuNzgwMDg4MSAyMDkuMjYyNzM2LDY4Ljg0NjQwNzUgTDE5NS4zNDYwODksODEuMTI1ODU1IEMxODAuNTE5NjYyLDU5Ljg2Mzc2MjcgMTU1Ljg4NjYxNCw0NS45NDg2ODM1IDEyOCw0NS45NDg2ODM1IEM5Mi40OTQ4NTA4LDQ1Ljk0ODY4MzUgNjIuMjU5NTIzLDY4LjUwMTE3OTYgNTAuODMxMTU5NiwxMDAuMDYxNjM2IEwxNTUuOTM4NTg4LDIwNS4xNjkwNjQgQzE4MS40NjM5NDIsMTk1LjkyNTY1MSAyMDEuMDk1MTA3LDE3NC4zNzg1OTQgMjA3LjY2OTg5NCwxNDcuNjkyMzI1IEwxNjQuMTAyNjMzLDE0Ny42OTIzMjUgTDE2NC4xMDI2MzMsMTI4LjAwMDIyNCBMMjEwLjA1MTMxNywxMjguMDAwMjI0IEwyMTAuMDUxMzE3LDEyNy45OTk3NzYgTDIyOC41MTI4MjksMTI3Ljk5OTc3NiBMMjI4LjUxMjgyOSwxMjggQzIyOC41MTI4MjksMTc1Ljc3NzY1MiAxOTUuMTc2OTQ3LDIxNS43NjcxNzggMTUwLjQ5NjI2NSwyMjUuOTgzMzI0IFoiIGZpbGw9IiM3NDRDOUUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K"
                    alt="GatsbyJS"
                  />
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJHcmFwaFFMX0xvZ28iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDAwIDQwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDAwIDQwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGc+DQoJCQkNCgkJCQk8cmVjdCB4PSIxMjIiIHk9Ii0wLjQiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjg2NiAtMC41IDAuNSAtMC44NjYgMTYzLjMxOTYgMzYzLjMxMzYpIiBmaWxsPSIjRTUzNUFCIiB3aWR0aD0iMTYuNiIgaGVpZ2h0PSIzMjAuMyIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjM5LjgiIHk9IjI3Mi4yIiBmaWxsPSIjRTUzNUFCIiB3aWR0aD0iMzIwLjMiIGhlaWdodD0iMTYuNiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCQ0KCQkJCTxyZWN0IHg9IjM3LjkiIHk9IjMxMi4yIiB0cmFuc2Zvcm09Im1hdHJpeCgtMC44NjYgLTAuNSAwLjUgLTAuODY2IDgzLjA2OTMgNjYzLjM0MDkpIiBmaWxsPSIjRTUzNUFCIiB3aWR0aD0iMTg1IiBoZWlnaHQ9IjE2LjYiLz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQkNCgkJCQk8cmVjdCB4PSIxNzcuMSIgeT0iNzEuMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuODY2IC0wLjUgMC41IC0wLjg2NiA0NjMuMzQwOSAyODMuMDY5MykiIGZpbGw9IiNFNTM1QUIiIHdpZHRoPSIxODUiIGhlaWdodD0iMTYuNiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCQ0KCQkJCTxyZWN0IHg9IjEyMi4xIiB5PSItMTMiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjUgLTAuODY2IDAuODY2IC0wLjUgMTI2Ljc5MDMgMjMyLjEyMjEpIiBmaWxsPSIjRTUzNUFCIiB3aWR0aD0iMTYuNiIgaGVpZ2h0PSIxODUiLz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQkNCgkJCQk8cmVjdCB4PSIxMDkuNiIgeT0iMTUxLjYiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjUgLTAuODY2IDAuODY2IC0wLjUgMjY2LjA4MjggNDczLjM3NjYpIiBmaWxsPSIjRTUzNUFCIiB3aWR0aD0iMzIwLjMiIGhlaWdodD0iMTYuNiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjUyLjUiIHk9IjEwNy41IiBmaWxsPSIjRTUzNUFCIiB3aWR0aD0iMTYuNiIgaGVpZ2h0PSIxODUiLz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQk8cmVjdCB4PSIzMzAuOSIgeT0iMTA3LjUiIGZpbGw9IiNFNTM1QUIiIHdpZHRoPSIxNi42IiBoZWlnaHQ9IjE4NSIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCQ0KCQkJCTxyZWN0IHg9IjI2Mi40IiB5PSIyNDAuMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNSAtMC44NjYgMC44NjYgLTAuNSAxMjYuNzk1MyA3MTQuMjg3NSkiIGZpbGw9IiNFNTM1QUIiIHdpZHRoPSIxNC41IiBoZWlnaHQ9IjE2MC45Ii8+DQoJCTwvZz4NCgk8L2c+DQoJPHBhdGggZmlsbD0iI0U1MzVBQiIgZD0iTTM2OS41LDI5Ny45Yy05LjYsMTYuNy0zMSwyMi40LTQ3LjcsMTIuOGMtMTYuNy05LjYtMjIuNC0zMS0xMi44LTQ3LjdjOS42LTE2LjcsMzEtMjIuNCw0Ny43LTEyLjgNCgkJQzM3My41LDI1OS45LDM3OS4yLDI4MS4yLDM2OS41LDI5Ny45Ii8+DQoJPHBhdGggZmlsbD0iI0U1MzVBQiIgZD0iTTkwLjksMTM3Yy05LjYsMTYuNy0zMSwyMi40LTQ3LjcsMTIuOGMtMTYuNy05LjYtMjIuNC0zMS0xMi44LTQ3LjdjOS42LTE2LjcsMzEtMjIuNCw0Ny43LTEyLjgNCgkJQzk0LjgsOTksMTAwLjUsMTIwLjMsOTAuOSwxMzciLz4NCgk8cGF0aCBmaWxsPSIjRTUzNUFCIiBkPSJNMzAuNSwyOTcuOWMtOS42LTE2LjctMy45LTM4LDEyLjgtNDcuN2MxNi43LTkuNiwzOC0zLjksNDcuNywxMi44YzkuNiwxNi43LDMuOSwzOC0xMi44LDQ3LjcNCgkJQzYxLjQsMzIwLjMsNDAuMSwzMTQuNiwzMC41LDI5Ny45Ii8+DQoJPHBhdGggZmlsbD0iI0U1MzVBQiIgZD0iTTMwOS4xLDEzN2MtOS42LTE2LjctMy45LTM4LDEyLjgtNDcuN2MxNi43LTkuNiwzOC0zLjksNDcuNywxMi44YzkuNiwxNi43LDMuOSwzOC0xMi44LDQ3LjcNCgkJQzM0MC4xLDE1OS40LDMxOC43LDE1My43LDMwOS4xLDEzNyIvPg0KCTxwYXRoIGZpbGw9IiNFNTM1QUIiIGQ9Ik0yMDAsMzk1LjhjLTE5LjMsMC0zNC45LTE1LjYtMzQuOS0zNC45YzAtMTkuMywxNS42LTM0LjksMzQuOS0zNC45YzE5LjMsMCwzNC45LDE1LjYsMzQuOSwzNC45DQoJCUMyMzQuOSwzODAuMSwyMTkuMywzOTUuOCwyMDAsMzk1LjgiLz4NCgk8cGF0aCBmaWxsPSIjRTUzNUFCIiBkPSJNMjAwLDc0Yy0xOS4zLDAtMzQuOS0xNS42LTM0LjktMzQuOWMwLTE5LjMsMTUuNi0zNC45LDM0LjktMzQuOWMxOS4zLDAsMzQuOSwxNS42LDM0LjksMzQuOQ0KCQlDMjM0LjksNTguNCwyMTkuMyw3NCwyMDAsNzQiLz4NCjwvZz4NCjwvc3ZnPg0K"
                    alt="GraphQL"
                  />
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI3MCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI4MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48ZyBmaWxsPSIjOENDODRCIj48cGF0aCBkPSJNMTE2LjUwNCAzLjU4YzYuOTYyLTMuOTg1IDE2LjAzLTQuMDAzIDIyLjk4NiAwIDM0Ljk5NSAxOS43NzQgNzAuMDAxIDM5LjUxNyAxMDQuOTkgNTkuMzAzIDYuNTgxIDMuNzA3IDEwLjk4MyAxMS4wMzEgMTAuOTE2IDE4LjYxNHYxMTguOTY4Yy4wNDkgNy44OTctNC43ODggMTUuMzk2LTExLjczMSAxOS4wMTktMzQuODggMTkuNjY1LTY5Ljc0MiAzOS4zNTQtMTA0LjYxNiA1OS4wMTktNy4xMDYgNC4wNjMtMTYuMzU2IDMuNzUtMjMuMjQtLjY0Ni0xMC40NTctNi4wNjItMjAuOTMyLTEyLjA5NC0zMS4zOS0xOC4xNS0yLjEzNy0xLjI3NC00LjU0Ni0yLjI4OC02LjA1NS00LjM2IDEuMzM0LTEuNzk4IDMuNzE5LTIuMDIyIDUuNjU3LTIuODA3IDQuMzY1LTEuMzg4IDguMzc0LTMuNjE2IDEyLjM4NC01Ljc3OCAxLjAxNC0uNjk0IDIuMjUyLS40MjggMy4yMjQuMTkzIDguOTQyIDUuMTI3IDE3LjgwNSAxMC40MDMgMjYuNzc3IDE1LjQ4MSAxLjkxNCAxLjEwNSAzLjg1Mi0uMzYyIDUuNDg4LTEuMjc0IDM0LjIyOC0xOS4zNDUgNjguNDk4LTM4LjYxNyAxMDIuNzItNTcuOTY4IDEuMjY4LS42MSAxLjk2OS0xLjk1NiAxLjg2Ni0zLjM0NS4wMjQtMzkuMjQ1LjAwNi03OC40OTcuMDEyLTExNy43NDIuMTQ1LTEuNTc2LS43NjctMy4wMjUtMi4xOTItMy42Ny0zNC43NTktMTkuNTc1LTY5LjUtMzkuMTgtMTA0LjI1My01OC43NmEzLjYyMSAzLjYyMSAwIDAgMC00LjA5NC0uMDA2QzkxLjIgMzkuMjU3IDU2LjQ2NSA1OC44OCAyMS43MTIgNzguNDU0Yy0xLjQyLjY0Ni0yLjM3MyAyLjA3MS0yLjIwNCAzLjY1My4wMDYgMzkuMjQ1IDAgNzguNDk3IDAgMTE3Ljc0OGEzLjMyOSAzLjMyOSAwIDAgMCAxLjg5IDMuMzAzYzkuMjc0IDUuMjU5IDE4LjU2IDEwLjQ4MSAyNy44NCAxNS43MjIgNS4yMjggMi44MTQgMTEuNjQ3IDQuNDg2IDE3LjQwNyAyLjMzIDUuMDgzLTEuODIzIDguNjQ2LTcuMDEgOC41NDktMTIuNDA3LjA0OC0zOS4wMTYtLjAyNC03OC4wMzguMDM2LTExNy4wNDgtLjEyNy0xLjczMiAxLjUxNi0zLjE2MyAzLjItMyA0LjQ1Ni0uMDMgOC45MTgtLjA2IDEzLjM3NC4wMTIgMS44Ni0uMDQyIDMuMTQgMS44MjMgMi45MSAzLjU2OC0uMDE4IDM5LjI2My4wNDggNzguNTI3LS4wMyAxMTcuNzkuMDEyIDEwLjQ2NC00LjI4NyAyMS44NS0xMy45NjYgMjYuOTctMTEuOTI0IDYuMTc3LTI2LjY2MiA0Ljg2Ny0zOC40NDItMS4wNTYtMTAuMTk4LTUuMDktMTkuOTMtMTEuMDk3LTI5Ljk0Ny0xNi41NUM1LjM2OCAyMTUuODg2LjU1NSAyMDguMzU3LjYwNCAyMDAuNDY2VjgxLjQ5N2MtLjA3My03Ljc0IDQuNTA0LTE1LjE5NyAxMS4yOS0xOC44NUM0Ni43NjggNDIuOTY2IDgxLjYzNiAyMy4yNyAxMTYuNTA0IDMuNTh6Ii8+PHBhdGggZD0iTTE0Ni45MjggODUuOTljMTUuMjEtLjk3OSAzMS40OTMtLjU4IDQ1LjE4IDYuOTEzIDEwLjU5NyA1Ljc0MiAxNi40NzIgMTcuNzkzIDE2LjY1OSAyOS41NjYtLjI5NiAxLjU4OC0xLjk1NiAyLjQ2NC0zLjQ3MiAyLjM1NS00LjQxMy0uMDA2LTguODI3LjA2LTEzLjI0LS4wMy0xLjg3Mi4wNzItMi45Ni0xLjY1NC0zLjE5NS0zLjMwOS0xLjI2OC01LjYzMy00LjM0LTExLjIxMi05LjY0Mi0xMy45MjktOC4xMzktNC4wNzUtMTcuNTc2LTMuODctMjYuNDUxLTMuNzg1LTYuNDc5LjM0NC0xMy40NDYuOTA1LTE4LjkzNSA0LjcxNS00LjIxNCAyLjg4Ni01LjQ5NCA4LjcxMi0zLjk5IDEzLjQwNCAxLjQxOCAzLjM2OSA1LjMwNyA0LjQ1NiA4LjQ4OSA1LjQ1OCAxOC4zMyA0Ljc5NCAzNy43NTQgNC4zMTcgNTUuNzM0IDEwLjYyNiA3LjQ0NCAyLjU3MiAxNC43MjYgNy41NzIgMTcuMjc0IDE1LjM2NiAzLjMzMyAxMC40NDYgMS44NzIgMjIuOTMyLTUuNTYgMzEuMzE4LTYuMDI3IDYuOTAxLTE0LjgwNSAxMC42NTctMjMuNTYgMTIuNjk3LTExLjY0NyAyLjU5Ny0yMy43MzQgMi42NjMtMzUuNTYyIDEuNTEtMTEuMTIyLTEuMjY4LTIyLjY5Ni00LjE5LTMxLjI4Mi0xMS43NjgtNy4zNDItNi4zNzUtMTAuOTI4LTE2LjMwOC0xMC41NzItMjUuODk1LjA4NS0xLjYxOSAxLjY5Ny0yLjc0OCAzLjI0OC0yLjYxNSA0LjQ0NC0uMDM2IDguODg4LS4wNDggMTMuMzMyLjAwNiAxLjc3NS0uMTI3IDMuMDkxIDEuNDA3IDMuMTgyIDMuMDguODIgNS4zNjcgMi44MzcgMTEgNy41MTcgMTQuMTgyIDkuMDMyIDUuODI3IDIwLjM2NSA1LjQyOCAzMC43MDcgNS41OTEgOC41NjgtLjM4IDE4LjE4Ni0uNDk1IDI1LjE3OC02LjE1OCAzLjY4OS0zLjIzIDQuNzgyLTguNjM0IDMuNzg1LTEzLjI4My0xLjA4LTMuOTI1LTUuMTg2LTUuNzU0LTguNzEyLTYuOTUtMTguMDk1LTUuNzI0LTM3LjczNi0zLjY0Ny01NS42NTYtMTAuMTItNy4yNzUtMi41NzEtMTQuMzEtNy40MzItMTcuMTA1LTE0LjkwNi0zLjktMTAuNTc4LTIuMTEzLTIzLjY2MiA2LjA5OC0zMS43NjUgOC4wMDYtOC4wNiAxOS41NjMtMTEuMTY0IDMwLjU1MS0xMi4yNzV6Ii8+PC9nPjwvc3ZnPg=="
                    alt="Node.js"
                  />

                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KCTx0aXRsZT5IVE1MNSBMb2dvPC90aXRsZT4KCTxwYXRoIGQ9Ik0xMDguNCAwaDIzdjIyLjhoMjEuMlYwaDIzdjY5aC0yM1Y0NmgtMjF2MjNoLTIzLjJNMjA2IDIzaC0yMC4zVjBoNjMuN3YyM0gyMjl2NDZoLTIzTTI1OS41IDBoMjQuMWwxNC44IDI0LjNMMzEzLjIgMGgyNC4xdjY5aC0yM1YzNC44bC0xNi4xIDI0LjhsLTE2LjEtMjQuOHYzNC4yaC0yMi42TTM0OC43IDBoMjN2NDYuMmgzMi42VjY5aC01NS42Ii8+Cgk8cGF0aCBmaWxsPSIjZTQ0ZDI2IiBkPSJNMTA3LjYgNDcxbC0zMy0zNzAuNGgzNjIuOGwtMzMgMzcwLjJMMjU1LjcgNTEyIi8+Cgk8cGF0aCBmaWxsPSIjZjE2NTI5IiBkPSJNMjU2IDQ4MC41VjEzMUg0MDQuM0wzNzYgNDQ3Ii8+Cgk8cGF0aCBmaWxsPSIjZWJlYmViIiBkPSJNMTQyIDE3Ni4zaDExNHY0NS40aC02NC4ybDQuMiA0Ni41aDYwdjQ1LjNIMTU0LjRNMTU2LjQgMzM2LjNIMjAybDMuMiAzNi4zIDUwLjggMTMuNnY0Ny40bC05My4yLTI2Ii8+Cgk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzY5LjYgMTc2LjNIMjU1Ljh2NDUuNGgxMDkuNk0zNjEuMyAyNjguMkgyNTUuOHY0NS40aDU2bC01LjMgNTktNTAuNyAxMy42djQ3LjJsOTMtMjUuOCIvPgo8L3N2Zz4="
                    alt="HTML5"
                  />
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTAyLjM3MTZtbSIKICAgaGVpZ2h0PSIxNDQuNDk3NzdtbSIKICAgdmlld0JveD0iMCAwIDM2Mi43MzQwMSA1MTEuOTk5OTgiCiAgIGlkPSJzdmczNDc2IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJDU1MzLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczM0NzgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuMzUiCiAgICAgaW5rc2NhcGU6Y3g9IjE4MS4zNjciCiAgICAgaW5rc2NhcGU6Y3k9IjI1NiIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzNjYiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNzA0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyNyIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTM0ODEiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkNhbHF1ZSAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkzLjYzMywtMjc2LjM2MjIpIj4KICAgIDxnCiAgICAgICBpZD0iZzMwMTMiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTksMjc2LjM2MjIpIj4KICAgICAgPHBvbHlnb24KICAgICAgICAgaWQ9InBvbHlnb24yOTg5IgogICAgICAgICBwb2ludHM9IjQzNy4zNjcsMTAwLjYyIDQwNC4zMjEsNDcwLjgxOSAyNTUuNzc4LDUxMiAxMDcuNjQ0LDQ3MC44NzcgNzQuNjMzLDEwMC42MiAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMyNjRkZTQiIC8+CiAgICAgIDxwb2x5Z29uCiAgICAgICAgIGlkPSJwb2x5Z29uMjk5MSIKICAgICAgICAgcG9pbnRzPSIzNzYuMDMsNDQ3LjI0NiA0MDQuMjcsMTMwLjg5NCAyNTYsMTMwLjg5NCAyNTYsNDgwLjUyMyAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMyOTY1ZjEiIC8+CiAgICAgIDxwb2x5Z29uCiAgICAgICAgIGlkPSJwb2x5Z29uMjk5MyIKICAgICAgICAgcG9pbnRzPSIxNTAuMzEsMjY4LjIxNyAxNTQuMzgsMzEzLjYyNyAyNTYsMzEzLjYyNyAyNTYsMjY4LjIxNyAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNlYmViZWIiIC8+CiAgICAgIDxwb2x5Z29uCiAgICAgICAgIGlkPSJwb2x5Z29uMjk5NSIKICAgICAgICAgcG9pbnRzPSIyNTYsMTc2LjMwNSAyNTUuODQzLDE3Ni4zMDUgMTQyLjEzMiwxNzYuMzA1IDE0Ni4yNiwyMjEuNzE2IDI1NiwyMjEuNzE2ICIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ViZWJlYiIgLz4KICAgICAgPHBvbHlnb24KICAgICAgICAgaWQ9InBvbHlnb24yOTk3IgogICAgICAgICBwb2ludHM9IjI1Niw0MzMuMzk5IDI1NiwzODYuMTUzIDI1NS44MDEsMzg2LjIwNiAyMDUuMjI3LDM3Mi41NSAyMDEuOTk0LDMzNi4zMzMgMTc3LjQxOSwzMzYuMzMzIDE1Ni40MDksMzM2LjMzMyAxNjIuNzcxLDQwNy42MzQgMjU1Ljc5MSw0MzMuNDU3ICIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ViZWJlYiIgLz4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGgyOTk5IgogICAgICAgICBkPSJtIDE2MCwwIDU1LDAgMCwyMyAtMzIsMCAwLDIzIDMyLDAgMCwyMyAtNTUsMCB6IgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDMwMDEiCiAgICAgICAgIGQ9Im0gMjI2LDAgNTUsMCAwLDIwIC0zMiwwIDAsNCAzMiwwIDAsNDYgLTU1LDAgMCwtMjEgMzIsMCAwLC00IC0zMiwwIHoiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoMzAwMyIKICAgICAgICAgZD0ibSAyOTIsMCA1NSwwIDAsMjAgLTMyLDAgMCw0IDMyLDAgMCw0NiAtNTUsMCAwLC0yMSAzMiwwIDAsLTQgLTMyLDAgeiIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgICAgPHBvbHlnb24KICAgICAgICAgaWQ9InBvbHlnb24zMDA1IgogICAgICAgICBwb2ludHM9IjMxMS43NjEsMzEzLjYyNyAzMDYuNDksMzcyLjUyMSAyNTUuODQzLDM4Ni4xOTEgMjU1Ljg0Myw0MzMuNDM1IDM0OC45MzcsNDA3LjYzNCAzNDkuNjIsMzk5Ljk2MiAzNjAuMjkxLDI4MC40MTEgMzYxLjM5OSwyNjguMjE3IDM2OS41OTcsMTc2LjMwNSAyNTUuODQzLDE3Ni4zMDUgMjU1Ljg0MywyMjEuNzE2IDMxOS44MzEsMjIxLjcxNiAzMTUuNjk5LDI2OC4yMTcgMjU1Ljg0MywyNjguMjE3IDI1NS44NDMsMzEzLjYyNyAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"
                    alt="CSS3"
                  />
                  <img
                    className="img-fluid"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MzAgNjMwIj4KPHJlY3Qgd2lkdGg9IjYzMCIgaGVpZ2h0PSI2MzAiIGZpbGw9IiNmN2RmMWUiLz4KPHBhdGggZD0ibTQyMy4yIDQ5Mi4xOWMxMi42OSAyMC43MiAyOS4yIDM1Ljk1IDU4LjQgMzUuOTUgMjQuNTMgMCA0MC4yLTEyLjI2IDQwLjItMjkuMiAwLTIwLjMtMTYuMS0yNy40OS00My4xLTM5LjNsLTE0LjgtNi4zNWMtNDIuNzItMTguMi03MS4xLTQxLTcxLjEtODkuMiAwLTQ0LjQgMzMuODMtNzguMiA4Ni43LTc4LjIgMzcuNjQgMCA2NC43IDEzLjEgODQuMiA0Ny40bC00Ni4xIDI5LjZjLTEwLjE1LTE4LjItMjEuMS0yNS4zNy0zOC4xLTI1LjM3LTE3LjM0IDAtMjguMzMgMTEtMjguMzMgMjUuMzcgMCAxNy43NiAxMSAyNC45NSAzNi40IDM1Ljk1bDE0LjggNi4zNGM1MC4zIDIxLjU3IDc4LjcgNDMuNTYgNzguNyA5MyAwIDUzLjMtNDEuODcgODIuNS05OC4xIDgyLjUtNTQuOTggMC05MC41LTI2LjItMTA3Ljg4LTYwLjU0em0tMjA5LjEzIDUuMTNjOS4zIDE2LjUgMTcuNzYgMzAuNDUgMzguMSAzMC40NSAxOS40NSAwIDMxLjcyLTcuNjEgMzEuNzItMzcuMnYtMjAxLjNoNTkuMnYyMDIuMWMwIDYxLjMtMzUuOTQgODkuMi04OC40IDg5LjItNDcuNCAwLTc0Ljg1LTI0LjUzLTg4LjgxLTU0LjA3NXoiLz4KPC9zdmc+"
                    alt="JavaScript"
                  />
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDYzMCA2MzAiPgo8IS0tClRoZSBNSVQgTGljZW5zZSAoTUlUKQoKQ29weXJpZ2h0IChjKSAyMDE1IFJlbW8gSC4gSmFuc2VuIDxyZW1vLmphbnNlbkB3b2xrc29mdHdhcmUuY29tPgoKUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weQpvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAiU29mdHdhcmUiKSwgdG8gZGVhbAppbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzCnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwKY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzCmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6CgpUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbgphbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4KClRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAiQVMgSVMiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SCklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLApGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUKQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUgpMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLApPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOClRIRSBTT0ZUV0FSRS4KLS0+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDYzMC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiMwMDdBQ0MiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0wIDMxNTAgbDAgLTMxNTAgMzE1MCAwIDMxNTAgMCAwIDMxNTAgMCAzMTUwIC0zMTUwIDAgLTMxNTAgMCAwCi0zMTUweiBtNTA3NyAyNTEgYzE2MCAtNDAgMjgyIC0xMTEgMzk0IC0yMjcgNTggLTYyIDE0NCAtMTc1IDE1MSAtMjAyIDIgLTgKLTI3MiAtMTkyIC00MzggLTI5NSAtNiAtNCAtMzAgMjIgLTU3IDYyIC04MSAxMTggLTE2NiAxNjkgLTI5NiAxNzggLTE5MSAxMwotMzE0IC04NyAtMzEzIC0yNTQgMCAtNDkgNyAtNzggMjcgLTExOCA0MiAtODcgMTIwIC0xMzkgMzY1IC0yNDUgNDUxIC0xOTQKNjQ0IC0zMjIgNzY0IC01MDQgMTM0IC0yMDMgMTY0IC01MjcgNzMgLTc2OCAtMTAwIC0yNjIgLTM0OCAtNDQwIC02OTcgLTQ5OQotMTA4IC0xOSAtMzY0IC0xNiAtNDgwIDUgLTI1MyA0NSAtNDkzIDE3MCAtNjQxIDMzNCAtNTggNjQgLTE3MSAyMzEgLTE2NCAyNDMKMyA0IDI5IDIwIDU4IDM3IDI4IDE2IDEzNCA3NyAyMzQgMTM1IGwxODEgMTA1IDM4IC01NiBjNTMgLTgxIDE2OSAtMTkyIDIzOQotMjI5IDIwMSAtMTA2IDQ3NyAtOTEgNjEzIDMxIDU4IDUzIDgyIDEwOCA4MiAxODkgMCA3MyAtOSAxMDUgLTQ3IDE2MCAtNDkgNzAKLTE0OSAxMjkgLTQzMyAyNTIgLTMyNSAxNDAgLTQ2NSAyMjcgLTU5MyAzNjUgLTc0IDgwIC0xNDQgMjA4IC0xNzMgMzE1IC0yNAo4OSAtMzAgMzEyIC0xMSA0MDIgNjcgMzE0IDMwNCA1MzMgNjQ2IDU5OCAxMTEgMjEgMzY5IDEzIDQ3OCAtMTR6IG0tMTQ3OQotMjYzIGwyIC0yNTggLTQxMCAwIC00MTAgMCAwIC0xMTY1IDAgLTExNjUgLTI5MCAwIC0yOTAgMCAwIDExNjUgMCAxMTY1IC00MTAKMCAtNDEwIDAgMCAyNTMgYzAgMTQwIDMgMjU3IDcgMjYwIDMgNCA1MDIgNiAxMTA3IDUgbDExMDEgLTMgMyAtMjU3eiIgLz4KPC9nPgo8L3N2Zz4K"
                    alt="TypeScript"
                  />
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjE4NzUiIHZpZXdCb3g9IjAgMCA1MTIgMzg0Ij48cGF0aCBmaWxsPSIjQ0Y2NDlBIiBkPSJNNDQwLjYgMjIwLjZjLTE3LjkuMTAxLTMzLjQgNC40LTQ2LjQgMTAuODAxLTQuOC05LjUtOS42LTE3LjgwMS0xMC4zOTktMjQtLjktNy4yLTItMTEuNjAxLS45LTIwLjJDMzg0IDE3OC42IDM4OSAxNjYuNCAzODkgMTY1LjRjLS4xMDEtLjktMS4xMDEtNS4zLTExLjQtNS40cy0xOS4yIDItMjAuMiA0LjctMyA4LjktNC4zIDE1LjNjLTEuOCA5LjQtMjAuNiA0Mi43LTMxLjMgNjAuMi0zLjUtNi44LTYuNS0xMi44LTcuMTAxLTE3LjYwMS0uODk5LTcuMTk5LTItMTEuNi0uODk5LTIwLjE5OSAxLjEtOC42MDEgNi4xLTIwLjggNi4xLTIxLjgtLjEtLjktMS4xLTUuMy0xMS4zOTktNS40LTEwLjMwMS0uMS0xOS4yIDItMjAuMiA0LjdzLTIuMSA5LjEtNC4zIDE1LjNDMjgxLjkgMjAxLjQgMjU2LjkgMjU3IDI1MC40IDI3MS41Yy0zLjMgNy40LTYuMTk5IDEzLjMtOC4zIDE3LjMtMi4xIDQtLjEuMy0uMy43LTEuOCAzLjQtMi44IDUuMy0yLjggNS4zdi4xMDFjLTEuNCAyLjUtMi45IDQuODk5LTMuNjAxIDQuODk5LS41IDAtMS41LTYuNy4yLTE1Ljg5OSAzLjctMTkuMzAxIDEyLjctNDkuNCAxMi42MDEtNTAuNSAwLS41IDEuNjk5LTUuODAxLTUuODAxLTguNS03LjMtMi43LTkuODk5IDEuOC0xMC41IDEuOC0uNiAwLTEuMSAxLjYtMS4xIDEuNnM4LjEtMzMuODk5LTE1LjUtMzMuODk5Yy0xNC44IDAtMzUuMiAxNi4xLTQ1LjMgMzAuOC02LjQgMy41LTIwIDEwLjg5OS0zNC40IDE4LjgtNS41IDMtMTEuMiA2LjItMTYuNiA5LjFMMTE3LjkgMjUxLjljLTI4LjYtMzAuNS04MS41LTUyLjEtNzkuMy05My4xLjgtMTQuOSA2LTU0LjIgMTAxLjYwMS0xMDEuOCA3OC4zLTM5IDE0MS0yOC4zIDE1MS44OTktNC41IDE1LjUgMzQtMzMuNSA5Ny4yLTExNC44OTkgMTA2LjMtMzEgMy41LTQ3LjMwMS04LjUtNTEuNC0xMy00LjMtNC43LTQuOS00LjktNi41LTQtMi42IDEuNC0xIDUuNiAwIDguMSAyLjQgNi4zIDEyLjQgMTcuNSAyOS40IDIzLjEgMTQuODk5IDQuOSA1MS4zIDcuNiA5NS4zLTkuNCA0OS4zLTE5LjEgODcuOC03Mi4xIDc2LjUtMTE2LjQtMTEuNS00NS4xLTg2LjMtNTkuOS0xNTctMzQuOEMxMjEuNCAyNy40IDc1LjggNTAuOCA0MyA4MS41IDQgMTE3LjktMi4yIDE0OS43LjQgMTYyLjljOS4xMDEgNDcuMSA3NCA3Ny44IDEwMCAxMDAuNS0xLjMuNjk5LTIuNSAxLjM5OS0zLjYgMi0xMyA2LjM5OS02Mi41IDMyLjMtNzQuOSA1OS42OTktMTQgMzEgMi4yIDUzLjMwMSAxMyA1Ni4zMDEgMzMuNCA5LjMgNjcuNi03LjQgODYuMS0zNC45IDE4LjM5OS0yNy41IDE2LjItNjMuMiA3LjctNzkuNWwtLjMwMS0uNiAxMC4yLTZjNi42MDEtMy45IDEzLjEwMS03LjUgMTguOC0xMC42MDEtMy4xOTkgOC43LTUuNSAxOS02LjY5OSAzNC0xLjQgMTcuNjAxIDUuOCA0MC40IDE1LjMgNDkuNCA0LjIgMy44OTkgOS4yIDQgMTIuMyA0IDExIDAgMTYtOS4xMDEgMjEuNS0yMCA2LjgtMTMuMyAxMi44LTI4LjcgMTIuOC0yOC43cy03LjUgNDEuNyAxMyA0MS43YzcuNSAwIDE1LTkuNyAxOC40LTE0Ljd2LjFzLjItLjMuNi0xYTM2LjEzIDM2LjEzIDAgMCAwIDEuMi0xLjg5OXYtLjJjMy01LjIgOS43LTE3LjEgMTkuNy0zNi44IDEyLjg5OS0yNS40IDI1LjMtNTcuMiAyNS4zLTU3LjJzMS4yIDcuOCA0LjkgMjAuNmMyLjE5OSA3LjYwMSA2Ljk5OSAxNS45IDEwLjY5OSAyNC0zIDQuMi00LjggNi42MDEtNC44IDYuNjAxbC4xLjFjLTIuMzk5IDMuMi01LjEgNi42MDEtNy44OTkgMTAtMTAuMiAxMi4yLTIyLjQgMjYuMTAxLTI0IDMwLjEwMS0xLjkgNC42OTktMS41IDguMTk5IDIuMiAxMSAyLjcgMiA3LjUgMi4zOTkgMTIuNiAyIDkuMi0uNjAxIDE1LjYtMi45IDE4LjgtNC4zMDEgNS0xLjggMTAuNy00LjUgMTYuMi04LjUgMTAtNy4zOTkgMTYuMS0xNy44OTkgMTUuNS0zMS44OTktLjMtNy43LTIuOC0xNS4zLTUuOS0yMi41LjktMS4zIDEuODAxLTIuNjAxIDIuNy00IDE1LjgtMjMuMTAxIDI4LTQ4LjUgMjgtNDguNXMxLjIgNy44IDQuOSAyMC42YzEuODk5IDYuNSA1LjcgMTMuNjAxIDkuMSAyMC42MDEtMTQuOCAxMi4xLTI0LjEgMjYuMS0yNy4zIDM1LjMtNS45IDE3LTEuMyAyNC43IDcuNCAyNi41IDMuODk5LjggOS41LTEgMTMuNjk5LTIuOCA1LjItMS43IDExLjUtNC42MDEgMTcuMzAxLTguOSAxMC03LjQgMTkuNi0xNy43IDE5LjEtMzEuNi0uMy02LjQtMi0xMi43LTQuMy0xOC43IDEyLjYtNS4yIDI4Ljg5OS04LjIgNDkuNi01LjcgNDQuNSA1LjIgNTMuMyAzMyA1MS42MDEgNDQuNi0xLjcgMTEuNjAxLTExIDE4LTE0LjEwMSAyMC0zLjEgMS45LTQuMSAyLjYwMS0zLjggNCAuNCAyLjEwMSAxLjggMiA0LjUgMS42MDEgMy43LS42MDEgMjMuNC05LjUgMjQuMi0zMC44OTkgMS4yLTI3LjUwNC0yNC45LTU3LjUwNC03MS4yLTU3LjIwNXpNOTcuNCAzMzYuM2MtMTQuNyAxNi4xLTM1LjQgMjIuMi00NC4yIDE3LTkuNS01LjUtNS44MDEtMjkuMiAxMi4zLTQ2LjMgMTEtMTAuNCAyNS4zLTIwIDM0LjctMjUuOSAyLjEtMS4zIDUuMy0zLjE5OSA5LjEtNS41LjYtLjM5OSAxLS42IDEtLjYuNy0uNCAxLjUtLjkgMi4zLTEuNCA2LjcgMjQuNC4zIDQ1LjgtMTUuMiA2Mi43em0xMDcuNS03My4xYy01LjEgMTIuNS0xNS45IDQ0LjYtMjIuNCA0Mi44LTUuNjAxLTEuNS05LTI1LjgtMS4xMDEtNDkuOCA0LTEyLjEwMSAxMi41LTI2LjUgMTcuNS0zMi4xMDEgOC4xMDEtOSAxNi45LTEyIDE5LjEwMS04LjMgMi42IDQuODAxLTkuOSAzOS42MDEtMTMuMSA0Ny40MDF6bTg4LjcgNDIuNGMtMi4yIDEuMTAxLTQuMiAxLjktNS4xIDEuMzAxLS43LS40Ljg5OS0xLjkuODk5LTEuOXMxMS4xLTExLjkgMTUuNS0xNy40YzIuNS0zLjE5OSA1LjUtNi44OTkgOC43LTExLjF2MS4yQzMxMy42IDI5Mi4xIDI5OS44IDMwMS43IDI5My42IDMwNS42em02OC4zOTktMTUuNmMtMS42LTEuMi0xLjM5OS00LjkgNC0xNi41IDIuMTAxLTQuNiA2LjktMTIuMyAxNS4yLTE5LjYgMSAzIDEuNjAxIDUuODk5IDEuNSA4LjYtLjA5OSAxOC0xMi44OTkgMjQuNy0yMC43IDI3LjV6Ii8+PC9zdmc+"
                    alt="SASS"
                  />
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMjAwMCIKICAgaGVpZ2h0PSIyMDA4LjI3NTgiCiAgIGlkPSJzdmcyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjEgcjk3NjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9InR3aXR0ZXJfYm9vdHN0cmFwX2xvZ28uc3ZnIj4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9Ijg2NCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI2MjMiCiAgICAgaWQ9Im5hbWVkdmlldzI5OTYiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOnpvb209IjAuMjQ4OTYzNzIiCiAgICAgaW5rc2NhcGU6Y3g9IjExNi44MDg2NiIKICAgICBpbmtzY2FwZTpjeT0iNDA3LjY2NTUxIgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgLz4KICA8ZGVmcwogICAgIGlkPSJkZWZzNCI+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDM4MjAiPgogICAgICA8c3RvcAogICAgICAgICBpZD0ic3RvcDM4MjIiCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiMwNzAxMzU7c3RvcC1vcGFjaXR5OjEiCiAgICAgICAgIG9mZnNldD0iMCIgLz4KICAgICAgPHN0b3AKICAgICAgICAgaWQ9InN0b3AzODI0IgogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojNjEyZDUwO3N0b3Atb3BhY2l0eToxIgogICAgICAgICBvZmZzZXQ9IjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICB4MT0iMzE0LjYyNDA4IgogICAgICAgeTE9IjU0Ny4yMDU5OSIKICAgICAgIHgyPSI0MjcuMzc2NzEiCiAgICAgICB5Mj0iNDMyLjQ4Mzg5IgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50MzgzNCIKICAgICAgIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM4MjAiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUyLDApIiAvPgogIDwvZGVmcz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE3Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZSAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMTUuNjIzMDQxLDAsMCwxNS42MjMwNDEsLTM5ODcuNjAyNCwtNjY0NC44ODM1KSI+CiAgICA8cmVjdAogICAgICAgd2lkdGg9IjEyOC4wMTYwNSIKICAgICAgIGhlaWdodD0iMTI4LjU0NTc2IgogICAgICAgcnk9IjIwLjY3OTUxOCIKICAgICAgIHg9IjI1NS4yMzg1NiIKICAgICAgIHk9IjQyNS4zMjU4NyIKICAgICAgIGlkPSJyZWN0MzA1MCIKICAgICAgIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzODM0KTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxnCiAgICAgICB0cmFuc2Zvcm09InNjYWxlKDEuMDA1MjAxMywwLjk5NDgyNTYxKSIKICAgICAgIGlkPSJ0ZXh0MzgzNiIKICAgICAgIHN0eWxlPSJmb250LXNpemU6MTA5Ljc5NjUwMTE2cHg7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoxMDAlO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O3dyaXRpbmctbW9kZTpsci10Yjt0ZXh0LWFuY2hvcjptaWRkbGU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO2ZvbnQtZmFtaWx5OlNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpTYW5zIj4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSAzMTguNTU2NDEsNDgzLjE2NTI2IGMgMy4yNTIzOSw1ZS01IDUuNzE4NTIsLTAuNzE0NzcgNy4zOTg0LC0yLjE0NDQ2IDEuNjc5NzgsLTEuNDI5NTkgMi41MTk2OSwtMy41MzgzMSAyLjUxOTc0LC02LjMyNjE3IC01ZS01LC0yLjc1MiAtMC44Mzk5NiwtNC44NDI4NSAtMi41MTk3NCwtNi4yNzI1NSAtMS42Nzk4OCwtMS40NjUzMiAtNC4xNDYwMSwtMi4xOTgwMSAtNy4zOTg0LC0yLjE5ODA4IGwgLTExLjQxOTI2LDAgMCwxNi45NDEyNiAxMS40MTkyNiwwIG0gMC42OTY5NSwzNS4wMDgzNiBjIDQuMTQ1OTIsMTBlLTYgNy4yNTUzOCwtMC44NzU2NCA5LjMyODQxLC0yLjYyNjk3IDIuMTA4NjcsLTEuNzUxMjkgMy4xNjMwMywtNC4zOTYxMyAzLjE2MzA5LC03LjkzNDUxIC02ZS01LC0zLjQ2Njg2IC0xLjAzNjU1LC02LjA1ODA4IC0zLjEwOTQ3LC03Ljc3MzY4IC0yLjA3MzAzLC0xLjc1MTI4IC01LjIwMDM3LC0yLjYyNjkzIC05LjM4MjAzLC0yLjYyNjk3IGwgLTEyLjExNjIxLDAgMCwyMC45NjIxMyAxMi4xMTYyMSwwIE0gMzM4LjQ0NjMsNDg5LjM4NDIgYyA0LjQzMTgzLDEuMjg2NzIgNy44NjI5NiwzLjY2MzUgMTAuMjkzNDMsNy4xMzAzNCAyLjQzMDMxLDMuNDY2OTIgMy42NDU1MSw3LjcyMDEgMy42NDU1OCwxMi43NTk1NiAtN2UtNSw3LjcyMDA4IC0yLjYwOTE3LDEzLjQ3NDM4IC03LjgyNzI5LDE3LjI2MjkyIC01LjIxODI1LDMuNzg4NTUgLTEzLjE1Mjc2LDUuNjgyODMgLTIzLjgwMzUzLDUuNjgyODMgbCAtMzQuMjU3OCwwIDAsLTgwLjA0MjA4IDMwLjk4NzQ5LDAgYyAxMS4xMTU0MSw4ZS01IDE5LjE1NzE0LDEuNjc5OTEgMjQuMTI1MjEsNS4wMzk0OSA1LjAwMzY3LDMuMzU5NzMgNy41MDU1NCw4LjczODc1IDcuNTA1NjIsMTYuMTM3MDggLThlLTUsMy44OTU4MyAtMC45MTE0Nyw3LjIxOTc1IC0yLjczNDE5LDkuOTcxNzUgLTEuODIyODYsMi43MTYzNyAtNC40Njc3LDQuNzM1NzQgLTcuOTM0NTIsNi4wNTgxMSIKICAgICAgICAgaWQ9InBhdGgzODQxIgogICAgICAgICBzdHlsZT0iZm9udC13ZWlnaHQ6Ym9sZDtsaW5lLWhlaWdodDoxMDAlO2ZpbGw6I2ZmZmZmZjtmb250LWZhbWlseTpTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246U2FucyBCb2xkIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
                    alt="Bootstrap"
                  />
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOTdweCIgaGVpZ2h0PSI5N3B4IiB2aWV3Qm94PSIwIDAgOTcgOTciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDk3IDk3IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGMDUxMzMiIGQ9Ik05Mi43MSw0NC40MDhMNTIuNTkxLDQuMjkxYy0yLjMxLTIuMzExLTYuMDU3LTIuMzExLTguMzY5LDBsLTguMzMsOC4zMzJMNDYuNDU5LDIzLjE5DQoJCWMyLjQ1Ni0wLjgzLDUuMjcyLTAuMjczLDcuMjI5LDEuNjg1YzEuOTY5LDEuOTcsMi41MjEsNC44MSwxLjY3LDcuMjc1bDEwLjE4NiwxMC4xODVjMi40NjUtMC44NSw1LjMwNy0wLjMsNy4yNzUsMS42NzENCgkJYzIuNzUsMi43NSwyLjc1LDcuMjA2LDAsOS45NThjLTIuNzUyLDIuNzUxLTcuMjA4LDIuNzUxLTkuOTYxLDBjLTIuMDY4LTIuMDctMi41OC01LjExLTEuNTMxLTcuNjU4bC05LjUtOS40OTl2MjQuOTk3DQoJCWMwLjY3LDAuMzMyLDEuMzAzLDAuNzc0LDEuODYxLDEuMzMyYzIuNzUsMi43NSwyLjc1LDcuMjA2LDAsOS45NTljLTIuNzUsMi43NDktNy4yMDksMi43NDktOS45NTcsMGMtMi43NS0yLjc1NC0yLjc1LTcuMjEsMC05Ljk1OQ0KCQljMC42OC0wLjY3OSwxLjQ2Ny0xLjE5MywyLjMwNy0xLjUzN1YzNi4zNjljLTAuODQtMC4zNDQtMS42MjUtMC44NTMtMi4zMDctMS41MzdjLTIuMDgzLTIuMDgyLTIuNTg0LTUuMTQtMS41MTYtNy42OTgNCgkJTDMxLjc5OCwxNi43MTVMNC4yODgsNDQuMjIyYy0yLjMxMSwyLjMxMy0yLjMxMSw2LjA2LDAsOC4zNzFsNDAuMTIxLDQwLjExOGMyLjMxLDIuMzExLDYuMDU2LDIuMzExLDguMzY5LDBMOTIuNzEsNTIuNzc5DQoJCUM5NS4wMjEsNTAuNDY4LDk1LjAyMSw0Ni43MTksOTIuNzEsNDQuNDA4eiIvPg0KPC9nPg0KPC9zdmc+DQo="
                    alt="Git Version Control"
                  />

                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjU0MHB4IiBoZWlnaHQ9IjIxMHB4IiB2aWV3Qm94PSIwIDAgMTggNyI+DQo8cGF0aCBmaWxsPSIjQ0IzODM3IiBkPSJNMCwwaDE4djZIOXYxSDVWNkgwVjB6IE0xLDVoMlYyaDF2M2gxVjFIMVY1eiBNNiwxdjVoMlY1aDJWMUg2eiBNOCwyaDF2Mkg4VjJ6IE0xMSwxdjRoMlYyaDF2M2gxVjJoMXYzaDFWMUgxMXoiLz4NCjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMSw1IDMsNSAzLDIgNCwyIDQsNSA1LDUgNSwxIDEsMSAiLz4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik02LDF2NWgyVjVoMlYxSDZ6IE05LDRIOFYyaDFWNHoiLz4NCjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMTEsMSAxMSw1IDEzLDUgMTMsMiAxNCwyIDE0LDUgMTUsNSAxNSwyIDE2LDIgMTYsNSAxNyw1IDE3LDEgIi8+DQo8L3N2Zz4NCg=="
                    alt="NPM"
                  />
                </div>
              </div>
            </div>
          </div>

          <section className="alt-bio bio-section" aria-label="quick bio">
            <div className="container">
              <h2 className="text-secondary">{quickBio.heading} </h2>

              <p dangerouslySetInnerHTML={{ __html: quickBio.html }}></p>
            </div>
          </section>

          <section
            className="values-missions bio-section"
            aria-label="my values and missions"
          >
            <div className="container">
              <h2 className="text-secondary">{valuesMissions.heading}</h2>

              <p dangerouslySetInnerHTML={{ __html: valuesMissions.html }}></p>
            </div>
          </section>

          <section
            className="alt-bio bio-section"
            aria-label="what I do outside of programming"
          >
            <div className="container">
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
                  Habits for success Inspired Ideas to help you soar: Brian
                  Benson
                </li>
                <li>The illusion of invincibility: Paul Williams </li>
                <li>The first 20 hours: Josh Kaufman</li>
                <li>The next big thing: Matthew Mockridge </li>
                <li>
                  GET IT DONE 31 Ways to release your inner boss: Hayley Hobson
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
            <div className="container">
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
            text
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
