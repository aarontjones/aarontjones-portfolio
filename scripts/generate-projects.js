// This script calls every 24 hours to make sure
// all repos are accounted for in portfolio.
// Otherwise, the GitHub API will be called every time
// The page refreshes.

const fs = require("fs")

const username = "aarontjones"

async function run() {

    const reposRes = await fetch(`https://api.github.com/users/${username}/repos`)
    const repos = await reposRes.json()

    const projects = [];

    // Loop for each repo
    for (const repo of repos) {

        if (repo.fork) continue 
        
        try {

            const allowCheck = await fetch (
                `https://api.github.com/repos/${username}/${repo.name}/contents/allow.txt`
            )

            if (!allowCheck.ok) continue;

            const fileData = await allowCheck.json();
            const decodedText = Buffer.from(fileData.content, "base64").toString("utf8");

            projects.push({
                name: repo.name,
                description: decodedText.trim(),
                repo: repo.html_url,
                screenshot: `https://raw.githubusercontent.com/${username}/${repo.name}/main/Screenshot.png`
            });

        } catch {
            continue;
        }
    }

    fs.mkdirSync("./data", {recursive: true})
    fs.writeFileSync("./data/projects.json", JSON.stringify(projects, null, 2));

    console.log("Projects JSON generated.");
}

run();
