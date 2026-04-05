var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const app = document.getElementById("app"); // Start app
if (!app)
    throw new Error("App container not found");
// Local Storage for Dark Mode
const savedTheme = localStorage.getItem("theme");
const particleColor = savedTheme === "light" ? "#7b5cff" : "#d4af37";
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    updateThemeIcons("dark");
}
// Function to change Icon when mode switch
function updateThemeIcons(mode) {
    const icons = document.querySelectorAll("[data-icon]");
    icons.forEach(icon => {
        const name = icon.dataset.icon;
        if (!name)
            return;
        icon.src = `./assets/icons/logos/${mode}/${name}`;
    });
    // Changing Ticker Icons when toggle is pressed
    const tickerIcons = document.querySelectorAll("[data-ticker-icon]");
    tickerIcons.forEach(icon => {
        const name = icon.dataset.tickerIcon;
        if (!name)
            return;
        icon.src = `./assets/icons/ticker/${mode}/${name}`;
    });
}
// Main container
const container = document.createElement("div");
container.className = "container";
// Left Panel
const leftPanel = document.createElement("div");
leftPanel.className = "left-panel";
// Particles Section
const particlesBg = document.createElement("div");
particlesBg.id = "particles-left";
// Initializing Particles
let particlesInstance; // particle instance for mode switch
tsParticles.load("particles-left", {
    fullScreen: { enable: false },
    fpsLimit: false,
    background: { color: "transparent" },
    particles: {
        number: { value: 50, density: { enable: true, area: 800 } },
        color: { value: particleColor },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 2, random: true },
        links: {
            enable: true,
            distance: 200,
            color: "#d4af37",
            opacity: 0.25,
            width: 0.5
        },
        move: { enable: true, speed: 4, outModes: "out" }
    },
    detectRetina: true
}).then((container) => {
    particlesInstance = container;
});
// Dark mode button
const darkModeButton = document.createElement("div");
darkModeButton.className = "dark-mode-button";
darkModeButton.title = "Toggle Scheme";
//Dark Mode Toggle
darkModeButton.addEventListener("click", () => {
    const lightMode = document.body.classList.toggle("light-mode"); // toggle class
    // Save theme
    localStorage.setItem("theme", lightMode ? "light" : "dark");
    updateThemeIcons(lightMode ? "dark" : "light"); // changes from light to dark icons upon press of the button
    const color = lightMode ? "#7b5cff" : "#d4af37"; // purple or gold
    if (particlesInstance) {
        // Reload tsParticles with updated colors
        tsParticles.load("particles-left", {
            fullScreen: { enable: false },
            fpsLimit: false,
            background: { color: "transparent" },
            particles: {
                number: { value: 50, density: { enable: true, area: 800 } },
                color: { value: color }, // updated color
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 2, random: true },
                links: {
                    enable: true,
                    distance: 200,
                    color: color, // updated link color
                    opacity: 0.25,
                    width: 0.5
                },
                move: { enable: true, speed: 4, outModes: "out" }
            },
            detectRetina: true
        }).then((container) => {
            particlesInstance = container; // save new instance
        });
    }
});
// Profile Picture
const profilePicContainer = document.createElement("div");
profilePicContainer.className = "profile-pic-container";
const profilePic = document.createElement("img");
profilePic.src = "./assets/images/profile.jpeg";
profilePic.className = "profile-pic";
profilePicContainer.appendChild(profilePic);
// Name and Bio
const bioContainer = document.createElement("div");
bioContainer.className = "bio-container";
const name = document.createElement("h1");
name.innerText = "Aaron T Jones";
name.className = "name";
const bio = document.createElement("p");
bio.innerText = "Professional Freelance Programmer";
bioContainer.appendChild(name);
bioContainer.appendChild(bio);
// Technology Ticker
const tickerContainer = document.createElement("div");
tickerContainer.className = "ticker-wrapper";
const ticker = document.createElement("div");
ticker.className = "ticker";
// List of technologies to be displayed on ticker - if adding more, have to change animation stuff in css file
const technologies = [
    { name: "CSS", icon: "./assets/icons/ticker/light/css.png" },
    { name: "Docker", icon: "./assets/icons/ticker/light/docker.png" },
    { name: "Github", icon: "./assets/icons/ticker/light/github.svg" },
    { name: "HTML", icon: "./assets/icons/ticker/light/html.png" },
    { name: "PHP", icon: "./assets/icons/ticker/light/php.png" },
    { name: "Python", icon: "./assets/icons/ticker/light/python.png" },
    { name: "Typescript", icon: "./assets/icons/ticker/light/typescript.png" }
];
// Creating ticker items
function createTickerItem(iconPath, label) {
    const item = document.createElement("div");
    item.className = "ticker-item";
    const icon = document.createElement("img");
    icon.src = iconPath;
    icon.alt = label;
    const fileName = iconPath.split("/").pop();
    icon.dataset.tickerIcon = fileName;
    item.appendChild(icon);
    return item;
}
// Add items to ticker twice for seamless looping
for (let i = 0; i < 2; i++) {
    technologies.forEach(tech => {
        ticker.appendChild(createTickerItem(tech.icon, tech.name));
    });
}
tickerContainer.appendChild(ticker);
// Social Container
const socialContainer = document.createElement("div");
socialContainer.className = "social-container";
// LinkedIn Icon
const linkedInLink = document.createElement("a");
linkedInLink.href = "https://www.linkedin.com/in/aaron-jones-9a1866314/";
linkedInLink.target = "_blank";
const linkedInIcon = document.createElement("img");
linkedInIcon.dataset.icon = "linkedin.png";
linkedInIcon.src = "./assets/icons/logos/light/linkedin.png";
linkedInIcon.className = "social-icon";
linkedInLink.appendChild(linkedInIcon);
// Github Icon
const githubLink = document.createElement("a");
githubLink.href = "https://github.com/aarontjones";
githubLink.target = "_blank";
const githubIcon = document.createElement("img");
githubIcon.dataset.icon = "github.svg";
githubIcon.src = "./assets/icons/logos/light/github.svg";
githubIcon.className = "social-icon";
githubLink.appendChild(githubIcon);
// Gmail Icon
const emailLink = document.createElement("a");
emailLink.href = "mailto:aarontjones4722@gmail.com";
const emailIcon = document.createElement("img");
emailIcon.dataset.icon = "gmail.png";
emailIcon.src = "./assets/icons/logos/light/gmail.png";
emailIcon.className = "social-icon";
emailLink.appendChild(emailIcon);
// assemble all socials into biography container
socialContainer.appendChild(linkedInLink);
socialContainer.appendChild(githubLink);
socialContainer.appendChild(emailLink);
// assemble left panel
container.insertBefore(particlesBg, container.firstChild); // make sure particles go first
leftPanel.appendChild(darkModeButton); // Button
leftPanel.appendChild(profilePicContainer); // Profile Picture
leftPanel.appendChild(bioContainer); // Container for Biography - includes name and title
leftPanel.appendChild(tickerContainer); // contains all technologies in ticker
leftPanel.appendChild(socialContainer); // contains all social media links
// Right Panel
const rightPanel = document.createElement("div");
rightPanel.className = "right-panel";
// Function to create sections on right panel
function createSection(title, content) {
    const section = document.createElement("div");
    section.className = "section";
    const h2 = document.createElement("h2");
    h2.innerText = title;
    h2.className = "section-title";
    const p = document.createElement("p");
    p.innerText = content;
    section.appendChild(h2);
    section.appendChild(p);
    return section;
}
// Short about me section
const aboutmeSection = createSection("About me", `
    I am Aaron, a long-term programmer, with over 9 years of programming experience throughout GCSE's, A-Levels, University and a couple starting freelance projects.
    `);
