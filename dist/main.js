const app = document.getElementById("app");
if (!app)
    throw new Error("App container not found");
// main container
const container = document.createElement("div");
container.className = "container";
// Left Panel
const leftPanel = document.createElement("div");
leftPanel.className = "left-panel";
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
const bio = document.createElement("p");
bio.innerText = "Professional Freelance Programmer";
bioContainer.appendChild(name);
bioContainer.appendChild(bio);
// Ticker goes here
// Social Container
const socialContainer = document.createElement("div");
socialContainer.className = "social-container";
const linkedInLink = document.createElement("a");
linkedInLink.href = "https://www.linkedin.com/in/aaron-jones-9a1866314/";
linkedInLink.target = "_blank";
// LinkedIn Icon
const linkedInIcon = document.createElement("img");
linkedInIcon.src = "./assets/icons/linkedin.png";
linkedInIcon.className = "social-icon";
linkedInLink.appendChild(linkedInIcon);
// Github Icon
const githubLink = document.createElement("a");
githubLink.href = "https://github.com/aarontjones";
githubLink.target = "_blank";
const githubIcon = document.createElement("img");
githubIcon.src = "./assets/icons/github.svg";
githubIcon.className = "social-icon";
githubLink.appendChild(githubIcon);
// Gmail Icon
const emailLink = document.createElement("a");
emailLink.href = "mailto:aarontjones4722@gmail.com";
const emailIcon = document.createElement("img");
emailIcon.src = "./assets/icons/gmail.png";
emailIcon.className = "social-icon";
emailLink.appendChild(emailIcon);
// assemble all socials into biography container
socialContainer.appendChild(linkedInLink);
socialContainer.appendChild(githubLink);
socialContainer.appendChild(emailLink);
// assemble left panel
leftPanel.appendChild(profilePicContainer);
leftPanel.appendChild(bioContainer);
leftPanel.appendChild(socialContainer);
// --------------------------------------------------------------------------------------------------- RIGHT PANEL
const rightPanel = document.createElement("div");
rightPanel.className = "right-panel";
function createSection(title, content) {
    const section = document.createElement("div");
    section.className = "section";
    const h2 = document.createElement("h2");
    h2.innerText = title;
    const p = document.createElement("p");
    p.innerText = content;
    section.appendChild(h2);
    section.appendChild(p);
    return section;
}
// Short about me section - I want it all on one page.
rightPanel.appendChild(createSection("About me", `
        I am Aaron, a long-term programmer, with over 9 years of programming experience throughout GCSE's, A-Levels and University.
        `));
// Education section
rightPanel.appendChild(createSection("Education", `
        University of the West of England (UWE), Bristol | 2021-2025
        BSc (Hons) Computer Science - 2:1 Grade

        Dissertation included an exploration into Machine Translation in a chatroom.


        Clyst Vale Community College, Exeter | 2013-2020 
        A-Levels: Distinction* (Applied Science BTEC), C (Computer Science), C (History)
        GCSEs: English Lit (6), English Lang (6), Maths (6), Combined Science (6), Computer Science (5), D&T (C), Religious Studies (4)

        For additional information, you can download my CV below.
        `));
// CV Download button
// Container
const downloadContainer = document.createElement("div");
downloadContainer.className = "download-container";
function createDownloadButton(fileName, filePath, iconPath, altText) {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    link.target = "_blank"; // opens in new tab - may remove
    const icon = document.createElement("img");
    icon.src = iconPath;
    icon.alt = altText;
    icon.className = "social-icon"; // reusing from socials
    link.appendChild(icon);
    return link;
}
const cvDownloadButton = createDownloadButton("cv.pdf", // file name for download
"./assets/docs/cv.pdf", // file path
"./assets/icons/cv.png", // path for icon
"Download CV");
downloadContainer.appendChild(cvDownloadButton);
rightPanel.appendChild(downloadContainer);
// To DO for experience:
// Create a ticker like thing, with icons of all languages / technologies i use (Python, TS, HTML, CSS, git, etc.)
// I have no idea how to do that, but fuck it we ball.
//Experience Section
rightPanel.appendChild(createSection("Experience", `
        While I do not have much experience professionally with programming jobs, I do have a couple freelance jobs under my belt, as well as other job experience, as stated in my CV.
        
        In terms of technical skills, I am extremely proficient in Office 365 (Excel, Word, Powerpoint), AWS, and other skills as shown in the ticker.
        `));
//Portfolio Section
rightPanel.appendChild(createSection("Project Portfolio", `
        shalalalala lalalala project time!
        `));
// assemble page
container.appendChild(leftPanel);
container.appendChild(rightPanel);
app.appendChild(container);
export {};
//# sourceMappingURL=main.js.map