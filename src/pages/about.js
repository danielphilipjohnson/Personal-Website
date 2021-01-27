import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../component/Seo";
import Header from "../component/layout/Header";

import Layout from "../component/layout/Layout";

import banner from "../images/profile.jpg";

import "./styles/about.css";

const About = ({ location }) => {
  const { site } = useStaticQuery(siteQuery);

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

        <div className="about-stats">
          <h3>{setToday()} by Daniel Johnson</h3>
          <p>
            <a
              class="header-badge"
              target="_blank"
              href="https://twitter.com/danielp_johnson"
            >
              <img
                alt="Twitter Follow"
                src="https://img.shields.io/twitter/follow/danielp_johnson?style=social"
              />
            </a>

            <a
              class="header-badge"
              target="_blank"
              href="https://www.linkedin.com/in/daniel-philip-johnson/"
            >
              <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social" />
            </a>
          </p>
        </div>

        <div className=" about">
          <div className="container">
            <div className="about-info">
              <img className="img-fluid" src={banner} alt="" srcset="" />

              <p>
                Hi, it's Daniel. I am an English front-end engineer from Truro
                Cornwall who currently works remotely for codecareer.io. I'm
                responsible for maintaining a hiring system and well as
                contributing to a job board. In my spare time, I have a series
                of react side projects and I also contribute to the community
                with React and web resources.
              </p>
              <p>
                My professional life is a summary: I graduated from the
                University of Plymouth with a BSc in psychology in 2014. It was
                at university I discovered my passion for development. I started
                with programming my own project for a neuroscience experiment
                and then onto helping others. During my neuroscience lessons, I
                loved the topic of vision and memory. It was "vision" that took
                a lot of my interest like how colours catch our eyes and how the
                placement of items has importance. Around the same time, I
                developed an interest in web development during my free time.{" "}
              </p>
              <p>
                After, I finished my four years of studies. I started to travel
                around the world. Deciding my next plan and my goals. It
                suddenly hit me during this period while applying for graduate
                psychology positions. I found myself spending more and more time
                programming in my spare time. Developing a strong connection. So
                I decided to start with freecodecamp. I successfully finished in
                2017 and then progressed onto Udacity in 2018 whilst working a
                full-time job. I gained a lot of experience and confidence in
                web development and setout my targetted path. Improving areas
                that required attention and growing my connections. Recently, I
                successfully joined codecareer.io as a react developer and
                future content creator.{" "}
              </p>
            </div>
          </div>

          <div className="used-technologies">get icons</div>

          <div className="quick-bio">
            <div className="container">
              <h3 className="text-secondary">📔 Quick Biography </h3>
              <p>
                <b>When did I discover programming:</b> Well, when I was a young
                child, my mother, in her spare time would copy code from a
                manual to make games run on the{" "}
                <a href="https://en.wikipedia.org/wiki/Commodore_64">
                  Commodore 64 (CBM 64)
                </a>
                but putting them into memory. She kept this console for quite
                some time it was the closest thing we had to a computer. The
                first game I remember helping run was{" "}
                <a href="https://www.retrogamer.net/retro_games80/blue-meanies-from-outer-space/">
                  Blue Meanies from Outer Space
                </a>
                . It was so exciting to see it running, however, not so for my
                mom. She claimed all that time for a space invaders clone.
              </p>

              <p>
                Span a few years to one year before I started college. I needed
                to buy a PC to submit my assignments. So during the summer of
                2008, I worked so hard cleaning hotels with my mother. I now had
                enough money to buy my first computer a Packard Bell iMedia
                x2414 with an enormous amount of Ram totalling 2GB and an intel
                Celeron with duo cores. The best part was it was running
                everyone's favourite Windows version Windows Vista. It was so
                hard to get any work done. Then one fatal evening windows broke
                the DHCP no longer worked I had no clue how to fix it and no
                other device to search how to fix it. I was then forced to use
                the library to find a solution get a windows disc this seemed
                almost impossible. I started to ask what is Windows and is there
                an alternative. The answer was Yes! Ubuntu 9.04 (Jaunty
                Jackalope). I encountered problems I was unable to download the
                ISO. So I asked canonical for a disc and enclosed a cheque to
                cover the shipping. From that day I have used Linux ever since.
                The distros I commonly use now are "Kubuntu", "Manjaro" and Arch
                Linux. I use KDE as my GUI "you know what they say old habits
                die hard." Yes, I occasionally use Windows. After I built my
                next PC, I got windows 7 and came across XNA Game Studio 3.0.
                The idea of making games for Xbox seemed great. It gave me a
                moment of nostalgia with my mom. Which lead me to learn C# and
                eventually built an RPG game from the toolkit they provided. I
                progressed onto making an Ubuntu Linux server out of interest as
                well as a samba server. All in my free time. During my final
                year of studies, I was responsible for creating experiments with
                python and using libraries such as pandas, NumPy and matplotlib
                to plot and analysis data. Now I found my calling with web
                development and love every moment I get using JavaScript and
                react.js
              </p>
            </div>
          </div>

          <div className="values-missions">
            <div className="container">
              <h2 className="text-secondary">My values and mission</h2>
              <p>
                I always try to leave the world a better place than yesterday. I
                try to give advice related to programming and personal. I always
                try 99% of the time to help the best I can. If I don't know the
                answer. I will try my hardest to find the answer or find another
                person that can help you. I keep almost all my code 99.9% open
                source for others to look at and use on GitHub(put a link). I
                want to help you build apps, websites and programs that express
                your ideas.
              </p>
              <p>
                Currently, I'm finishing off my language studies with the
                Spanish language. I know that speaking and reading in the
                English language is a blessing. Many people do not have access
                to good programming content due to it being in English.
                Providing a language barrier. Also, most educational content is
                not reasonably priced when you convert it to other currencies.
                For instance, Peruvian Soles to Dollars it can make courses very
                expensive. This is something I'm serious about addressing and
                hoping to help with. That's why I volunteer my time and money to
                help those from South America and North America. I want to also
                make educational content that is accessible to as much of the
                world as possible. If you would like to help by converting my
                future tutorials, blog and books to other languages. Please let
                me know :). I'm happy to give you credit. I hope we can all make
                educational content more accessible to those who desire to
                program can do it.
              </p>
            </div>
          </div>

          <div className="quick-bio">
            <div className="container">
              <h3>OUTSIDE OF PROGRAMMING </h3>
              <p>
                Although it seems like my life is entirely ruled by programming
                and computers. I do have spare time and things that I cherish. I
                love to read about psychology from both books and journals. I
                also love reading in general. Here are some books I've enjoyed
                reading right now.{" "}
              </p>

              <ul>
                <li>
                  Habits for success Inspired Ideas to help you soar: Brian
                  Benson{" "}
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
                speaking at conferences. Who knows what the future holds?{" "}
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
                team.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* <p align="center">
          <a href="https://codepen.io/danielphilipjohnson/">
            <img
              height="30"
              src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/codepen.png"
            />
          </a>
          &nbsp;&nbsp;
          <a href="https://twitter.com/danielp_johnson">
            <img
              height="30"
              src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/twitter.png"
            />
          </a>
          &nbsp;&nbsp;
          <a href="https://www.instagram.com/danielphilipjohnson/">
            <img
              height="30"
              src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/instagram.jpg"
            />
          </a>
          &nbsp;&nbsp;
          <a href="/">
            <img src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/dev.webp" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-philip-johnson/">
            <img
              height="30"
              src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/linkedin.png"
            />
          </a>
        </p> */}

        <section
          id="home"
          className="home"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <h1 className="lg-heading">
            Daniel
            <span id="secondary" className="text-secondary">
              {" "}
              Philip
            </span>
            <span> Johnson</span>
          </h1>
          <div id="icons" className="icons home-cta">
            <h2 className="sm-heading">{site.siteMetadata.tagline}</h2>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        tagline
      }
    }
  }
`;
