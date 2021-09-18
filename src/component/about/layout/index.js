import React from "react";

export default function Layout({
  sectionLabel,
  icon,
  iconLabel,
  title,
  children,
}) {
  return (
    <article className="container" aria-label={sectionLabel}>
      <h2 className="text-2xl font-bold mb-4 pb-4 border-b border-grey">
        <span role="img" aria-label={iconLabel}>
          {icon}
        </span>{" "}
        {title}
      </h2>
      <div>{children}</div>
    </article>
  );
}
