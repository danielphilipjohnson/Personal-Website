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
      <p>I followed the user story:</p>
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
      process: `<p>I followed the user story:</p>
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
      process: `<p>I followed the user story:</p>
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
      process: `<p>I followed the user story:</p>
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
      <p>I followed the user story:</p>
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
  // {
  //   title: "Edge Ledger",
  //   path: "edgeledger",
  //   imageSrc: "../../../images/responsive-img/edgeledger.jpg",
  //   type: "responsive",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure.`,
  //   codepenLink: "#",
  //   githubLink: "#",
  //   projectLink: "#",
  //   badges: ["HTML5", "CSS", "Responsive", "freecodecamp"],
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
  //   title: "Vozsy News",
  //   path: "vozsynews",
  //   imageSrc: "../../../images/responsive-img/vozsynews.png",
  //   type: "responsive",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure.`,
  //   codepenLink: "#",
  //   githubLink: "#",
  //   projectLink: "#",
  //   badges: ["HTML5", "CSS", "Responsive", "freecodecamp"],
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
  //   title: "Scenic Cornwall",
  //   path: "sceniccornwall",
  //   imageSrc: "../../../images/responsive-img/sceniccornwall.jpg",
  //   type: "responsive",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure.`,
  //   codepenLink: "#",
  //   githubLink: "#",
  //   projectLink: "#",
  //   badges: ["HTML5", "SASS", "Responsive", "freecodecamp"],
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
  //   title: "Nexter",
  //   path: "nexter",
  //   imageSrc: "../../../images/responsive-img/nexter.png",
  //   type: "responsive",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure.`,
  //   codepenLink: "#",
  //   githubLink: "#",
  //   projectLink: "#",
  //   badges: ["HTML5", "SASS", "Responsive", "freecodecamp"],
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
  //   title: "Trillo",
  //   path: "trillo",
  //   imageSrc: "../../../images/responsive-img/trillo.png",
  //   type: "responsive",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure.`,
  //   codepenLink: "#",
  //   githubLink: "#",
  //   projectLink: "#",
  //   badges: ["HTML5", "SASS", "Responsive", "freecodecamp"],
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
  //   title: "Presentation",
  //   path: "presentation",
  //   imageSrc: "../../../images/responsive-img/presentation.png",
  //   type: "responsive",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure.`,
  //   codepenLink: "#",
  //   githubLink: "#",
  //   projectLink: "#",
  //   badges: ["HTML5", "CSS", "Responsive", "freecodecamp"],
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
  //   title: "Basic Spotify Clone",
  //   path: "spotifyclone",
  //   imageSrc: "../../../images/material-projects/spotify-clone.png",
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
  // {
  //   title: "Random Quote Machine",
  //   path: "quotemachine",
  //   imageSrc: "../../../images/front-end-lib/quotemachine.png",
  //   type: "js",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure eius.`,
  //   codepenLink: "https://codepen.io/danielphilipjohnson/full/bGEgaoo",
  //   githubLink:
  //     "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/1.%20Build%20a%20Random-Quote-Machine",
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
  //   title: "Markdown Previewer",
  //   path: "markdownpreviewer",
  //   imageSrc: "../../../images/front-end-lib/markdownpreviewer.png",
  //   type: "js",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure eius itaque mollitia veniam
  //   vitae earum nesciunt voluptate.`,
  //   codepenLink: "https://codepen.io/danielphilipjohnson/full/vYLgpjX",
  //   githubLink:
  //     "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/2.%20Build%20a%20Markdown%20Previewer",
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
  //   },
  // },
  // {
  //   title: "Drum Machine",
  //   path: "drummachine",
  //   imageSrc: "../../../images/front-end-lib/drummachine.png",
  //   type: "js",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure.`,
  //   codepenLink: "https://codepen.io/danielphilipjohnson/full/mdVRLam",
  //   githubLink:
  //     "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/3.%20Build%20a%20Drum%20Machine",
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
  //   title: "Javascript Calculator",
  //   path: "javascriptcalculator",
  //   imageSrc: "../../../images/front-end-lib/calculator.png",
  //   type: "js",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure eius itaque mollitia veniam
  //   vitae earum nesciunt voluptate.`,
  //   codepenLink: "https://codepen.io/danielphilipjohnson/full/abdpKOv",
  //   githubLink:
  //     "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/4.%20Build%20a%20JavaScript%20Calculator",
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
  //   title: "Pomodoro Clock",
  //   path: "pomodoroclock",
  //   imageSrc: "../../../images/front-end-lib/pomodoro.png",
  //   type: "js",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Autem eligendi deleniti iure eius itaque mollitia veniam
  //   vitae earum nesciunt voluptate.`,
  //   codepenLink: "https://codepen.io/danielphilipjohnson/full/OJMWEXZ",
  //   githubLink:
  //     "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/5.%20Build%20a%20Pomodoro%20Clock",
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