rightPanel.appendChild(aboutmeSection);
// Portfolio introduction section
const portfolioSection = createSection("Project Portfolio", `
    Check out some of my projects below by scrolling down. You can click the link to go to the GitHub page!
    `);
rightPanel.appendChild(portfolioSection);
// Portfolio container
const projectContainer = document.createElement("div");
projectContainer.className = "project-container";
// Scrollable project window
const projectScroll = document.createElement("div");
projectScroll.className = "project-scroll";
projectScroll.appendChild(projectContainer);
rightPanel.appendChild(projectScroll);
// Grabbing H2 so it can be updated with amount of projects
const portfolioTitle = portfolioSection.querySelector("h2");
// GitHub Loader
// Takes input from data/projects.json and loads them for every one in there.
function loadGitHubProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("./data/projects.json"); // when daily update happens, it works.
        const repos = yield response.json();
        // Appending amount of repos to title
        if (portfolioTitle) {
            portfolioTitle.innerText = `Project Portfolio - (${repos.length})`;
        }
        for (const repo of repos) {
            const screenshotContainer = document.createElement("div");
            screenshotContainer.className = "project-screenshot-container";
            const screenshot = document.createElement("img");
            screenshot.src = repo.screenshot;
            screenshot.className = "project-screenshot";
            const card = document.createElement("div");
            card.className = "project-card";
            const header = document.createElement("div");
            header.className = "project-header";
            const title = document.createElement("a");
            title.innerText = repo.name;
            title.href = repo.repo;
            title.target = "_blank";
            title.className = "project-title";
            const description = document.createElement("p");
            description.innerText = repo.description;
            header.appendChild(title);
            screenshotContainer.appendChild(screenshot);
            screenshotContainer.appendChild(description);
            card.appendChild(header);
            card.appendChild(screenshotContainer);
            // Layout:
            // Title
            // Screenshot
            // Description
            projectContainer.appendChild(card);
        }
    });
}
loadGitHubProjects(); // Initializes the function
//Experience Section
const experienceSection = createSection("Experience", `
    I possess over 9 years of programming experience, including languages like Python, TypeScript, HTML, CSS and C. Furthermore, I have high technical experience in Docker, AWS, Jupyter Notebook, and other industry-standard technologies. 

    I am a hard worker, keen leaner and a self starter - demonstrated with my projects, as well as freelance opportunities I have completed for clients. I also have miscellaneous job experience, as stated in my CV.
    `);
