import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import PDF from "../../downloads/Daniel_Philip_Johnson_CV.pdf";

import Seo from "../component/Seo";

import Layout from "../component/layout/Layout";
import Bio from "../component/about/bio/Biography";

import Future from "../component/about/future";

import banner from "../images/linkedinBanner.png";

import "./styles/about.css";

// issue with bringing in markdown
// missing bio link
const About = ({ location }) => {
  return (
    <>
      <Layout location={location.pathname}>
        <Seo />

        <div className="about top-banner">
          <div className="about-info ">
            <div className="profile-card">
              <div className="profile-card-head">
                <img
                  className="card-head-bg"
                  src={banner}
                  alt="cover of daniel philip johnson"
                  height="400px"
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
                    Daniel <span className="profile-middle-name">Philip</span>{" "}
                    Johnson
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
                      height="25"
                    />
                    <a className="bio-link" href={PDF} download>
                      Version PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Bio />

          <section className=" bio-section" aria-label="quick bio">
            <div className="container">
              <h2 className="bio-section-header text-secondary">
                <span role="img" aria-labelledby="values">
                  🏆
                </span>{" "}
                Technologies I use
              </h2>{" "}
              <div className="profile-card-body-item">
                <div className="icons-technology">
                  <StaticImage
                    className="img-fluid icons-technology-img"
                    src="../images/about-logos/png/angular.png"
                    alt="angular"
                    placeholder="none"
                    layout="fixed"
                    width={50}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />
                  <StaticImage
                    className="img-fluid icons-technology-img"
                    src="../images/about-logos/png/react.png"
                    alt="react"
                    placeholder="none"
                    layout="fixed"
                    width={50}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />
                  <StaticImage
                    className="img-fluid icons-technology-img"
                    src="../images/about-logos/png/gatsby.png"
                    alt="GatsbyJS"
                    placeholder="none"
                    layout="fixed"
                    width={45}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />

                  <StaticImage
                    className="img-fluid icons-technology-img"
                    src="../images/about-logos/png/graphql.png"
                    alt="GraphQL"
                    placeholder="none"
                    layout="fixed"
                    width={45}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />
                  <StaticImage
                    className="img-fluid icons-technology-img"
                    src="../images/about-logos/png/javascript.png"
                    alt="javascript"
                    placeholder="none"
                    layout="fixed"
                    width={45}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />

                  <StaticImage
                    className="img-fluid icons-technology-img"
                    src="../images/about-logos/png/ts.png"
                    alt="typescript"
                    placeholder="none"
                    layout="fixed"
                    width={45}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />
                  <StaticImage
                    className="img-fluid icons-technology-img"
                    src="../images/about-logos/png/sass.png"
                    alt="SASS"
                    placeholder="none"
                    layout="fixed"
                    width={50}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />

                  <StaticImage
                    className="img-fluid icons-technology-img"
                    src="../images/about-logos/png/bootstrap4.png"
                    alt="bootstrap4"
                    placeholder="none"
                    layout="fixed"
                    width={45}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />

                  <StaticImage
                    className="img-fluid icons-technology-img"
                    src="../images/about-logos/png/tailwind.png"
                    alt="tailwind"
                    placeholder="none"
                    layout="fixed"
                    width={75}
                    height={45}
                    formats={["auto", "avif", "webp", "png"]}
                  />
                  <StaticImage
                    className="img-fluid icons-technology-img"
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
              <h2 className="text-secondary">📔 Quick Biography</h2>
              <p>
                <b>When did I discover programming:</b> Well, when I was a young
                child, my mother, in her spare time would copy code from a
                manual to make games run on the{" "}
                <a
                  className="bio-link"
                  href="https://en.wikipedia.org/wiki/Commodore_64"
                >
                  Commodore 64 (CBM 64)
                </a>
                but putting them into memory. She kept this console for quite
                some time it was the closest thing we had to a computer. The
                first game I remember helping run was{" "}
                <a
                  className="bio-link"
                  href="https://www.retrogamer.net/retro_games80/blue-meanies-from-outer-space/"
                >
                  Blue Meanies from Outer Space
                </a>
                . It was so exciting to see it running, however, not so for my
                mom. She claimed all that time for a space invaders clone.
              </p>
              <p>
                Span a few years to one year before I started college. I needed
                to buy a PC to submit my assignments. So during the summer of
                2008, I worked so hard cleaning hotels with my mother. I now had
                enough money to buy my first computer a
                <a
                  className="bio-link"
                  href="https://www.mrmemory.co.uk/memory-ram-upgrades/packard-bell/imedia/x2414"
                >
                  Packard Bell iMedia x2414
                </a>
                with an enormous amount of Ram totalling 2GB and an intel
                Celeron with duo cores. The best part was it was running
                everyone's favourite Windows version
                <a
                  className="bio-link"
                  href="https://en.wikipedia.org/wiki/Windows_Vista"
                >
                  Windows Vista
                </a>
                . It was so hard to get any work done. Then one fatal evening
                windows broke the
                <a
                  className="bio-link"
                  href="https://social.technet.microsoft.com/Forums/windows/en-US/69029855-21c1-411d-bdd3-b864222eefb6/dhcp-on-vista-has-stopped-running?forum=itprovistasetup"
                >
                  DHCP no longer worked
                </a>
                I had no clue how to fix it and no other device to search how to
                fix it. I was then forced to use the library to find a solution
                get a windows disc this seemed almost impossible. I started to
                ask what is Windows and is there an alternative. The answer was
                Yes!
                <a
                  className="bio-link"
                  href="https://wiki.ubuntu.com/JauntyJackalope"
                >
                  Ubuntu 9.04 (Jaunty Jackalope)
                </a>
                . I encountered problems I was unable to download the ISO. So I
                asked canonical for a disc and enclosed a cheque to cover the
                shipping. From that day I have used Linux ever since. The
                distros I commonly use now are{" "}
                <a className="bio-link" href="https://kubuntu.org/">
                  Kubuntu 20.10
                </a>
                ,
                <a className="bio-link" href="https://manjaro.org/">
                  Manjaro"
                </a>{" "}
                and{" "}
                <a className="bio-link" href="https://archlinux.org/">
                  Arch Linux
                </a>
                . I use{" "}
                <a className="bio-link" href="https://kde.org/">
                  KDE
                </a>{" "}
                as my GUI "you know what they say old habits die hard." Yes, I
                occasionally use Windows. After I built my next PC, I got{" "}
                <a
                  className="bio-link"
                  href="https://en.wikipedia.org/wiki/Windows_7"
                >
                  Windows 7
                </a>{" "}
                and came across{" "}
                <a
                  className="bio-link"
                  href="https://en.wikipedia.org/wiki/Microsoft_XNA_Game_Studio"
                >
                  XNA Game Studio 3.0
                </a>
                . The idea of making games for Xbox seemed great. It gave me a
                moment of nostalgia with my mom. Which lead me to learn C# from{" "}
                <a
                  className="bio-link"
                  href="https://docs.microsoft.com/en-us/learn/"
                >
                  Microsoft Academy
                </a>{" "}
                and eventually built an{" "}
                <a
                  className="bio-link"
                  href="https://sourceforge.net/projects/xnarpgtoolkit/"
                >
                  RPG game from the toolkit
                </a>{" "}
                they provided. I progressed onto making an{" "}
                <a className="bio-link" href="https://ubuntu.com/server">
                  Ubuntu Linux server
                </a>{" "}
                out of interest as well as a samba server. All in my free time.
                During my final year of studies, I was responsible for creating
                experiments with python and using libraries such as{" "}
                <a className="bio-link" href="https://pandas.pydata.org/">
                  pandas
                </a>
                ,{" "}
                <a className="bio-link" href="https://numpy.org/">
                  NumPy
                </a>
                and{" "}
                <a className="bio-link" href="https://matplotlib.org/">
                  matplotlib
                </a>
                to plot and analysis data. Now I found my calling with web
                development and love every moment I get using JavaScript and
                react.js
              </p>
            </div>
          </section>

          <section className=" bio-section" aria-label="my values and missions">
            <div className="container">
              <h2 className="bio-section-header text-secondary">
                <span role="img" aria-labelledby="values">
                  🏆
                </span>{" "}
                My values and mission
              </h2>

              <div>
                <p>
                  I always try to leave the world a better place than yesterday.
                  I try to give advice related to programming and personal. I
                  always try 99% of the time to help the best I can. If I don't
                  know the answer. I will try my hardest to find the answer or
                  find another person that can help you. I keep almost all my
                  code 99.9% opensource for others to look at and use on{" "}
                  <a
                    className="bio-link"
                    href="https://github.com/danielphilipjohnson"
                  >
                    GitHub
                  </a>
                  . I want to help you build apps, websites and programs that
                  express your ideas.
                </p>
                <p>
                  Currently, I'm finishing off my language studies with the
                  Spanish language. I know that speaking and reading in the
                  English language is a blessing. Many people do not have access
                  to good programming content due to it being in English.
                  Providing a language barrier. Also, most educational content
                  is not reasonably priced when you convert it to other
                  currencies. For instance, Peruvian Soles to Dollars it can
                  make courses very expensive. This is something I'm serious
                  about addressing and hoping to help with. That's why I
                  volunteer my time and money to help those from South America
                  and North America. I want to also make educational content
                  that is accessible to as much of the world as possible. If you
                  would like to help by converting my future tutorials, blog and
                  books to other languages. Please let me know :). I'm happy to
                  give you credit. I hope we can all make educational content
                  more accessible to those who desire to program can do it.{" "}
                </p>
              </div>
            </div>
          </section>

          <section className=" bio-section">
            <div className="container ">
              <h2 className="bio-section-header">
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
                <li className="bio-list-item">
                  <a
                    className="bio-link"
                    href="https://www.amazon.co.uk/Habits-Success-Inspired-Ideas-Help-ebook/dp/B07FTQMQZM"
                  >
                    Habits for success Inspired Ideas to help you soar: Brian
                    Benson
                  </a>
                </li>
                <li className="bio-list-item">
                  <a
                    className="bio-link"
                    href="https://www.amazon.co.uk/Illusion-Invincibility-Organizations-Inspired-Incas-ebook/dp/B07V3XTSDS"
                  >
                    The illusion of invincibility: Paul Williams{" "}
                  </a>
                </li>
                <li className="bio-list-item">
                  <a
                    className="bio-link"
                    href="https://www.amazon.co.uk/First-20-Hours-Learn-Anything/dp/0670921912"
                  >
                    The first 20 hours: Josh Kaufman
                  </a>
                </li>
                <li className="bio-list-item">
                  <a
                    className="bio-link"
                    href="https://www.amazon.co.uk/Your-Next-Thing-Matthew-Mockridge/dp/1642501417"
                  >
                    The next big thing: Matthew Mockridge
                  </a>
                </li>
                <li className="bio-list-item">
                  <a
                    className="bio-link"
                    href="https://www.amazon.co.uk/Get-Done-Ways-Release-Inner/dp/1633537900"
                  >
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

          <Future />
        </div>
      </Layout>
    </>
  );
};

export default About;
