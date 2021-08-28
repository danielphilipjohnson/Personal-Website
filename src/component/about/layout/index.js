import React from "react";

export default function Layout({
  sectionLabel,
  icon,
  iconLabel,
  title,
  children,
}) {
  return (
    <section className="bio container" aria-label={sectionLabel}>
      <h2 className="bio-section-header">
        <span role="img" aria-label={iconLabel}>
          {icon}
        </span>{" "}
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
