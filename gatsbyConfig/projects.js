module.exports = [
  {
    title: "Tribute Page",
    path: "tributepage",
    imageSrc: "../../../images/responsive-img/tribute-page/tribute-page.png",
    type: "responsive",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti iure eiu.`,
    codepenLink: "https://codepen.io/danielphilipjohnson/full/VwaJrPg",
    githubLink:
      "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/1.Tribute-Page",
    projectLink: "#",
    badges: ["HTML5", "CSS", "Responsive", "freecodecamp"],
    details: {
      overview: `I took FreeCodeCamp responsive web design certificate to improve my front end skills after udacity. The focus was on applying Visual Designs with a combination of typography, color theory, graphics, animation, page layout, and to deliver my message. To apply accessibility to include people with visual, auditory, mobility, or cognitive disabilities. Then make a responsive web design that works and looks great on all devices.
      The first project I took was a tribute page, over time it has 
      changed from a basic design I did for Dr. Norman Borlaug to what 
      it is currently. The person I choose for my tribute page is:
       Jarad Anthony Higgins. My reason was to highlight programs that support 
       the younger generation battling addiction, anxiety and depression. 
       To promote the younger generation to speak about their feelings openly.
      `,
      goals: `I wanted the colors to reflect Juice Wrld posthumous album 'Legends Never Die'. For the website I included youtube iFrame linking to top songs from the album.Then I used spotify embed and blended them into the website. I decided to use only vanilla CSS, test my knowledge of flex and grid for the layout and to make it fully responsive on all devices. After finishing Advanced CSS and Sass course on Udemy I wanted to use basic animations to my website to make it interactive.
      `,
      lessonsLearned: ` In this project I started to test my understanding of Grid and Flex layout.`,
      process: `
      <p>I followed the freecodecamp user story:</p>
          <ul>             
          <li><b>User Story #1:</b> My tribute page should have an element with a corresponding id="main", which contains all other elements.</li>
          <li><b>User Story #2:</b> I should see an element with a corresponding id="title", which contains a string (i.e. text) that describes the subject of the tribute page (e.g. "Dr. Norman Borlaug").</li>
          <li><b>User Story #3:</b> I should see a div element with a corresponding id="img-div".</li>
          <li><b>User Story #4:</b> Within the img-div element, I should see an img element with a corresponding id="image".</li>
          <li><b>User Story #5:</b> Within the img-div element, I should see an element with a corresponding id="img-caption" that contains textual content describing the image shown in img-div.</li>
          <li><b>User Story #6:</b> I should see an element with a corresponding id="tribute-info", which contains textual content describing the subject of the tribute page.</li>
          <li><b>User Story #7:</b> I should see an element with a corresponding id="tribute-link", which links to an outside site that contains additional information about the subject of the tribute page. HINT: You must give your element an attribute of target and set it to _blank in order for your link to open in a new tab (i.e. target="_blank").</li>
          <li><b>User Story #8:</b> The img element should responsively resize, relative to the width of its parent element, without exceeding its original size.</li>
          <li><b>User Story #9:</b> The img element should be centered within its parent element.</li>
          </ul>
      <p>Then decided on the best layout of the content and made a design in figma. Finally I scaffolded the HTML and started to style it then finished with adding SEO</p>
      `,
      mobileView: `../../../images/responsive-img/tribute-page/tribute-page-mobile.png`,
      tabletView: `../../../images/responsive-img/tribute-page/tribute-page-tablet.png`,
      toolLogos: ["Html", "CSS"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "JavaScript",
          src: "../../../images/about-logos/javascript.svg",
          about: `JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.`,
        },
      ],
    },
  },
  {
    title: "Survey Form",
    path: "surveyform",
    imageSrc: "../../../images/responsive-img/survey/survey-form.png",
    type: "responsive",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti iure eius.`,
    codepenLink: "https://codepen.io/danielphilipjohnson/full/oNxabPN",
    githubLink:
      "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/2.Survey_form",
    projectLink: "#",
    badges: ["HTML5", "CSS", "Responsive", "freecodecamp"],
    details: {
      overview: `For the second project of Freecodecamp responsive web design certificate I built a survey form that used a minimalistic style with a soft blue background.. The focus was on applying Visual Designs with a combination of typography, color theory, graphics, animation, page layout, and to deliver my message. To apply accessibility to include people with visual, auditory, mobility, or cognitive disabilities. Then make a responsive web design that works and looks great on all devices.`,
      goals: `I wanted to make a great form that was responsive and worked on all devices. To use both flex and grid for the layout. I used a column for layout for the main content using 1fr for mobile and for tablet and for desktop 1fr 2fr. I also wanted to style form elements and make a custom select to make it visually appealing.`,
      lessonsLearned: `I learned that styling a custom select can create problems when using different browsers there are cross browser compatible issues. I had to put in a lot of research into browser extensions for placeholders and hiding the appearance of the select arrow. Some elements can be styled like <form> and simple <input />. However, <input type="search"> is more difficult to style and some elements can't be styled thoroughly using CSS like <input type="file"> . Using custom form styles that rely on JavaScript are problematic for those who don't have JavaScript running.`,
      process: `<p>I followed the freecodecamp user story:</p>
      <ul>
                         
      <li><b>User Story #1:</b> I can see a title with id="title" in H1 sized text.</li>
      <li><b>User Story #2:</b> I can see a short explanation with id="description" in P sized text.</li>
      <li><b>User Story #3:</b> I can see a form with id="survey-form".</li>
      <li><b>User Story #4: </b>Inside the form element, I am required to enter my name in a field with id="name".</li>
      <li><b>User Story #5: </b>Inside the form element, I am required to enter an email in a field with id="email".</li>
      <li><b>User Story #6:</b> If I enter an email that is not formatted correctly, I will see an HTML5 validation error.</li>
      <li><b>User Story #7: </b>Inside the form, I can enter a number in a field with id="number".</li>
      <li><b>User Story #8:</b> If I enter non-numbers in the number input, I will see an HTML5 validation error.</li>
      <li><b>User Story #9:</b> If I enter numbers outside the range of the number input, which are defined by the min and max attributes, I will see an HTML5 validation error.</li>
      <li><b>User Story #10:</b> For the name, email, and number input fields inside the form I can see corresponding labels that describe the purpose of each field with the following ids: id="name-label", id="email-label", and id="number-label".</li>
      <li><b>User Story #11: </b>For the name, email, and number input fields, I can see placeholder text that gives me a description or instructions for each field.</li>
      <li><b>User Story #12:</b> Inside the form element, I can select an option from a dropdown that has a corresponding id="dropdown".</li>
      <li><b>User Story #13:</b> Inside the form element, I can select a field from one or more groups of radio buttons. Each group should be grouped using the name attribute.</li>
      <li><b>User Story #14: </b>Inside the form element, I can select several fields from a series of checkboxes, each of which must have a value attribute.</li>
      <li><b>User Story #15:</b> Inside the form element, I am presented with a textarea at the end for additional comments.</li>
      <li><b>User Story #16: </b>Inside the form element, I am presented with a button with id="submit" to submit all my inputs.</li>
      </ul>
      <p>Then decided on the best layout of the content and made a design in figma. Finally I scaffolded the HTML and started to style it then finished with adding SEO</p>
      `,
      mobileView: `../../../images/responsive-img/survey/survey-form-mobile.png`,
      tabletView: `../../../images/responsive-img/survey/survey-form-tablet.png`,
      toolLogos: ["JavaScript", "React", "Redux", "GraphQL"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "JavaScript",
          src: "../../../images/about-logos/javascript.svg",
          about: `JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.`,
        },
      ],
    },
  },
  {
    title: "Product Landing",
    path: "productlanding",
    imageSrc:
      "../../../images/responsive-img/product-landing/product-landing.png",
    type: "responsive",
    description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti.`,
    codepenLink: "https://codepen.io/danielphilipjohnson/full/LYNgrGV",
    githubLink:
      "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/3.Product-Landing-Page",
    projectLink: "#",
    badges: ["HTML5", "CSS", "Responsive", "freecodecamp"],
    details: {
      overview: `For the third project of Freecodecamp responsive Design I built a product Landing. I wanted to mimic the apple product page and add a twist to it. Keep it clean and minimal. The focus was on applying Visual Designs with a combination of typography, color theory, graphics, animation, page layout, and to deliver my message. To apply accessibility to include people with visual, auditory, mobility, or cognitive disabilities. Then make a responsive web design that works and looks great on all devices.`,
      goals: `My goal for this project was to implement a sticky navbar that drops down on scroll, to make a hamburger button with JavaScript, to use CSS with variables in my stylesheet and mimic apples design. As a bonus I added an embedded youtube video that links to an apple product.`,
      lessonsLearned: `What I learnt was how to make a sticky navbar with JavaScript after doing lots of research. Some good resources are “https://css-tricks.com/sticky-smooth-active-nav/”, “https://gomakethings.com/how-to-create-a-sticky-navigation-with-only-css/”, “https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_sticky” `,
      process: `<p>I followed the freecodecamp user story:</p>
      <li><b>User Story #1:</b> My product landing page should have a header element with a corresponding id="header".</li>
      <li><b>User Story #2:</b> I can see an image within the header element with a corresponding id="header-img". A company logo would make a good image here.</li>
      <li><b>User Story #3:</b> Within the #header element I can see a nav element with a corresponding id="nav-bar".</li>
      <li><b>User Story #4:</b>I can see at least three clickable elements inside the nav element, each with the class nav-link.</li>
      <li><b>User Story #5:</b> When I click a .nav-link button in the nav element, I am taken to the corresponding section of the landing page.</li>
      <li><b>User Story #6:</b> I can watch an embedded product video with id="video".</li>
      <li><b>User Story #7:</b> My landing page has a form element with a corresponding id="form".</li>
      <li><b>User Story #8:</b> Within the form, there is an input field with id="email" where I can enter an email address.</li>
      <li><b>User Story #9:</b> The #email input field should have placeholder text to let the user know what the field is for.</li>
      <li><b>User Story #10:</b> The #email input field uses HTML5 validation to confirm that the entered text is an email address.</li>
      <li><b>User Story #11:</b> Within the form, there is a submit input with a corresponding id="submit".</li>
      <li><b>User Story #12:</b> When I click the #submit element, the email is submitted to a static page (use this mock URL: https://www.freecodecamp.com/email-submit).</li>
      <li><b>User Story #13: </b>The navbar should always be at the top of the viewport.</li>
      <li><b>User Story #14: </b>My product landing page should have at least one media query.</li>
      <li><b>User Story #15:</b> My product landing page should utilize CSS flexbox at least once.</li>
      </ul>
      <p>Then decided on the best layout of the content and made a design in figma. Finally I scaffolded the HTML and started to style it then finished with adding SEO</p>
      `,
      mobileView: `../../../images/responsive-img/product-landing/product-landing-mobile.png`,
      tabletView: `../../../images/responsive-img/product-landing/product-landing-tablet.png`,
      toolLogos: ["JavaScript", "React", "Redux", "GraphQL"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "JavaScript",
          src: "../../../images/about-logos/javascript.svg",
          about: `JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.`,
        },
      ],
      reusablecomponents: null,
    },
  },
  {
    title: "Technical Document",
    path: "technicaldocument",
    imageSrc:
      "../../../images/responsive-img/technical-documentation/technical-documentation.png",
    type: "responsive",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti iure.`,
    codepenLink: "https://codepen.io/danielphilipjohnson/full/PoNVJLW",
    githubLink:
      "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/4.Technical-Documentation-Page",
    projectLink: "#",
    badges: ["HTML5", "CSS", "Responsive", "freecodecamp"],
    details: {
      overview: `For the fourth project of Freecodecamp responsive Design I built a technical documentation page Landing. I decided to mix the style from MDN Web Docs (https://developer.mozilla.org/en-US/docs/) page and react.js documentation. Keep it clean and minimal. The focus was on applying Visual Designs with a combination of typography, color theory, graphics, animation, page layout, and to deliver my message. To apply accessibility to include people with visual, auditory, mobility, or cognitive disabilities. Then make a responsive web design that works and looks great on all devices.`,
      goals: `The goal was to build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/NdrKKL. I used HTML and CSS to build a responsive design that looks great on all layouts.`,
      lessonsLearned: `What I learnt during this project was how to style coding elements inside the documentation`,
      process: `<p>I followed the freecodecamp user story:</p>
      <li><b>User Story #1:</b> I can see a main element with a corresponding id="main-doc", which contains the page's main content (technical documentation).</li>
      <li><b>User Story #2:</b> Within the #main-doc element, I can see several section elements, each with a class of main-section. There should be a minimum of 5.</li>
      <li><b>User Story #3:</b> The first element within each .main-section should be a header element which contains text that describes the topic of that section.</li>
      <li><b>User Story #4:</b> Each section element with the class of main-section should also have an id that corresponds with the text of each header contained within it. Any spaces should be replaced with underscores (e.g. The section that contains the header "JavaScript and Java" should have a corresponding id="JavaScript_and_Java").</li>
      <li><b>User Story #5:</b> The .main-section elements should contain at least 10 p elements total (not each).</li>
      <li><b>User Story #6:</b> The .main-section elements should contain at least 5 code elements total (not each).</li>
      <li><b>User Story #7:</b> The .main-section elements should contain at least 5 li items total (not each).</li>
      <li><b>User Story #8: </b>I can see a nav element with a corresponding id="navbar".</li>
      <li><b>User Story #9: </b>The navbar element should contain one header element which contains text that describes the topic of the technical documentation.</li>
      <li><b>User Story #10: </b>Additionally, the navbar should contain link (a) elements with the class of nav-link. There should be one for every element with the class main-section.</li>
      <li><b>User Story #11:</b> The header element in the navbar must come before any link (a) elements in the navbar.</li>
      <li><b>User Story #12:</b> Each element with the class of nav-link should contain text that corresponds to the header text within each section (e.g. if you have a "Hello world" section/header, your navbar should have an element which contains the text "Hello world").</li>
      <li><b>User Story #13:</b> When I click on a navbar element, the page should navigate to the corresponding section of the main-doc element (e.g. If I click on a nav-link element that contains the text "Hello world", the page navigates to a section element that has that id and contains the corresponding header.</li>
      <li><b>User Story #14:</b> On regular sized devices (laptops, desktops), the element with id="navbar" should be shown on the left side of the screen and should always be visible to the user.</li>
      <li><b>User Story #15: </b>My Technical Documentation page should use at least one media query.</li>
      </ul>
      <p>Then decided on the best layout of the content and made a design in figma. Finally I scaffolded the HTML and started to style it then finished with adding SEO</p>
      `,
      mobileView: `../../../images/responsive-img/technical-documentation/technical-documentation-mobile.png`,
      tabletView: `../../../images/responsive-img/technical-documentation/technical-documentation-tablet.png`,
      toolLogos: ["JavaScript", "React", "Redux", "GraphQL"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "JavaScript",
          src: "../../../images/about-logos/javascript.svg",
          about: `JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.`,
        },
      ],
      reusablecomponents: null,
    },
  },
  {
    title: "Portfolio",
    path: "portfolio",
    imageSrc: "../../../images/responsive-img/portfolio/portfolio.jpg",
    type: "responsive",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti iure.`,
    codepenLink: "https://codepen.io/danielphilipjohnson/full/JjXmZGj",
    githubLink:
      "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage",
    projectLink: "#",
    badges: ["HTML5", "CSS", "Responsive", "freecodecamp"],
    details: {
      overview: `For the final project of Freecodecamp responsive Design I built a Single page application portfolio that contains all my socials and links to my work. I used a purple, pink and blue color scheme that is similar to my twitter. The focus was on applying Visual Designs with a combination of typography, color theory, graphics, animation, page layout, and to deliver my message. To apply accessibility to include people with visual, auditory, mobility, or cognitive disabilities. Then make a responsive web design that works and looks great on all devices.`,
      goals: `The goal of this project was to build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/zNBOYG. I decided to alter the design a lot. I listed my projects in a portfolio section by making card components. I included a contact form, added a testimonial section, listed my technical skills with logos and put social icons on my jumbotron.`,
      lessonsLearned: `There was so much custom CSS I had to resort to using a preproccesor SASS to make the CSS more modular.`,
      process: `
      <p>I followed the freecodecamp user story:</p>
      <ul>
      <li><b>User Story #1:</b> My portfolio should have a welcome section with an id of welcome-section.</li>
      <li><b>User Story #2:</b> The welcome section should have an h1 element that contains text.</li>
      <li><b>User Story #3:</b> My portfolio should have a projects section with an id of projects.</li>
      <li><b>User Story #4:</b> The projects section should contain at least one element with a class of project-tile to hold a project.</li>
      <li><b>User Story #5:</b> The projects section should contain at least one link to a project.</li>
      <li><b>User Story #6:</b> My portfolio should have a navbar with an id of navbar.</li>
      <li><b>User Story #7:</b> The navbar should contain at least one link that I can click on to navigate to different sections of the page.</li>
      <li><b>User Story #8:</b> My portfolio should have a link with an id of profile-link, which opens my GitHub or FCC profile in a new tab.</li>
      <li><b>User Story #9:</b> My portfolio should have at least one media query.</li>
      <li><b>User Story #10: </b>The height of the welcome section should be equal to the height of the viewport.</li>
      <li><b>User Story #11:</b> The navbar should always be at the top of the viewport.</li>
      </ul>
      <p>Then decided on the best layout of the content and made a design in figma. Finally I scaffolded the HTML and started to style it then finished with adding SEO</p>
      `,
      mobileView: `../../../images/responsive-img/portfolio/portfolio-mobile.png`,
      tabletView: `../../../images/responsive-img/portfolio/portfolio-tablet.jpg`,
      toolLogos: ["JavaScript", "React", "Redux", "GraphQL"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "JavaScript",
          src: "../../../images/about-logos/javascript.svg",
          about: `JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.`,
        },
      ],
      reusablecomponents: null,
    },
  },
  {
    title: "Edge Ledger",
    path: "edgeledger",
    imageSrc: "../../../images/responsive-img/edge-ledger/edge-ledger.jpg",
    type: "responsive",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti iure.`,
    codepenLink: "#",
    githubLink: "#",
    projectLink: "#",
    badges: ["HTML5", "CSS", "Responsive", "Sass"],
    details: {
      overview: `I took Modern HTML & CSS From The Beginning (Including Sass) on Udemy from Brad Traversy. I wanted to refresh my front-end skills and evaluate my performance. As well as breaking the reliance on using CSS framework like Bootstrap to design the user interface. With react.js using framework is not as common.One of the projects was building Edge Ledger with flexbox. After the lessons, I took the screenshot of his website and made it my own.`,
      goals: `I wanted to assimilate the design without looking at the source code and to make a website similar to quickbook. I decided to test my knowledge of HTML and CSS. I wanted a rapid prototype so I used fontawesome icons and unsplash for images. I created CSS variables to save the default styling of some items.I built some utility classes to speed up designing the webpage.I styled my own navbar so that the layout changes based on devices. For mobile and tablet devices I was inspired by quickbooks nav. On Desktop I wanted the navbar to stick to the top which was achieved by using js and jquery. When clicking on a navbar item the web page scrolls to that section. A little bonus I added was when clicking on the images a lightbox appears with text.`,
      lessonsLearned: `In this project I started to test my understanding of:
      Building with an HTML5 Semantic Layout,
      Using CSS Fundamentals and CSS Variables,
      Testing my Knowledge of Flexbox Layout,
      Building Responsive Design With Media Queries, and
      Using CSS Units - rem, em, vh, vw
      `,
      process: `<p>I followed the design made by Brad Traversy:</p>
      <p>Then decided on the best layout of the content and made a design in figma. Finally I scaffolded the HTML and started to style it, then finished with adding SEO</p>
      `,
      mobileView: `../../../images/responsive-img/edge-ledger/edge-ledger-mobile.png`,
      tabletView: `../../../images/responsive-img/edge-ledger/edge-ledger-tablet.jpg`,
      toolLogos: ["HTML", "CSS"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
      ],
      reusablecomponents: null,
    },
  },
  {
    title: "Vozsy News",
    path: "vozsynews",
    imageSrc: "../../../images/responsive-img/vozsy-news/vozsy-news.png",
    type: "responsive",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti iure.`,
    codepenLink: "#",
    githubLink: "#",
    projectLink: "#",
    badges: ["HTML5", "CSS", "Responsive", "Sass"],
    details: {
      overview: `I took Modern HTML & CSS From The Beginning (Including Sass) on Udemy from Brad Traversy. I wanted to refresh my front-end skills and evaluate my performance. As well as breaking the reliance on using CSS framework like Bootstrap to design the user interface. With react.js using framework is not as common.After completing the course I tested all of my knowledge with a final project Vozsy news. `,
      goals: `I wanted to build a typical news website and test my knowledge of HTML, CSS and SASS. I primarily used the preprocessor SASS for this project as it was almost 1000 lines of styling. I wanted a rapid prototype for this project quickly to test my ability. I used fontawesome for social icons at the bottom of the page and applied an animation hover effect that shows the brands color. I built utility classes to speed up the design and reset the CSS. I wanted to start with the mobile design and work my way up to other devices. I relied heavily on column layout.`,
      lessonsLearned: `In this project I started to test my understanding of:
                   
      Building with an HTML5 Semantic Layout,
      Using CSS Fundamentals and CSS Variables,
      Testing my Knowledge of Flexbox Layout,
      Building Responsive Design With Media Queries, and
      Using CSS Units - rem, em, vh, vw
      `,
      process: `<p>I followed the design made by Brad Traversy:</p>
      <p>Then decided on the best layout of the content and made a design in figma. Finally I scaffolded the HTML and started to style it, then finished with adding SEO</p>
      `,
      mobileView: `../../../images/responsive-img/vozsy-news/vozsy-news-mobile.png`,
      tabletView: `../../../images/responsive-img/vozsy-news/vozsy-news-tablet.jpg`,
      toolLogos: ["HTML", "CSS"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
      ],
      reusablecomponents: null,
    },
  },
  {
    title: "Scenic Cornwall",
    path: "sceniccornwall",
    imageSrc: "../../../images/sass-advanced/natours/natours.png",
    type: "responsive",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti iure.`,
    codepenLink: "#",
    githubLink: "https://github.com/danielphilipjohnson/natours",
    projectLink: "https://danielphilipjohnson.github.io/natours/",
    badges: ["HTML5", "SASS", "Responsive"],
    details: {
      overview: `I took Advanced CSS and Sass: Flexbox, Grid, Animations and More! by Jonas Schmedtmann on Udemy. I wanted to improve my CSS by mastering cutting-edge layout technologies Flexbox and CSS Grid. Ensure all my projects are built responsive layouts for all kinds of devices and situations. Further my knowledge of how CSS works behind the scenes and test my ability of architecting large CSS codebases for reusability. Build a maintainable Sass codebase.
      while also testing my knowledge. The first project was Natours
      `,
      goals: `To build with mobile first design in mind and progressively built the design up. To ensure my CSS queries are rendered quickly. Start to apply an architectural structure 7-1 CSS Architecture and using Block-Element-Modifier in my Sass. To think about how CSS is parsed while making styles and heavily use Sass.`,
      lessonsLearned: `During the project I had learned a lot: First I learned how CSS parsed into a tree, how specificity works, values are processed and how style inheritance works. The benefits of starting with a mobile first design and how it makes writing styles much easier. How to use the NPM ecosystem for development and hope to process and compile Sass. How to utilise NPM to make the browser reload to see style changes in real time. How to prefix and compress CSS files. Used CSS to make animations with @keyframes, animation and transition and used advanced selectors, pseudo-classes and pseudo-elements. I applied a CSS Architecture, Components and BEM. I focused heavily on Sass using: Variables and Nesting, Implementing the 7-1 CSS Architecture with Sass, Mixins, Extends and Functions and Sass Mixins to Write Media Queries.`,
      process: `<p>I followed the design made by Jonas Schmedtmann:</p>
      <p>I followed along with the design and added some personal touches</p>`,

      mobileView: `../../../images/sass-advanced/natours/natours-mobile.png`,
      tabletView: `../../../images/sass-advanced/natours/natours-tablet.png`,
      toolLogos: ["HTML5", "CSS", "SASS", "Responsive"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "Sass",
          src: "../../../images/about-logos/sass.svg",
          about: `CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS`,
        },
      ],
      reusablecomponents: null,
    },
  },
  {
    title: "Nexter",
    path: "nexter",
    imageSrc: "../../../images/sass-advanced/nexters/nexters.png",
    type: "responsive",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti iure.`,
    codepenLink: "#",
    githubLink: "https://github.com/danielphilipjohnson/nexter",
    projectLink: "https://danielphilipjohnson.github.io/nexter/",
    badges: ["HTML5", "CSS", "SASS", "Responsive"],
    details: {
      overview: `I took Advanced CSS and Sass: Flexbox, Grid, Animations and More! by Jonas Schmedtmann on Udemy. I wanted to improve my CSS by mastering cutting-edge layout technologies Flexbox and CSS Grid. Ensure all my projects are built responsive layouts for all kinds of devices and situations. Further my knowledge of how CSS works behind the scenes and test my ability of architecting large CSS codebases for reusability. Build a maintainable Sass codebase.
      while also testing my knowledge.  The last project was Nexter`,
      goals: `In this project I wanted to heavily focus on using grid for layout and now I wanted to tie all my knowledge together. Mobile first, CSS media queries,7-1 CSS Architecture and using Sass
      `,
      lessonsLearned: `In summary after the Advanced CSS and Sass: Flexbox, Grid, Animations and More! by Jonas Schmedtmann. I identified my weaknesses with Sass and improved upon it. I avoided style inheritance issues, specificity issues and improved computing values with REM. Encountered less responsive issues when making designs. My projects started to come to life and feel less static with animations. I now have more confidence with building animations. I started to use the NPM ecosystem more comfortably. Overall, I feel more confident in my Front-End skills and improved in areas that needed updating.
      `,
      process: `<p>I followed the design made by Jonas Schmedtmann:</p>
      <p>I followed along with the design and added some personal touches</p>`,
      mobileView: `../../../images/sass-advanced/nexters/nexters-mobile.png`,
      tabletView: `../../../images/sass-advanced/nexters/nexters-tablet.png`,
      toolLogos: ["JavaScript", "CSS", "Sass"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "Sass",
          src: "../../../images/about-logos/sass.svg",
          about: `CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS`,
        },
      ],
      reusablecomponents: null,
    },
  },
  {
    title: "Trillo",
    path: "trillo",
    imageSrc: "../../../images/sass-advanced/trilo/trilo.png",
    type: "responsive",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti iure.`,
    codepenLink: "#",
    githubLink: "https://github.com/danielphilipjohnson/trilo",
    projectLink: "https://danielphilipjohnson.github.io/trilo/",
    badges: ["HTML5", "CSS", "SASS", "Responsive"],
    details: {
      overview: `I took Advanced CSS and Sass: Flexbox, Grid, Animations and More! by Jonas Schmedtmann on Udemy. I wanted to improve my CSS by mastering cutting-edge layout technologies Flexbox and CSS Grid. Ensure all my projects are built responsive layouts for all kinds of devices and situations. Further my knowledge of how CSS works behind the scenes and test my ability of architecting large CSS codebases for reusability. Build a maintainable Sass codebase.
      while also testing my knowledge. The second project was trillo.
      `,
      goals: `In this project I wanted to heavily focus on using flexbox for layout. To continue to build with mobile first design in mind and progressively built the design up. Looking for ways to improve the performance of CSS queries and render quickly in google lighthouse. Furthered, my experience of the architectural structure 7-1 CSS Architecture and Block-Element-Modifier. Use Sass more efficiently. 
      `,
      lessonsLearned: `My understanding of how CSS is parsed into a tree was dramatically improved. I avoided style inheritance issues, specificity issues and improved computing values with REM. My responsive design started to be more flexible and less issues arised. I started to build animations much quicker.Furthered my knowledge of the NPM ecosystem. My knowledge of Sass improved dramatically and the readability of the styling was improved.`,
      process: `<p>I followed the design made by Jonas Schmedtmann:</p>
      <p>I followed along with the design and added some personal touches</p>`,
      mobileView: `../../../images/sass-advanced/trilo/trilo-mobile.png`,
      tabletView: `../../../images/sass-advanced/trilo/trilo-tablet.png`,
      toolLogos: ["JavaScript", "CSS", "Sass"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "Sass",
          src: "../../../images/about-logos/sass.svg",
          about: `CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS`,
        },
      ],
      reusablecomponents: null,
    },
  },
  {
    title: "Basic Spotify Clone",
    path: "spotifyclone",
    imageSrc: "../../../images/material-projects/spotify-clone.png",
    type: "material",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti iure.`,
    codepenLink: "#",
    githubLink: "#",
    projectLink: "#",
    badges: ["HTML5", "Materialize", "Responsive", "freecodecamp"],
    details: {
      overview: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Architecto explicabo cupiditate perferendis ad unde iure
      necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
      deleniti distinctio dolores quaerat ut nihil aliquid!Provident
      assumenda accusamus minima excepturi laudantium nisi sapiente
      perspiciatis doloribus fugit ratione ea delectus commodi
      doloremque ullam aperiam eos mollitia pariatur molestiae,
      veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
      goals: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Architecto explicabo cupiditate perferendis ad unde iure
      necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
      deleniti distinctio dolores quaerat ut nihil aliquid!Provident
      assumenda accusamus minima excepturi laudantium nisi sapiente
      perspiciatis doloribus fugit ratione ea delectus commodi
      doloremque ullam aperiam eos mollitia pariatur molestiae,
      veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
      lessonsLearned: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
      dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
      quaerat similique delectus aspernatur aut cum. Totam est modi
      accusantium tempore! Sed, porro!`,
      process: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
      dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
      quaerat similique delectus aspernatur aut cum. Totam est modi
      accusantium tempore! Sed, porro!`,
      mobileView: `https://source.unsplash.com/user/erondu/1600x900`,
      tabletView: `https://source.unsplash.com/user/erondu/1600x900`,
      toolLogos: ["HTML", "JavaScript", "CSS", "Sass"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "Sass",
          src: "../../../images/about-logos/sass.svg",
          about: `CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS`,
        },
      ],
      reusablecomponents: null,
    },
  },
  // {
  //   title: "Basic Messenger Clone",
  //   path: "messengerclone",
  //   imageSrc: "../../../images/material-projects/messenger-clone.png",
  //   type: "material",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure.`,
  //   codepenLink: "#",
  //   githubLink: "#",
  //   projectLink: "#",
  //   badges: ["HTML5", "Materialize", "Responsive", "freecodecamp"],
  //   details: {
  //     overview: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     goals: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     lessonsLearned: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     process: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     mobileView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     tabletView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     toolLogos: ["JavaScript", "React", "Redux", "GraphQL"],
  //     toolUsed: [
  //       {
  //         name: "JavaScript",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "React",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "Redux",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "GraphQL",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //     ],
  //     reusablecomponents: null,
  //   },
  // },
  {
    title: "Random Quote Machine",
    path: "quotemachine",
    imageSrc: "../../../images/front-end-framework/quote/quote.png",
    type: "js",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti iure eius.`,
    codepenLink: "https://codepen.io/danielphilipjohnson/full/bGEgaoo",
    githubLink:
      "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/1.%20Build%20a%20Random-Quote-Machine",
    projectLink: "#",
    badges: ["HTML5", "CSS", "Front-End", "freecodecamp"],
    details: {
      overview: `I took FreeCodeCamp Front End Development Libraries Projects to improve my front end skills. I wanted to improve my JavaScript skills and gain experience using a frontend framework. With the styling I kept it simple with CSS and used CSS variables.`,
      goals: `For this project I decided to make the random quote machine mirror a twitter post. You can generate a new quote via a button and click the share button which will make a twitter post you can then publish.`,
      lessonsLearned: `In this project I started to test my understanding of JavaScript.`,
      process: `
      <p>I followed the freecodecamp user story:</p>
          <ul>            
          <li><b>User Story #1:</b> I can see a wrapper element with a corresponding id="quote-box".</li>
          <li><b>User Story #2:</b> Within #quote-box, I can see an element with a corresponding id="text".</li>
          <li><b>User Story #3:</b> Within #quote-box, I can see an element with a corresponding id="author".</li>
          <li><b>User Story #4:</b> Within #quote-box, I can see a clickable element with a corresponding id="new-quote".</li>
          <li><b>User Story #5:</b> Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".</li>
          <li><b>User Story #6:</b> On first load, my quote machine displays a random quote in the element with id="text".</li>
          <li><b>User Story #7:</b> On first load, my quote machine displays the random quote's author in the element with id="author".</li>
          <li><b>User Story #8:</b> When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.</li>
          <li><b>User Story #9:</b> My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.</li>
          <li><b>User Story #10:</b>  I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.</li>
          <li><b>User Story #11:</b>  The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.</li>
          </ul>
 `,
      mobileView: `../../../images/front-end-framework/quote/quote-mobile.png`,
      tabletView: `./../../images/front-end-framework/quote/quote-tablet.png`,
      toolLogos: ["HTML", "JavaScript", "CSS", "Sass"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "Sass",
          src: "../../../images/about-logos/sass.svg",
          about: `CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS`,
        },
      ],
      reusablecomponents: null,
    },
  },
  {
    title: "Markdown Previewer",
    path: "markdownpreviewer",
    imageSrc: "../../../images/front-end-framework/markdown/markdown.png",
    type: "js",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti iure eius itaque mollitia veniam
    vitae earum nesciunt voluptate.`,
    codepenLink: "https://codepen.io/danielphilipjohnson/full/vYLgpjX",
    githubLink:
      "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/2.%20Build%20a%20Markdown%20Previewer",
    projectLink: "#",
    badges: ["HTML5", "CSS", "Front-End", "freecodecamp"],
    details: {
      overview: `I took FreeCodeCamp Front End Development Libraries Projects to improve my front end skills. With this project I wanted to improve my React skills and gain experience using a frontend framework. With the styling I kept it simple with CSS.`,
      goals: `For this project I decided to make the Markdown Previewer mirror tumblr. You can generate a new blog item by writing with markdown.`,
      lessonsLearned: `In this project I started to test my understanding of React.`,
      process: `  <p>I followed the freecodecamp user story:</p>
      <ul>            
      <li><b>User Story #1:</b> I can see a textarea element with a corresponding id="editor".</li>
      <li><b>User Story #2:</b> I can see an element with a corresponding id="preview".</li>
      <li><b>User Story #3:</b> When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
</li>
      <li><b>User Story #4:</b> When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
</li>
      <li><b>User Story #5:</b> When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
</li>
      <li><b>User Story #6:</b> When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.
</li>
</ul> 
`,
      mobileView: `../../../images/front-end-framework/markdown/markdown-mobile.png`,
      tabletView: `../../../images/front-end-framework/markdown/markdown-tablet.png`,
      toolLogos: ["HTML", "React", "CSS", "Sass"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "Sass",
          src: "../../../images/about-logos/sass.svg",
          about: `CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS`,
        },
        {
          name: "React",
          src: "../../../images/about-logos/react.svg",
          about: `React is an open-source, front end, JavaScript library for building user interfaces or UI components.`,
        },
      ],
    },
  },
  {
    title: "Drum Machine",
    path: "drummachine",
    imageSrc: "../../../images/front-end-framework/drumkit/drum.png",
    type: "js",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem eligendi deleniti iure.`,
    codepenLink: "https://codepen.io/danielphilipjohnson/full/mdVRLam",
    githubLink:
      "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/3.%20Build%20a%20Drum%20Machine",
    projectLink: "#",
    badges: ["HTML5", "CSS", "Front-End", "freecodecamp"],
    details: {
      overview: `I took FreeCodeCamp Front End Development Libraries Projects to improve my front end skills. With this project I wanted to improve my React skills and gain experience using a frontend framework. With the styling I kept it simple with CSS.`,
      goals: `For this project I decided to make a drum machine that looks like a Digital audio workstation, investigated using keyboard events and used a common container pattern for  folder structure.`,
      lessonsLearned: `In this project I started to further my knowledge of React, improving structure of my code and keyboard events.`,
      process: `<p>I followed the freecodecamp user story:</p>
      <ul>            
      <li><b>User Story #1:</b>  I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
      </li>
      <li><b>User Story #2:</b> Within #drum-machine I can see an element with a corresponding id="display".</li>
      <li><b>User Story #3:</b> Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
      </li>
      <li><b>User Story #4:</b> Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
      </li>
      <li><b>User Story #5:</b> When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
      </li>
      <li><b>User Story #6:</b> When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).
      </li>
      <li><b>User Story #7:</b> When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).
      </li>
      </ul> 
      `,
      mobileView: `../../../images/front-end-framework/drumkit/drum-mobile.png`,
      tabletView: `../../../images/front-end-framework/drumkit/drum-tablet.png`,
      toolLogos: ["HTML", "React", "CSS", "Sass"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "Sass",
          src: "../../../images/about-logos/sass.svg",
          about: `CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS`,
        },
        {
          name: "React",
          src: "../../../images/about-logos/react.svg",
          about: `React is an open-source, front end, JavaScript library for building user interfaces or UI components.`,
        },
      ],
      reusablecomponents: null,
    },
  },
  {
    title: "Javascript Calculator",
    path: "javascriptcalculator",
    imageSrc: "../../../images/front-end-framework/calculator/calculator.png",
    type: "js",
    description: `I took FreeCodeCamp Front End Development Libraries Projects to improve my front end skills. With this project I wanted to use my React skills to build a functioning calculator. The react app was styled with CSS.`,
    codepenLink: "https://codepen.io/danielphilipjohnson/full/abdpKOv",
    githubLink:
      "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/4.%20Build%20a%20JavaScript%20Calculator",
    projectLink: "#",
    badges: ["HTML5", "CSS", "Front-End", "freecodecamp"],
    details: {
      overview: `I took FreeCodeCamp Front End Development Libraries Projects to improve my front end skills. With this project I wanted to use my React skills to build a functioning calculator. The react app was styled with CSS.`,
      goals: `For this project I decided to make the calculator look like HP 20b Business Consultant. For the math calculations, I used A small, fast JavaScript library for arbitrary-precision decimal arithmetic called big.js.`,
      lessonsLearned: `In this project I successfully used useReducer and built a library for calculation.`,
      process: ` <p>I followed the freecodecamp user story:</p>
      <ul>            
              <li><b>User Story #1:</b> My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".</li>
     <li><b>User Story #2:</b> My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".</li>
     <li><b>User Story #3:</b> My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".</li>
     <li><b>User Story #4:</b> My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".</li>
     <li><b>User Story #5:</b> My calculator should contain a clickable element with an id="clear".</li>
     <li><b>User Story #6:</b> My calculator should contain an element to display values with a corresponding id="display".</li>
     <li><b>User Story #7:</b> At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.</li>
     <li><b>User Story #8:</b> As I input numbers, I should be able to see my input in the element with the id of display.</li>
     <li><b>User Story #9:</b> In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.</li>
     <li><b>User Story #10:</b> When inputting numbers, my calculator should not allow a number to begin with multiple zeros.</li>
     <li><b>User Story #11:</b> When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.</li>
     <li><b>User Story #12:</b> I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.</li>
     <li><b>User Story #13:</b> If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).</li>
     <li><b>User Story #14:</b> Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.</li>
     <li><b>User Story #15:</b> My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).</li></ul>
     `,
      mobileView: `../../../images/front-end-framework/calculator/calculator-mobile.png`,
      tabletView: `../../../images/front-end-framework/calculator/calculator-tablet.png`,
      toolLogos: ["JavaScript", "React", "Redux", "GraphQL"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "Sass",
          src: "../../../images/about-logos/sass.svg",
          about: `CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS`,
        },
        {
          name: "React",
          src: "../../../images/about-logos/react.svg",
          about: `React is an open-source, front end, JavaScript library for building user interfaces or UI components.`,
        },
      ],
      reusablecomponents: null,
    },
  },
  {
    title: "Pomodoro Clock",
    path: "pomodoroclock",
    imageSrc: "../../../images/front-end-framework/pomodoro/pomodoro.png",
    type: "js",
    description: ``,
    codepenLink: "https://codepen.io/danielphilipjohnson/full/OJMWEXZ",
    githubLink:
      "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/5.%20Build%20a%20Pomodoro%20Clock",
    projectLink: "#",
    badges: ["HTML5", "CSS", "Front-End", "freecodecamp"],
    details: {
      overview: `I took FreeCodeCamp Front End Development Libraries Projects to improve my front end skills. With this project I used vanilla JavaScript to build a functioning Pomodoro Clock.`,
      goals: `Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/XpKrrW. I decided to make the Pomodoro Clock look like similar to https://pomofocus.io/ .`,
      lessonsLearned: `In this project I successfully used JavaScript to make a library.`,
      process: `<p>I followed the freecodecamp user story:</p>
      <ul>            
              <li><b>User Story #1:</b> I can see an element with id="break-label" that contains a string (e.g. "Break Length").</li>
     <li><b>User Story #2:</b> I can see an element with id="session-label" that contains a string (e.g. "Session Length").</li>
     <li><b>User Story #3:</b> I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".</li>
     <li><b>User Story #4:</b> I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".</li>
     <li><b>User Story #5:</b> I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5.</li>
     <li><b>User Story #6:</b> I can see an element with a corresponding id="session-length", which by default displays a value of 25.</li>
     <li><b>User Story #7:</b> I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session").</li>
     <li><b>User Story #8:</b> I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).</li>
     <li><b>User Story #9:</b> I can see a clickable element with a corresponding id="start_stop".</li>
     <li><b>User Story #10:</b> I can see a clickable element with a corresponding id="reset".</li>
     <li><b>User Story #11:</b> When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to its default state.</li>
     <li><b>User Story #12:</b> When I click the element with the id of break-decrement, the value within id="break-length" decrements by a value of 1, and I can see the updated value.</li>
     <li><b>User Story #13:</b> When I click the element with the id of break-increment, the value within id="break-length" increments by a value of 1, and I can see the updated value.</li>
     <li><b>User Story #14:</b> When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value.</li>
     <li><b>User Story #15:</b> When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value.</li>
     <li><b>User Story #16:</b> I should not be able to set a session or break length to <= 0.</li>
     <li><b>User Story #17:</b> I should not be able to set a session or break length to > 60.</li>
     <li><b>User Story #18:</b> When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.</li>
     <li><b>User Story #19:</b> If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).</li>
     <li><b>User Story #20:</b> If the timer is running and I click the element with id="start_stop", the countdown should pause.</li>
     <li><b>User Story #21:</b> If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.</li>
     <li><b>User Story #22:</b> When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.</li>
     <li><b>User Story #23:</b> When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.</li>
     <li><b>User Story #24:</b> When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.</li>
     <li><b>User Story #25:</b> When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.</li>
     <li><b>User Story #26:</b> When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep".</li>
     <li><b>User Story #27:</b> The audio element with id="beep" must be 1 second or longer.</li>
     <li><b>User Story #28:</b> The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.</li>
     </ul>
     `,
      mobileView: `../../../images/front-end-framework/pomodoro/pomodoro-mobile.png`,
      tabletView: `../../../images/front-end-framework/pomodoro/pomodoro-tablet.png`,
      toolLogos: ["JavaScript", "React", "Redux", "GraphQL"],
      toolUsed: [
        {
          name: "HTML",
          src: "../../../images/about-logos/html5.svg",
          about: `HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content.`,
        },
        {
          name: "CSS",
          src: "../../../images/about-logos/css.svg",
          about: `CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.`,
        },
        {
          name: "Sass",
          src: "../../../images/about-logos/sass.svg",
          about: `CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS`,
        },
        {
          name: "React",
          src: "../../../images/about-logos/react.svg",
          about: `React is an open-source, front end, JavaScript library for building user interfaces or UI components.`,
        },
      ],
      reusablecomponents: null,
    },
  },
  // {
  //   title: "Recipe Box",
  //   path: "recipebox",
  //   imageSrc: "../../../images/front-end-lib/recipebox.jpg",
  //   type: "js",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure eius itaque mollitia veniam
  //   vitae earum nesciunt voluptate.`,
  //   codepenLink: "https://codepen.io/danielphilipjohnson/full/VwePBBR",
  //   githubLink:
  //     "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Recipe-Box",
  //   projectLink: "#",
  //   badges: ["HTML5", "CSS", "Front-End", "freecodecamp"],
  //   details: {
  //     overview: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     goals: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     lessonsLearned: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     process: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     mobileView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     tabletView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     toolLogos: ["JavaScript", "React", "Redux", "GraphQL"],
  //     toolUsed: [
  //       {
  //         name: "JavaScript",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "React",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "Redux",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "GraphQL",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //     ],
  //     reusablecomponents: null,
  //   },
  // },
  // {
  //   title: "Simon",
  //   path: "simon",
  //   imageSrc: "../../../images/front-end-lib/simon.jpg",
  //   type: "js",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure eius itaque mollitia veniam
  //   vitae earum nesciunt voluptate.`,
  //   codepenLink: "https://codepen.io/danielphilipjohnson/full/QWypLgY",
  //   githubLink:
  //     "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Simon",
  //   projectLink: "#",
  //   badges: ["HTML5", "CSS", "Javascript", "Front-End", "freecodecamp"],
  //   details: {
  //     overview: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     goals: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     lessonsLearned: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     process: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     mobileView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     tabletView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     toolLogos: ["JavaScript", "React", "Redux", "GraphQL"],
  //     toolUsed: [
  //       {
  //         name: "JavaScript",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "React",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "Redux",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "GraphQL",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //     ],
  //     reusablecomponents: null,
  //   },
  // },
  // {
  //   title: "Twitch.tv JSON-API",
  //   path: "twitchclone",
  //   imageSrc: "../../../images/front-end-lib/json-api-project.png",
  //   type: "angular",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure eius itaque mollitia veniam
  //   vitae earum nesciunt voluptate.`,
  //   codepenLink: "https://codepen.io/danielphilipjohnson/full/ZEQezmb",
  //   githubLink:
  //     "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API",
  //   projectLink: "#",
  //   badges: [
  //     "HTML5",
  //     "CSS",
  //     "Javascript",
  //     "Front-End",
  //     "freecodecamp",
  //     "Angular",
  //   ],

  //   details: {
  //     overview: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     goals: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     lessonsLearned: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     process: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     mobileView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     tabletView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     toolLogos: ["JavaScript", "React", "Redux", "GraphQL"],
  //     toolUsed: [
  //       {
  //         name: "JavaScript",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "React",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "Redux",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "GraphQL",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //     ],
  //     reusablecomponents: null,
  //   },
  // },
  // {
  //   title: "Basic Instagram clone",
  //   path: "instagramclone",
  //   imageSrc: "../../../images/front-end-lib/igclone.png",
  //   type: "angular",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure eius itaque mollitia veniam
  //   vitae earum nesciunt voluptate.`,
  //   codepenLink: "https://codepen.io/danielphilipjohnson/full/ZEQezmb",
  //   githubLink:
  //     "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API",
  //   projectLink: "#",
  //   badges: [
  //     "HTML5",
  //     "CSS",
  //     "Javascript",
  //     "Front-End",
  //     "freecodecamp",
  //     "Angular",
  //   ],
  //   details: {
  //     overview: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     goals: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     lessonsLearned: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     process: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     mobileView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     tabletView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     toolLogos: ["JavaScript", "React", "Redux", "GraphQL"],
  //     toolUsed: [
  //       {
  //         name: "JavaScript",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "React",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "Redux",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "GraphQL",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //     ],
  //     reusablecomponents: null,
  //   },
  // },
  // {
  //   title: "Basic Spotify clone",
  //   path: "spotifyclone",
  //   imageSrc: "../../../images/front-end-lib/spotifyclone-angular.png",
  //   type: "angular",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure eius itaque mollitia veniam
  //   vitae earum nesciunt voluptate.`,
  //   codepenLink: "https://codepen.io/danielphilipjohnson/full/ZEQezmb",
  //   githubLink:
  //     "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API",
  //   projectLink: "#",
  //   badges: [
  //     "HTML5",
  //     "CSS",
  //     "Javascript",
  //     "Front-End",
  //     "freecodecamp",
  //     "Angular",
  //   ],
  //   details: {
  //     overview: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     goals: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     lessonsLearned: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     process: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     mobileView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     tabletView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     toolLogos: ["JavaScript", "React", "Redux", "GraphQL"],
  //     toolUsed: [
  //       {
  //         name: "JavaScript",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "React",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "Redux",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "GraphQL",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //     ],
  //     reusablecomponents: null,
  //   },
  // },
  // {
  //   title: "Wiki Viewer",
  //   path: "wikiviewer",
  //   imageSrc: "../../../images/front-end-lib/wikiviewer.png",
  //   type: "js",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure eius itaque mollitia veniam
  //   vitae earum nesciunt voluptate.`,
  //   codepenLink: "https://codepen.io/danielphilipjohnson/full/LYGWYBg",
  //   githubLink:
  //     "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Wiki-Viewer",
  //   projectLink: "#",
  //   badges: ["HTML5", "CSS", "Javascript", "Front-End", "freecodecamp"],
  //   details: {
  //     overview: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     goals: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Architecto explicabo cupiditate perferendis ad unde iure
  //     necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
  //     deleniti distinctio dolores quaerat ut nihil aliquid!Provident
  //     assumenda accusamus minima excepturi laudantium nisi sapiente
  //     perspiciatis doloribus fugit ratione ea delectus commodi
  //     doloremque ullam aperiam eos mollitia pariatur molestiae,
  //     veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
  //     lessonsLearned: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     process: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //     dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //     quaerat similique delectus aspernatur aut cum. Totam est modi
  //     accusantium tempore! Sed, porro!`,
  //     mobileView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     tabletView: `https://source.unsplash.com/user/erondu/1600x900`,
  //     toolUsed: [
  //       {
  //         name: "JavaScript",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "React",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "Redux",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //       {
  //         name: "GraphQL",
  //         src: "https://source.unsplash.com/daily",
  //         about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
  //       dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
  //       quaerat similique delectus aspernatur aut cum. Totam est modi
  //       accusantium tempore! Sed, porro!`,
  //       },
  //     ],
  //     reusablecomponents: null,
  //   },
  // },
];
