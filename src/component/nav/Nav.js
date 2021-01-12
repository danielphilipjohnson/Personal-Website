import React, { useState, useRef } from "react";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const menuRef = useRef();
  const navRef = useRef();
  const menuBrandRef = useRef();
  const menuNavRef = useRef();

  const openMenu = () => {
    const htmlMenuNodes = menuNavRef.current.children[1].children;

    var menuItems = Array.from(htmlMenuNodes);

    if (!openNav) {
      // Set Menu State
      setOpenNav(true);
      menuRef.current.classList.add("close");
      navRef.current.classList.add("show");
      menuBrandRef.current.classList.add("show");
      menuNavRef.current.classList.add("show");

      menuItems.forEach((item) => console.log(item.classList.add("show")));
    } else {
      // Set Menu State
      setOpenNav(false);
      menuRef.current.classList.remove("close");

      navRef.current.classList.remove("show");
      menuBrandRef.current.classList.remove("show");
      menuNavRef.current.classList.remove("show");

      menuItems.forEach((item) => console.log(item.classList.remove("show")));
    }
  };
  return (
    <aside>
      <div ref={menuRef} className="menu-btn" onClick={openMenu} role="menu">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <nav className="menu" ref={navRef}>
        <div className="menu-branding" ref={menuBrandRef}>
          <div className="portrait"></div>
        </div>
        <div className="menu-nav show" ref={menuNavRef}>
          <ul>
            <li className="nav-item current">
              <a href="index.html" className="nav-link">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link">
                {" "}
                About Me{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="work.html" className="nav-link">
                {" "}
                My Work{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link">
                {" "}
                How To Reach Me{" "}
              </a>
            </li>
          </ul>
          <div className="icons">
            <a
              href="https://twitter.com/danielp_johnson"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href="https://www.facebook.com/DanielPhilipJohnson"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-philip-johnson/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/danielphilipjohnson/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Nav;
