import React from "react";

import { StaticImage } from "gatsby-plugin-image";

const getImage = (imageType) => {
  if (imageType === "atlassian") {
    return (
      <StaticImage
        className="course-logo"
        src="../../../images/course-logos/atlassian.webp"
        alt="uci"
        placeholder="none"
        layout="fixed"
        width={75}
        height={75}
        quality="90"
        formats={["auto", "avif", "webp", "png"]}
      />
    );
  } else if (imageType === "google") {
    return (
      <StaticImage
        className="course-logo"
        src="../../../images/course-logos/google.png"
        alt="google"
        placeholder="none"
        height={75}
        width={75}
        quality="90"
        formats={["auto", "avif", "webp", "png"]}
      />
    );
  } else if (imageType === "hong") {
    return (
      <StaticImage
        className="course-logo"
        src="../../../images/course-logos/hong.png"
        alt="hong"
        placeholder="none"
        height={75}
        width={75}
        quality="90"
        formats={["auto", "avif", "webp", "png"]}
      />
    );
  } else if (imageType === "freecodecamp") {
    return (
      <StaticImage
        className="course-logo"
        src="../../../images/course-logos/freecodecamp.jpeg"
        alt="freecodecamp"
        placeholder="none"
        height={75}
        width={75}
        quality="90"
        formats={["auto", "avif", "webp", "png"]}
      />
    );
  } else if (imageType === "michigan") {
    return (
      <StaticImage
        className="course-logo"
        src="../../../images/course-logos/michigan.png"
        alt="michigan"
        placeholder="none"
        height={75}
        width={75}
        quality="90"
        formats={["auto", "avif", "webp", "png"]}
      />
    );
  } else if (imageType === "plymouth") {
    return (
      <StaticImage
        className="course-logo"
        src="../../../images/course-logos/plymouth.png"
        alt="plymouth"
        placeholder="none"
        height={75}
        width={75}
        quality="90"
        formats={["auto", "avif", "webp", "png"]}
      />
    );
  } else if (imageType === "uci") {
    return (
      <StaticImage
        className="course-logo"
        src="../../../images/course-logos/uci.webp"
        alt="uci"
        placeholder="none"
        height={75}
        width={75}
        quality="90"
        formats={["auto", "avif", "webp", "png"]}
      />
    );
  } else if (imageType === "udemy") {
    return (
      <StaticImage
        className="course-logo"
        src="../../../images/course-logos/udemy.jpeg"
        alt="udemy"
        placeholder="none"
        height={75}
        width={75}
        quality="90"
        formats={["auto", "avif", "webp", "png"]}
      />
    );
  }
  return <p>No image</p>;
};
export default getImage;
