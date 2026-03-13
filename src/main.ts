declare const tsParticles: any; // gather tsParticles

const app = document.getElementById("app") // Start app

if (!app) throw new Error("App container not found")

// main container
const container = document.createElement("div")
container.className = "container"

// Left Panel
const leftPanel = document.createElement("div")
leftPanel.className = "left-panel"

// Particles Section
const particlesBg = document.createElement("div")
particlesBg.id = "particles-left"

// Initializing Particles
let particlesInstance: any; // particle instance for mode switch

tsParticles.load("particles-left", {
    fullScreen: { enable: false },
    fpsLimit: false,
    background: { color: "transparent" },
    particles: {
        number: { value: 50, density: { enable: true, area: 800 } },
        color: { value: "#d4af37" }, // default gold
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
}).then((container: any) => {
    particlesInstance = container;
});

// Dark mode button
const darkModeButton = document.createElement("div")
darkModeButton.className = "dark-mode-button"
darkModeButton.title = "Toggle Scheme"

// Profile Picture
const profilePicContainer = document.createElement("div")
profilePicContainer.className = "profile-pic-container"

const profilePic = document.createElement("img")
profilePic.src = "./assets/images/profile.jpeg"
profilePic.className = "profile-pic"

profilePicContainer.appendChild(profilePic)

// Name and Bio
const bioContainer = document.createElement("div")
bioContainer.className = "bio-container"

const name = document.createElement("h1")
name.innerText = "Aaron T Jones"

const bio = document.createElement("p")
bio.innerText = "Professional Freelance Programmer"

bioContainer.appendChild(name)
bioContainer.appendChild(bio)

// Ticker

const tickerContainer = document.createElement("div")
tickerContainer.className = "ticker-wrapper"

const ticker = document.createElement("div")
ticker.className = "ticker"

const technologies = [
    {name: "CSS", icon: "./assets/icons/ticker/css.png" },
    {name: "Docker", icon: "./assets/icons/ticker/docker.png" },
    {name: "Github", icon: "./assets/icons/ticker/github.svg" },
    {name: "HTML", icon: "./assets/icons/ticker/html.png" },
    {name: "PHP", icon: "./assets/icons/ticker/php.png" },
    {name: "Python", icon: "./assets/icons/ticker/python.png" },
    {name: "Typescript", icon: "./assets/icons/ticker/typescript.png" }
]

// Creating ticker items
function createTickerItem(iconPath: string, label: string) {
    const item = document.createElement("div")
    item.className = "ticker-item"

    const icon = document.createElement("img")
    icon.src = iconPath
    icon.alt = label

    item.appendChild(icon)

    return item
}

// Add items to ticker twice for seamless looping

for (let i = 0; i < 2; i++) {
    technologies.forEach(tech => {
        ticker.appendChild(createTickerItem(tech.icon, tech.name))
    })
}

tickerContainer.appendChild(ticker)

// Social Container

const socialContainer = document.createElement("div")
socialContainer.className = "social-container"

const linkedInLink = document.createElement("a")
linkedInLink.href = "https://www.linkedin.com/in/aaron-jones-9a1866314/"
linkedInLink.target = "_blank"

// LinkedIn Icon

const linkedInIcon = document.createElement("img")
linkedInIcon.src = "./assets/icons/linkedin.png"
linkedInIcon.className = "social-icon"

linkedInLink.appendChild(linkedInIcon)

// Github Icon

const githubLink = document.createElement("a")
githubLink.href = "https://github.com/aarontjones"
githubLink.target = "_blank"

const githubIcon = document.createElement("img")
githubIcon.src = "./assets/icons/github.svg"
githubIcon.className = "social-icon"

githubLink.appendChild(githubIcon)

// Gmail Icon

const emailLink = document.createElement("a")
emailLink.href = "mailto:aarontjones4722@gmail.com"

const emailIcon = document.createElement("img")
emailIcon.src = "./assets/icons/gmail.png"
emailIcon.className = "social-icon"

emailLink.appendChild(emailIcon)

// assemble all socials into biography container

socialContainer.appendChild(linkedInLink)
socialContainer.appendChild(githubLink)
socialContainer.appendChild(emailLink)

// assemble left panel

// leftPanel.appendChild(particlesBg)
container.insertBefore(particlesBg, container.firstChild)
leftPanel.appendChild(darkModeButton)
leftPanel.appendChild(profilePicContainer)
leftPanel.appendChild(bioContainer)
leftPanel.appendChild(tickerContainer)
leftPanel.appendChild(socialContainer)

//Dark Mode Toggle
darkModeButton.addEventListener("click", () => {
    const lightMode = document.body.classList.toggle("light-mode"); // toggle class

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
        }).then((container: any) => {
            particlesInstance = container; // save new instance
        });
    }
});