rightPanel.appendChild(experienceSection);
// Education section
const educationSection = createSection("Education", `
    University of the West of England (UWE), Bristol | 2021-2025
    BSc (Hons) Computer Science - 2:1 Grade

    Main Takeaways:

    ---Dissertation included an exploration into Machine Translation in a chatroom.
    ---Multiple team project and exercises both as a leader and not.
    ---Deep theoretical knowledge of AI and ML pipeline development.

    Clyst Vale Community College, Exeter | 2013-2020 
    A-Levels: Distinction* (Applied Science BTEC), C (Computer Science), C (History)
    GCSEs: English Lit (6), English Lang (6), Maths (6), Combined Science (6), Computer Science (5), D&T (C), Religious Studies (4)

    For additional information, you can download my CV below.
    `);
rightPanel.appendChild(educationSection);
// CV Download button
const downloadContainer = document.createElement("div");
downloadContainer.className = "download-container";
// When Icon is pressed at bottom of right panel, downloads a locally saved CV.
function createDownloadButton(fileName, filePath, iconPath, altText) {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    link.target = "_blank"; // opens in new tab - may remove
    const icon = document.createElement("img");
    fileName = iconPath.split("/").pop();
    icon.dataset.icon = fileName;
    icon.src = `./assets/icons/logos/light/${fileName}`;
    icon.alt = altText;
    icon.className = "social-icon"; // reusing from socials
    link.appendChild(icon);
    return link;
}
const cvDownloadButton = createDownloadButton("cv.pdf", // file name for download
"./assets/docs/cv.pdf", // file path
"./assets/icons/logos/light/cv.png", // path for icon
"Download CV");
downloadContainer.appendChild(cvDownloadButton);
rightPanel.appendChild(downloadContainer);
// Assemble page
container.appendChild(leftPanel);
container.appendChild(rightPanel);
// Assemble App
app.appendChild(container);
// Icon theme local storage thing
const currentTheme = localStorage.getItem("theme");
updateThemeIcons(currentTheme === "light" ? "dark" : "light");
export {};
// This has to be after the app is assembled for SOME reason.
//# sourceMappingURL=main.js.map