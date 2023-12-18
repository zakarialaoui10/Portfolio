const projects = [
  {
    id: 0,
    project_name_mobile: "Microverse Project",
    project_name_desktop: "Microverse Project",
    project_info_mobile: ["Music Festival", "Front End", 2023],
    project_info_desktop: ["HeavyFury", "Front End", 2023],
    description_mobile:
      "A screenshot of a music festival webpage with mobile version",
    description_desktop:
      "A fictional music festival companies webpage where I used HTML, CSS, and JavaScript. This project encompasses responsive designs for both mobile and desktop platforms, providing the flexibility to effortlessly modify content through dynamic creation.",
    description_popup:
      "Imagine a dynamic and engaging webpage for a fictional music festival company, featuring a daily program and spotlighting the headliners of each show. This multi-page website is designed for ease of use, with a main page showcasing upcoming shows and a dedicated about page providing insights into the company's logo creation process. What sets this site apart is its seamless updates facilitated by a JavaScript file, enabling effortless rearrangement of headliners, quick image swaps, and seamless information updates. It's not just a website; it's a versatile platform that puts control in your hands to keep the content fresh and exciting.",
    image_mobile: ["images/capstone-screens.jpg"],
    image_desktop: ["images/capstone-screens.jpg"],
    technologies_mobile: ["HTML", "CSS", "JavaScript"],
    technologies_desktop: ["HTML", "CSS", "JavaScript"],
    linkicon: [
      '<i class="fa-light fa-arrow-up-left-from-circle fa-flip-horizontal"></i>',
    ],
    link: "https://agneta1991.github.io/Capstone_project/",
    source: "https://github.com/agneta1991/Capstone_project/",
  },
  {
    id: 1,
    project_name_mobile: "Microverse Project",
    project_name_desktop: "Microverse Project",
    project_info_mobile: ["Budget app", "Back End", 2023],
    project_info_desktop: ["Budget app", "Full stack dev", 2023],
    description_mobile: "A screenshot of an Budget app project",
    description_desktop:
      "Track and manage your expenses effortlessly with our budget app. Create personalized spending categories, input expenditures, and customize category icons with any image URL for a tailored financial experience",
    description_popup:
      "Revolutionize the way you handle your finances with our user-friendly budget app. This powerful tool empowers you to effortlessly track and manage your expenses. Dive into a personalized financial journey as you create custom spending categories, input expenditures with ease, and elevate the visual appeal by customizing category icons using any image URL. It's not just about budgeting; it's about curating a financial experience that aligns with your unique preferences and lifestyle. Take charge of your expenses and enjoy a seamless, personalized approach to financial management.",
    image_mobile: "images/desktop-pictures/budget.png",
    image_desktop: "images/desktop-pictures/budget.png",
    technologies_mobile: ["Ruby on Rails", "CSS"],
    technologies_desktop: ["Ruby on Rails", "CSS"],
    linkicon: [
      '<i class="fa-light fa-arrow-up-left-from-circle fa-flip-horizontal"></i>',
    ],
    link: "https://dugetapp.onrender.com",
    source: "https://github.com/agneta1991/Budget-app-capstone",
  },

  {
    id: 2,
    project_name_mobile: "Microverse project",
    project_name_desktop: "Microverse project",
    project_info_mobile: ["To Do List", "Full stack", 2023],
    project_info_desktop: ["To Do List", "Full stack", 2023],
    description_mobile: "A screenshot of a simple to-do list webpage",
    description_desktop:
      "Experience productivity at its best with our simple yet powerful to-do list interface. Seamlessly add, edit, or delete tasks with just a few clicks, making task management a breeze.",
    description_popup:
      "Experience productivity at its best with our simple yet powerful to-do list interface. Seamlessly add, edit, or delete tasks with just a few clicks, making task management a breeze. What sets this apart is the integration of local storage, ensuring that your to-do list is not just confined to the current session but persists across visits. Whether you're planning your day or keeping track of ongoing projects, this feature-rich page simplifies task management, making it more intuitive and convenient for users. Elevate your productivity with a to-do list that's not only easy to use but also smartly designed for your convenience.",
    image_mobile: ["images/to-do-list-2.jpg"],
    image_desktop: ["images/to-do-list-2.jpg"],
    technologies_mobile: ["HTML", "CSS", "JavaScript"],
    technologies_desktop: ["HTML", "CSS", "JavaScript"],
    linkicon: [
      '<i class="fa-light fa-arrow-up-left-from-circle fa-flip-horizontal"></i>',
    ],
    link: "https://agneta1991.github.io/to-do-list/dist/",
    source: "https://github.com/agneta1991/to-do-list",
  },

  {
    id: 3,
    project_name_mobile: "Social media app",
    project_name_desktop: "Social media app",
    project_info_mobile: ["Microverse", "Back End Dev", 2023],
    project_info_desktop: ["Microverse", "Back end", 2023],
    description_mobile:
      "An app whee user can add posts, comments and likes, to theirs or other users posts",
    description_desktop:
      "Introducing a versatile social platform where users can seamlessly create and share posts, engage with content through comments, and express appreciation with likes. This app empowers users to personalize their digital space by curating their own posts, comments and liking others posts.",
    description_popup:
      "Introducing a versatile social platform where users can seamlessly create and share posts, engage with content through comments, and express appreciation with likes. This app empowers users to personalize their digital space by not only curating their own posts but also interacting with the vibrant community through meaningful comments and likes on others' content. Connect, share, and build a dynamic online presence with our user-friendly interface.",
    image_mobile: "images/desktop-pictures/social.jpg",
    image_desktop: "images/desktop-pictures/social.jpg",
    technologies_mobile: ["HTML", "CSS", "JavaScript"],
    technologies_desktop: ["HTML", "Ruby on rails", "CSS", "JavaScript"],
    linkicon: [
      '<i class="fa-light fa-arrow-up-left-from-circle fa-flip-horizontal"></i>',
    ],
    link: "https://link-to-live-project.com",
    source: "https://github.com/username/project-repository",
  },
];

