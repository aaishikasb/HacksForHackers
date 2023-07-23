// #!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const options = {
    padding: 1,
    width: 60,
    title: "Created with CHANGE LATER",
    titleAlignment: "center",
    borderStyle: "single",
    borderColor: "#FFFF00",
};

const data = {
    intro: chalk.white("I am [ADD NAME HERE]!"),
    work: chalk.white("[ADD JOB TITLE] at ") + chalk.white("[ADD WORKPLACE]"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("[ADD TWITTER]"),
    github: chalk.gray("https://github.com/") + chalk.green("[ADD GITHUB]"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("[ADD LINKEDIN]"),
    youtube: chalk.gray("https://youtube.com/") + chalk.red("[ADD YOUTUBE]"),
    web: chalk.cyan.underline("[ADD WEBSITE]"),
    resume: chalk.cyan.underline("[ADD RESUME]"),
    labelWork: chalk.bold("Work:"),
    labelTwitter: chalk.bold("Twitter:"),
    labelGitHub: chalk.bold("GitHub:"),
    labelLinkedIn: chalk.bold("LinkedIn:"),
    labelYouTube: chalk.bold("YouTube:"),
    labelWeb: chalk.bold("Website:"),
    labelResume: chalk.bold("Resume:"),
};

const newline = "\n";
const introduction = `${data.intro}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const youtubing = `${data.labelYouTube}  ${data.youtube}`;
const webing = `${data.labelWeb}  ${data.web}`;
const resuming = `${data.labelResume}  ${data.resume}`;

const output =
    introduction + newline + newline +
    working + newline +
    twittering + newline +
    githubing + newline +
    linkedining + newline +
    youtubing + newline +
    webing +newline +
    resuming;

console.log("Template Created")
console.log(chalk.white(boxen(output, options)));