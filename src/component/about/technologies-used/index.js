import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../layout/";

function TechnologiesUsed() {
  return (
    <Layout
      sectionLabel={"Technologies I use"}
      icon={"🏆"}
      iconLabel={"trophy"}
      title={"Technologies I use"}
    >
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
    </Layout>
  );
}

export default TechnologiesUsed;