const menuIcon = document.getElementById("fa-bars");
const menuExit = document.getElementById("fa-close");
const menuContent = document.querySelectorAll(".menu-content > a");
const menuPage = document.getElementById("menu-page");
const workSection = document.getElementById("work");

function menuIconFunction(event) {
  event.preventDefault();
  menuPage.style.display = "flex";
}

function exitFunction(event) {
  event.preventDefault();
  menuPage.style.display = "none";
}

function scrollSection(event) {
  event.preventDefault();
  const sectionId = this.getAttribute("href");
  const targetedSection = document.querySelector(sectionId);
  targetedSection.scrollIntoView({ behavior: "smooth" });
  menuPage.style.display = "none";
}

menuIcon.addEventListener("touchstart", menuIconFunction);
menuExit.addEventListener("touchstart", exitFunction);

menuContent.forEach((individualSection) => {
  individualSection.addEventListener("touchstart", scrollSection);
});

menuIcon.addEventListener("click", menuIconFunction);
menuExit.addEventListener("click", exitFunction);

menuContent.forEach((individualSection) => {
  individualSection.addEventListener("click", scrollSection);
});

/* everything below is creting elements and adding content from array */

for (let i = 0; i <= projects.length - 1; i += 1) {
  const mainDiv = document.createElement("div");
  mainDiv.id = `dynamic-project${i}`;
  mainDiv.className = `project project-${i}${1}`;
  workSection.appendChild(mainDiv);

  const imageDiv = document.createElement("div");
  imageDiv.className = "image-container";
  imageDiv.id = `image-container${i}`;
  mainDiv.appendChild(imageDiv);

  const image = document.createElement("img");
  image.id = `image${i}`;
  image.className = "image-mobile";
  image.alt = "Project picture";
  image.src = projects[i].image_mobile;
  document.getElementById(`image-container${i}`).appendChild(image);

  const dimage = document.createElement("img");
  dimage.id = `dimage${i}`;
  dimage.className = "image-desktop";
  dimage.alt = "Project picture";
  dimage.src = projects[i].image_desktop;
  document.getElementById(`image-container${i}`).appendChild(dimage);

  const secondDiv = document.createElement("div");
  secondDiv.id = `container${i}`;
  secondDiv.className = "container";
  document.getElementById(`dynamic-project${i}`).appendChild(secondDiv);

  const h3 = document.createElement("h3");
  h3.id = `client-name${i}`;
  h3.className = "client-name li-mobile";
  h3.innerHTML = projects[i].project_name_mobile;
  document.getElementById(`container${i}`).appendChild(h3);

  const h3desktop = document.createElement("h3");
  h3desktop.id = `client-name-desktop${i}`;
  h3desktop.className = "client-name client-name-desktop";
  h3desktop.innerHTML = projects[i].project_name_desktop;
  document.getElementById(`container${i}`).appendChild(h3desktop);

  const ul = document.createElement("ul");
  ul.className = "ul";

  const info = projects[i].project_info_mobile;
  info.forEach((individualInfoitem) => {
    const li = document.createElement("li");
    li.id = `li${i}`;
    li.className = "li-mobile";
    li.innerHTML = individualInfoitem;
    ul.appendChild(li);
  });
  document.getElementById(`container${i}`).appendChild(ul);

  const desktopUl = document.createElement("ul");
  desktopUl.className = "ul";

  const desktopinfo = projects[i].project_info_desktop;
  desktopinfo.forEach((individualdesktop) => {
    const desktopli = document.createElement("li");
    desktopli.id = `desktopli${i}`;
    desktopli.className = "li-desktop";
    desktopli.innerHTML = individualdesktop;
    desktopUl.appendChild(desktopli);
  });
  document.getElementById(`container${i}`).appendChild(desktopUl);

  const p = document.createElement("p");
  p.className = "about-project project-mobile";
  p.innerHTML = projects[i].description_mobile;
  document.getElementById(`container${i}`).appendChild(p);

  const desktopp = document.createElement("p");
  desktopp.className = "about-project project-desktop";
  desktopp.innerHTML = projects[i].description_desktop;
  document.getElementById(`container${i}`).appendChild(desktopp);

  const technologyDiv = document.createElement("div");
  technologyDiv.id = `technologyDiv${i}`;
  technologyDiv.className = "buttons";
  document.getElementById(`container${i}`).appendChild(technologyDiv);

  const technologyUl = document.createElement("ul");
  const technoLi = projects[i].technologies_mobile;

  technoLi.forEach((individualTechLiItem) => {
    const secondLi = document.createElement("li");
    secondLi.innerHTML = individualTechLiItem;
    technologyUl.appendChild(secondLi);
  });
  document.getElementById(`technologyDiv${i}`).appendChild(technologyUl);

  const btn = document.createElement("button");
  btn.id = `see-project${i + 1}`;
  btn.className = "see-project";
  btn.value = i;
  btn.type = "submit";
  btn.innerHTML = "See project";
  document.getElementById(`container${i}`).appendChild(btn);

  const clientName = document.getElementById(`desktopli${i}`);
  clientName.classList.add("name");
  const mobileClientName = document.getElementById(`li${i}`);
  mobileClientName.classList.add("name");
}

