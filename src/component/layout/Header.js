import React from "react";

function Header({ title, secondary, subTitle }) {
  return (
    <header className="container">
      <h1 className="lg-heading">
        {title}
        <span className="text-secondary">{secondary}</span>
      </h1>
      <h2 className="sm-heading">{subTitle}</h2>
    </header>
  );
}

export default Header;
