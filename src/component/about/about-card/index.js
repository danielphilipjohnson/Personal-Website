import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import PDF from "../../../../downloads/Daniel_Philip_Johnson_Front_End_Engineer.pdf";

function AboutCard() {
  return (
    <div className="about-info">
      <div className="profile-card">
        <div className="profile-card-head">
          <StaticImage
            className="card-head-bg"
            src="../../../images/linkedinBanner.png"
            alt="Daniel johnson"
            placeholder="none"
            width={2000}
            height={496}
            formats={["auto", "png"]}
          />
        </div>

        <div className="container">
          <StaticImage
            className="profile-card-image"
            src="../../../images/profile.jpg"
            alt="Daniel johnson"
            placeholder="none"
            layout="fixed"
            width={99}
            height={99}
            formats={["auto", "avif", "webp", "png"]}
          />

          <div className="profile-card-body">
            <h1 className="text-3xl md:text-4xl font-bold pt-8 pb-2 mb-3 border-b border-grey">
              Daniel <span className="text-secondary">Philip</span> Johnson
            </h1>
            {/* make into a link to backlink it */}
            <div className="grid lg:grid-cols-2 gap-4 justify-between mb-3">
              <header>
                <h2 className="text-2xl font-bold mb-1">
                  Full-stack developer
                </h2>
                <h3 className="text-sm text-light-gray">
                  👨‍💻 I work remote 🏠 in Cornwall
                </h3>
              </header>
              <div className="w-full flex lg:justify-end mb-3">
                <div className="w-max flex items-center bg-badge h-8 px-3 py-4 rounded border border-grey">
                  <img
                    src="https://img.icons8.com/ios/20/000000/resume.png"
                    alt="resume icon"
                    width="20"
                    height="20"
                    className="mr-2"
                  />
                  <a className="text-sm" href={PDF} download>
                    Version PDF
                  </a>
                </div>
              </div>
            </div>

            <p className="mb-4">
              My personal goal is to help others get their first programming job
              and work my way towards becoming a senior.
            </p>
            <ul className="space-y-3 list-disc ml-8 mb-8">
              <li>😄 Pronouns: Him, he, they</li>
              <li> 📌 Cornwall 🏴󠁧󠁢󠁥󠁮󠁧󠁿</li>
              <li> 🎓 Bsc Psychology | University of Plymouth 🏫 </li>
              <li>🥼 Psychologist turned React developer 🖥️</li>
              <li>🖥️ I’m currently using Kubuntu 20.04 and Manjaro 20.0.3</li>
              <li>🔭 In my spare time I build linux from scratch</li>
            </ul>
            <div className="mb-8 flex items-center bg-badge p-6 rounded border border-grey">
              <p className="text-sm leading-7">
                ⚡ <span className="font-bold">Fun fact:</span> I started
                programming with Basic on Commodore 64 (CBM 64) but never owned
                a pc until Windows Vista in 2008 😑. My desktop 🖥️ was Packard
                Bell iMedia x2414 with an enormous amount of Ram totalling 2GB.
                It did not take too long for me to consider my options and use
                Ubuntu 9.04 (Jaunty Jackalope). From, there I have used Linux
                ever since and yes, I use KDE for my GUI "you know what they say
                old habits die hard."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
