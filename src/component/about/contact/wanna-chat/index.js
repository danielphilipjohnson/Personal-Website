import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

function WannaChat() {
  return (
    <article className="container py-4">
      <h2 className="text-xl font-bold mb-2 pb-4 border-b border-grey">
        ☕ Wanna Chat?
      </h2>
      <ul className="space-y-4 list-disc ml-8">
        <li>
          @ me on <a href="https://twitter.com/danielp_johnson">Twitter</a>{" "}
          about any of the following topics! 💬
        </li>
        <li>
          <span className="font-bold">ReactJS:</span> I would love to hear about
          your projects, or help you find helpful resources?
        </li>
        <li>
          <span className="font-bold">JS:</span> If you require any resources,
          course suggestions or app ideas let me know!
        </li>
        <li>
          <span className="font-bold">HTML/CSS:</span> If you want someone to
          work with on a project and I am free, then I will happily collaborate.
        </li>
        <li>
          <span className="font-bold">Nuxt/Vue:</span> I've recently started
          with Nuxt and Vue.js I would love to share your wisdom and knowledge
        </li>
        <li>
          <span className="font-bold">Psychology:</span> I love to talk about
          this topic feel free to ask me any questions.
        </li>
        <li>
          <span className="font-bold">Neuroscience:</span> My chosen topics are
          Default Mode Network, Perceptual Priming, Implicit Memory and Mental
          Imagery
        </li>
        <li>
          <span className="font-bold">Have any question:</span> Contact me here
          and I will try to respond quickly
        </li>
        <li>
          <span className="font-bold">Other:</span> Talk to me about your
          favourite video game, I causally play Fortnite or what you are
          currently watching? Suggestions always appreciated!
        </li>
      </ul>
    </article>
  );
}

export default WannaChat;