// --------------------------------------------------------------------------------------------------- RIGHT PANEL
const rightPanel = document.createElement("div")
rightPanel.className = "right-panel"

function createSection(title: string, content: string) {
    const section = document.createElement("div")
    section.className = "section"

    const h2 = document.createElement("h2")
    h2.innerText = title

    const p = document.createElement("p")
    p.innerText = content

    section.appendChild(h2)
    section.appendChild(p)

    return section
}

// Short about me section - I want it all on one page.
rightPanel.appendChild(
    createSection(
        "About me",
        `
        I am Aaron, a long-term programmer, with over 9 years of programming experience throughout GCSE's, A-Levels and University.
        `
    )
)

//Portfolio Section
rightPanel.appendChild(
    createSection(
        "Project Portfolio",
        `
        Check out some of my Projects below!
        `
    )
)

const projectContainer = document.createElement("div")
projectContainer.className = "project-container"

rightPanel.append(projectContainer)

// Github API

async function loadGitHubProjects() {
    const username = "aarontjones"

    const response = await fetch(`https://api.github.com/users/${username}/repos`)
    const repos = await response.json()

    for (const repo of repos) { // Go through all repos i have on my acc.

        if (repo.fork) continue

        try {

            const checkFile = await fetch (
                `https://api.github.com/repos/${username}/${repo.name}/contents/allow.txt` // Check for specific File of repo. If it exists, allow onto site - stops clogging.
            )

            if (!checkFile.ok) continue

            // Description Gathering
            const fileData = await checkFile.json()
            const decodedText = atob(fileData.content)

            // Screenshot Gathering
            const screenshotURL = `https://raw.githubusercontent.com/${username}/${repo.name}/main/Screenshot.png`

            const screenshotContainer = document.createElement("div")
            screenshotContainer.className = "project-screenshot-container"

            const screenshot  = document.createElement("img")
            screenshot.src = screenshotURL
            screenshot.className = "project-screenshot"

            // If image is not loading
            screenshot.onerror = () => {
                screenshotContainer.remove()
            }

            screenshotContainer.appendChild(screenshot)

            // Creating each card
            const card = document.createElement("div")
            card.className = "project-card"

            // creating a header of the title and link
            const header = document.createElement("div")
            header.className = "project-header"

            const title = document.createElement("h3")
            title.innerText = repo.name

            // Description
            const description = document.createElement("p")
            description.innerText = decodedText

            const link = document.createElement("a")
            link.href = repo.html_url
            link.target = "_blank"
            link.innerText = "View on GitHub"

            header.appendChild(title)
            header.appendChild(link)

            card.appendChild(header) // Title and Github Link
            screenshotContainer.appendChild(description)
            card.appendChild(screenshotContainer) // Screenshot
        
            projectContainer.appendChild(card)

        } catch (err) {
            console.log("Skipping Repo:", repo.name) // Error Handling
        }
    }
}

loadGitHubProjects() // Initializes all github projects into the portfolio section, as long as they have a allow.txt file in the root directory.

//Experience Section
rightPanel.appendChild(
    createSection(
        "Experience",
        `
        I have over 9 years of programming experience, including languages like Python, TypeScript, HTML and CSS and C. Furthermore, I have high technical experience in Docker, AWS, JupyterNotebook, and other industry-standard technologies. 

        While I do not have much experience professionally with programming jobs, I do have a couple freelance jobs under my belt, as well as other job experience, as stated in my CV.
        
        In terms of technical skills, I am extremely proficient in Office 365 (Excel, Word, Powerpoint), AWS, and other skills as shown in the ticker.
        `
    )
)

// Education section
rightPanel.appendChild(
    createSection(
        "Education",
        `
        University of the West of England (UWE), Bristol | 2021-2025
        BSc (Hons) Computer Science - 2:1 Grade

        Dissertation included an exploration into Machine Translation in a chatroom.


        Clyst Vale Community College, Exeter | 2013-2020 
        A-Levels: Distinction* (Applied Science BTEC), C (Computer Science), C (History)
        GCSEs: English Lit (6), English Lang (6), Maths (6), Combined Science (6), Computer Science (5), D&T (C), Religious Studies (4)

        For additional information, you can download my CV below.
        `
    )
)

// CV Download button

// Container

const downloadContainer = document.createElement("div");
downloadContainer.className = "download-container";

function createDownloadButton(fileName: string, filePath: string, iconPath: string, altText: string) {
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

const cvDownloadButton = createDownloadButton(
    "cv.pdf", // file name for download
    "./assets/docs/cv.pdf", // file path
    "./assets/icons/cv.png", // path for icon
    "Download CV"
)

downloadContainer.appendChild(cvDownloadButton)
rightPanel.appendChild(downloadContainer)

// assemble page
container.appendChild(leftPanel)
container.appendChild(rightPanel)

app.appendChild(container)