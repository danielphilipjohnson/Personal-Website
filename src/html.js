import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const menuBtn = document.querySelector(".menu-btn");
            const menu = document.querySelector(".menu");
            const menuNav = document.querySelector(".menu-nav");
            const menuBranding = document.querySelector(".menu-branding");
            const navItems = document.querySelectorAll(".nav-item");
            
            // Set Initial State Of Menu
            let showMenu = false;
            
            menuBtn.addEventListener("click", toggleMenu);
            
            function toggleMenu() {
              console.log("function works")
                if (! showMenu) {
                    menuBtn.classList.add("close");
                    menu.classList.add("show");
                    menuNav.classList.add("show");
                    menuBranding.classList.add("show");
                    navItems.forEach((item) => item.classList.add("show"));
            
                    // Set Menu State
                    showMenu = true;
                } else {
                    menuBtn.classList.remove("close");
                    menu.classList.remove("show");
                    menuNav.classList.remove("show");
                    menuBranding.classList.remove("show");
                    navItems.forEach((item) => item.classList.remove("show"));
            
                    // Set Menu State
                    showMenu = false;
                }
            }
            
            
            
            function openTab(evt, tabName) {
              var i, tabcontent, tablinks;
              tabcontent = document.getElementsByClassName("tabcontent");
              for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
              }
              tablinks = document.getElementsByClassName("tablinks");
              for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
              }
              document.getElementById(tabName).style.display = "block";
              evt.currentTarget.className += " active";
            }
            
            
            
            if(document.getElementById("defaultOpen")){
            // Get the element with id="defaultOpen" and click on it
            document.getElementById("defaultOpen").click();
            
            }
    `,
          }}
        />
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