/* everything below is creating pop up see project */
function popupFunction(event) {
  const whichbtn = event.target.value;

  const locationPopup = document.getElementById("wrapperId");
  const i = whichbtn;
  const popupPage = document.createElement("div");
  popupPage.id = `popPageId${i}`;
  popupPage.className = "project popup";
  locationPopup.appendChild(popupPage);

  const popupContainer = document.createElement("div");
  popupContainer.className = "container";
  popupPage.appendChild(popupContainer);

  const nameDiv = document.createElement("div");
  nameDiv.className = "nameDiv";
  popupContainer.appendChild(nameDiv);

  const popuph3 = document.createElement("h3");
  popuph3.className = "client-name li-mobile";
  popuph3.innerHTML = projects[i].project_name_mobile;
  nameDiv.appendChild(popuph3);

  const popuph3D = document.createElement("h3");
  popuph3D.className = "client-name client-name-desktop";
  popuph3D.innerHTML = projects[i].project_name_desktop;
  nameDiv.appendChild(popuph3D);

  const iconPopup = document.createElement("i");
  iconPopup.id = `fa-close${i}`;
  iconPopup.className = "fa fa-close";
  iconPopup.value = i;
  iconPopup.style = "color: #67798e;";

  iconPopup.addEventListener("click", () => {
    const popPage = document.getElementById(`popPageId${i}`);
    if (popPage) {
      popPage.style.display = "none";
    }
  });
  nameDiv.appendChild(iconPopup);

  const popupUl = document.createElement("ul");
  popupUl.className = "mobile-li";
  const popupInfo = projects[i].project_info_mobile;
  popupInfo.forEach((individualInfoitem) => {
    const popupli = document.createElement("li");
    popupli.className = "li-mobile";
    popupli.innerHTML = individualInfoitem;
    popupUl.appendChild(popupli);
  });
  popupContainer.appendChild(popupUl);

  const popupUlD = document.createElement("ul");
  popupUlD.className = "desktop-li";
  const popupInfoD = projects[i].project_info_desktop;
  popupInfoD.forEach((individualInfoitemD) => {
    const popupliD = document.createElement("li");
    popupliD.className = "li-desktop";
    popupliD.innerHTML = individualInfoitemD;
    popupUlD.appendChild(popupliD);
  });
  popupContainer.appendChild(popupUlD);

  const popupimg = document.createElement("img");
  popupimg.className = "image-mobile";
  popupimg.alt = "Project picture";
  popupimg.src = projects[i].image_mobile;
  popupContainer.appendChild(popupimg);

  const popupimgD = document.createElement("img");
  popupimgD.className = "image-desktop";
  popupimgD.alt = "Project picture";
  popupimgD.src = projects[i].image_desktop;
  popupContainer.appendChild(popupimgD);

  const popupP = document.createElement("p");
  popupP.className = "about-project project-mobile";
  popupP.innerHTML = projects[i].description_popup;
  popupContainer.appendChild(popupP);

  const wrapperDiv = document.createElement("div");
  wrapperDiv.className = "desktop-div";
  popupContainer.appendChild(wrapperDiv);

  const popupPD = document.createElement("p");
  popupPD.className = "about-project project-desktop p-desktop";
  popupPD.innerHTML = projects[i].description_popup;
  wrapperDiv.appendChild(popupPD);

  const popupPDe = document.createElement("p");
  popupPDe.className = "about-project project-desktop";
  popupPDe.innerHTML = `${projects[i].description_popup}<br>`;
  wrapperDiv.appendChild(popupPDe);

  const technDiv = document.createElement("div");
  technDiv.className = "buttons";
  popupContainer.appendChild(technDiv);

  const techUl = document.createElement("ul");
  const techLi = projects[i].technologies_mobile;
  techLi.forEach((indilTechLiItem) => {
    const sLi = document.createElement("li");
    sLi.innerHTML = indilTechLiItem;
    techUl.appendChild(sLi);
  });

  technDiv.appendChild(techUl);

  const popupSecondDiv = document.createElement("div");
  popupSecondDiv.className = "buttonsContainer";
  popupContainer.appendChild(popupSecondDiv);

  const popupBtn = document.createElement("button");
  popupBtn.className = "see-project link";
  const iconImg = document.createElement("img");
  iconImg.src = "images/desktop-pictures/see_live.jpg";
  iconImg.alt = "See live";
  const textElement = document.createTextNode("See live");
  popupBtn.appendChild(textElement);
  popupBtn.appendChild(iconImg);
  popupBtn.type = "submit";
  popupSecondDiv.appendChild(popupBtn);

  const secongpopupBtn = document.createElement("button");
  secongpopupBtn.className = "see-project source";
  const secongiconImg = document.createElement("img");
  secongiconImg.src = "images/desktop-pictures/see_source.jpg";
  secongiconImg.alt = "See live";
  const secongtextElement = document.createTextNode("See source");
  secongpopupBtn.appendChild(secongtextElement);
  secongpopupBtn.appendChild(secongiconImg);
  secongpopupBtn.type = "submit";
  popupSecondDiv.appendChild(secongpopupBtn);
}

const seeProjects = document.querySelectorAll('[id^="see-project"]');
seeProjects.forEach((individualProject) => {
  individualProject.addEventListener("touchstart", popupFunction);
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;
  const lowercaseEmail = emailValue.toLowerCase();
  if (lowercaseEmail !== emailValue) {
    document.getElementById("error").innerHTML =
      "*Email must be in lowercase letters!";
    event.preventDefault();
    emailInput.value = "";
    emailInput.focus();
  }
});