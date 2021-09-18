import React from "react";
import Seo from "../../component/Seo";

import Layout from "../../component/layout/Layout";

function MyStory({ location }) {
  return (
    <Layout location={location.pathname}>
      <Seo />
      <div className="container mt-16">
        <article>
          <h2 className="text-2xl font-bold mb-4 pb-4 border-b border-grey">
            My Story
          </h2>
          <p>
            This is my story so far 😊. I will be adding more and more as time
            goes on.
          </p>
          <p className="mb-8 leading-8">
            My programmer career started at a startup called codecareer.io where
            I was a Front-End Engineer specialising in React and mongo. During
            my tenure at the startup, I concentrated on developing a variety of
            responsive and accessible web applications using React.js, Next.js,
            Gatsby, and styled with tailwindcss. I was the driving force behind
            four new features for the hiring system's job board.
          </p>
          <p className="mb-8 leading-8">
            One features involved cleaning all the job data from the API
            services into a new API. As the named fields where not consistent
            between the API's. To make it possible to have job data with
            consistent names. He created a python job that made API calls to the
            services and then cleansed the data fields into a new JSON file.
            Finally populating the MongoDB with the new cleansed data.
          </p>
          <p className="mb-8 leading-8">
            After implementing this feature, I became interested in full-stack
            development and started to play a greater role. In my spare time, I
            soon began studying full stack development. While continuing to work
            on improving the lighthouse performance score of the react web
            application.
          </p>

          <p className="mb-8 leading-8">
            After the startup disbanded I then took some months off to upskill
            my skills in full stack development. Soon after I landed my second
            developer role, still rocking 😎the startup scene, where I continue
            to enjoy building rapid greenfield projects to help clients get
            their vision to market first. My current goal is to embark on a
            journey to become a senior engineer with hiyield.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-bold mb-4 pb-4 border-b border-grey">
            How I got here
          </h2>

          <p className="mb-8 leading-8">
            My first coding experience came from the Commodore 64 (CBM 64).
            Which remained in the family for quite sometime. It was the closest
            thing we had to a computer at the time. With the Commodore 64 (CBM
            64) we both shared time typing the code for "Blue Meanies from Outer
            Space" into memory. We achieved this by using the code from
            "Creative Computing Issue 61" magazine. I was so excited to see it
            running, however, not so for my mom. She claimed all that time for a
            space invaders clone 🙂.
          </p>
          <p className="mb-8 leading-8">
            Span a few years to when I started college. I needed to buy a PC to
            submit assignments. So during the summer of 2008, I worked cleaning
            hotels and chalets with my mother. Soon I had enough money to buy my
            first computer a "Packard Bell iMedia x2414". Which had an enormous
            amount of Ram totaling 2GB 😯 and an Intel Celeron with duo cores
            😯. The best part was it was running everyone's favorite Windows
            version Vista 😑.
          </p>
          <p className="mb-8 leading-8">
            The Windows operating system failed one fateful evening. I had no
            idea how to fix the DHCP server and no other computer to look for a
            solution. To discover a solution, I headed to the public library.
            The suggested solution was I needed a Windows CD, but this appeared
            to be impossible I would have to pay for a new disc 😑. So I began
            to research what Windows is and whether there is an alternative. The
            answer was Yes! Ubuntu 9.04 (Jaunty Jackalope). So I asked canonical
            for a disc and enclosed a cheque to cover the shipping. Due to
            Windows issues, I have used Linux ever since and started his journey
            into programming.
          </p>

          <p className="mb-8 leading-8">
            During my time in college (2008) I liked the idea of making games
            after buying an Xbox 360. I discovered that to make games for Xbox
            you needed to use XNA but, to use XNA you needed to know C#. I then
            pursued C# as my first language by continuing to study it in my
            freetime after lessons on college computers. I managed to build a
            RPG game by using an XNA RPG package. But I encountered problems as
            I couldn't make games at home, because my computer ran Linux. So
            then I moved onto using python to make games with PYGAME and even
            took part in some PYJAMS.
          </p>

          <p className="mb-8 leading-8">
            In my pursuit of finding some python learning material. I discovered
            codeacademy and learned python. I then took their web development
            courses which began a real shift for me getting into web development
            in.
          </p>

          <p className="mb-8 leading-8">
            In 2012 I took a university course in BSc Psychology and primarily
            focused on neuroscience. In my final year of the course I needed to
            create a group project. The project required a program to be built
            to display images and time reactions of users. In this moment I
            discovered programming as my calling I enjoyed building things.
          </p>

          <p className="mb-8 leading-8">
            After graduating, I enrolled in freecodecamp (2016) and CS50
            introduction to computer science. By 2017 I was freelancing while
            continuing to improve my skills with udacity. In 2019 I finished
            freecodecamp and improved my fundamentals of web development.
            Despite continuing with freelancing I lacked the confidence to
            become a Front-End developer. But by 2020 I drew out a plan to
            become a full time developer by planning a schedule with
            #301DaysOfCode. The plan involved studying with coursera to improve
            my softskills and by using udemy to sharpen my developer skills here
            is all the courses I have taken.
          </p>

          <p className="mb-8 leading-8">
            After 6 months intensive training and practice I was approached for
            my first role and continued to cement himself as a Front-end react
            developer.
          </p>
        </article>
      </div>
    </Layout>
  );
}

export default MyStory;
