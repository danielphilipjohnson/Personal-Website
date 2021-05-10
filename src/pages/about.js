import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import PDF from "../../downloads/Daniel_Philip_Johnson_CV.pdf";

import SEO from "../component/Seo";

import Layout from "../component/layout/Layout";
import Bio from "../component/about/bio/Biography";

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
  return (
    <>
      <Layout location={location.pathname}>
        <SEO />

        <div className="about top-banner">
          <div className="about-info alt-bio">
            <div className="profile-card">
              <div className="profile-card-head">
                <img
                  className="card-head-bg"
                  src={banner}
                  alt="cover of daniel philip johnson"
                />
              </div>

              <div className="container">
                <StaticImage
                  className="profile-card-image"
                  src="../images/profile.jpg"
                  alt="Daniel johnson"
                  placeholder="none"
                  layout="fixed"
                  width={99}
                  height={99}
                  formats={["auto", "avif", "webp", "png"]}
                />

                <div className="profile-card-body">
                  <h2 className="profile-name">
                    Daniel <span>Philip</span> Johnson
                  </h2>

                  <div className="profile-card-body-item">
                    <img
                      src="https://img.icons8.com/ios/250/000000/twitter.png"
                      alt="twitter icon"
                      width="25"
                      height="25"
                    />
                    <p>@danielp_johnson</p>
                  </div>

                  <p className="description">
                    React Developer for CodeCareer. My goal is to help others
                    get their first programming job. Lets talk: #reactjs #js
                    #css
                  </p>

                  <div className="profile-card-body-item">
                    <img
                      src="https://img.icons8.com/ios/250/000000/marker.png"
                      alt="marker icon"
                      width="25"
                      height="25"
                    />

                    <address>Cornwall, United Kingdom</address>
                  </div>
                  <div className="profile-card-body-item">
                    <img
                      src="https://img.icons8.com/ios/250/000000/linkedin.png"
                      alt="linkedin icon"
                      width="25"
                      height="25"
                    />

                    <p>danielphilipjohnson</p>
                  </div>

                  <div className="profile-card-body-item">
                    <img
                      src="https://img.icons8.com/ios/250/000000/mailbox-closed-flag-up.png"
                      alt="mail icon"
                      width="25"
                      height="25"
                    />

                    <p> daniel-philip-johnson@gmail.com</p>
                  </div>

                  <div className="profile-card-body-item">
                    <h3>Availability</h3>
                    <p>Freelance: Available</p>
                  </div>
                  <div className="badge bb">
                    <img
                      src="https://img.icons8.com/ios/250/000000/resume.png"
                      alt="resume icon"
                      width="25"
                    />
                    <a href={PDF} download>
                      Version PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Bio />

          <section className="alt-bio bio-section" aria-label="quick bio">
            <div className="container">
              <h2 className="text-secondary">
                <span role="img" aria-labelledby="values">
                  🏆
                </span>{" "}
                Technologies I use
              </h2>{" "}
              <div className="profile-card-body-item">
                <div className="icons-technology">
                  <StaticImage
                    className="img-fluid"
                    src="../images/about-logos/png/angular.png"
                    alt="angular"
                    placeholder="none"
                    layout="fixed"
                    width={50}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />
                  <StaticImage
                    className="img-fluid"
                    src="../images/about-logos/png/react.png"
                    alt="react"
                    placeholder="none"
                    layout="fixed"
                    width={50}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />
                  <StaticImage
                    className="img-fluid"
                    src="../images/about-logos/png/gatsby.png"
                    alt="GatsbyJS"
                    placeholder="none"
                    layout="fixed"
                    width={45}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />

                  <StaticImage
                    className="img-fluid"
                    src="../images/about-logos/png/graphql.png"
                    alt="GraphQL"
                    placeholder="none"
                    layout="fixed"
                    width={45}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />
                  <StaticImage
                    className="img-fluid"
                    src="../images/about-logos/png/javascript.png"
                    alt="javascript"
                    placeholder="none"
                    layout="fixed"
                    width={45}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />

                  <StaticImage
                    className="img-fluid"
                    src="../images/about-logos/png/ts.png"
                    alt="typescript"
                    placeholder="none"
                    layout="fixed"
                    width={45}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />
                  <StaticImage
                    className="img-fluid"
                    src="../images/about-logos/png/sass.png"
                    alt="SASS"
                    placeholder="none"
                    layout="fixed"
                    width={50}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />

                  <StaticImage
                    className="img-fluid"
                    src="../images/about-logos/png/bootstrap4.png"
                    alt="bootstrap4"
                    placeholder="none"
                    layout="fixed"
                    width={45}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />

                  <StaticImage
                    className="img-fluid"
                    src="../images/about-logos/png/tailwind.png"
                    alt="tailwind"
                    placeholder="none"
                    layout="fixed"
                    width={75}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />
                  <StaticImage
                    className="img-fluid"
                    src="../images/about-logos/png/github.png"
                    alt="Git Version Contro"
                    placeholder="none"
                    layout="fixed"
                    width={45}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />
                </div>
              </div>
              <h2 className="text-secondary">{quickBio.heading}</h2>
              <p dangerouslySetInnerHTML={{ __html: quickBio.html }}></p>
            </div>
          </section>

          <section
            className="alt-bio bio-section"
            aria-label="my values and missions"
          >
            <div className="container ">
              <h2 className="text-secondary">
                <span role="img" aria-labelledby="values">
                  🏆
                </span>{" "}
                {valuesMissions.heading}
              </h2>

              <div
                dangerouslySetInnerHTML={{ __html: valuesMissions.html }}
              ></div>
            </div>
          </section>

          <section className="alt-bio bio-section">
            <div className="container ">
              <h2>
                <span role="img" aria-labelledby="thunder">
                  ⚡
                </span>{" "}
                OUTSIDE OF PROGRAMMING
              </h2>
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
                some pointers on what needs addressing. Really we a- mover
                Banner to the Top - move profile picture underneathre a great
                team.
              </p>
            </div>
          </section>

          <section className="alt-bio bio-section" aria-label="my future plans">
            <div className="container ">
              <h2 className="text-secondary">
                <span role="img" aria-labelledby="green heart">
                  💚
                </span>{" "}
                The FUTURE{" "}
              </h2>
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
