import React from "react";
import Layout from "../layout";

function ValuesAndMissions() {
  return (
    <Layout
      sectionLabel={"my values and missions"}
      icon={"🏆"}
      iconLabel={"trophy"}
      title={"My values and mission"}
    >
      <p className="bio-content">
        I always try to leave the world a better place than yesterday. I try to
        give advice related to programming and personal. I always try 99% of the
        time to help the best I can. If I don't know the answer. I will try my
        hardest to find the answer or find another person that can help you. I
        keep almost all my code 99.9% opensource for others to look at and use
        on{" "}
        <a className="bio-link" href="https://github.com/danielphilipjohnson">
          GitHub
        </a>
        . I want to help you build apps, websites and programs that express your
        ideas.
      </p>
      <p className="bio-content">
        Currently, I'm finishing off my language studies with the Spanish
        language. I know that speaking and reading in the English language is a
        blessing. Many people do not have access to good programming content due
        to it being in English. Providing a language barrier. Also, most
        educational content is not reasonably priced when you convert it to
        other currencies. For instance, Peruvian Soles to Dollars it can make
        courses very expensive. This is something I'm serious about addressing
        and hoping to help with. That's why I volunteer my time and money to
        help those from South America and North America. I want to also make
        educational content that is accessible to as much of the world as
        possible. If you would like to help by converting my future tutorials,
        blog and books to other languages. Please let me know :). I'm happy to
        give you credit. I hope we can all make educational content more
        accessible to those who desire to program can do it.{" "}
      </p>
    </Layout>
  );
}

export default ValuesAndMissions;
