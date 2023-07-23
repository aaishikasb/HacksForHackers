// #!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import * as fs from "fs";
import boxen from "boxen";

(async () => {
  const options = {
    padding: 1,
    width: 60,
    title: "NPX Card Generator",
    titleAlignment: "center",
    borderStyle: "single",
    borderColor: "#FFFF00",
  };

  const questions = [
    {
      type: "input",
      name: "name",
      message: "What's your name",
      validate(value) {
        if (value) {
          return true;
        }

        return "Please enter a name";
      },
    },
    {
      type: "input",
      name: "job_title",
      message: "What's your job title",
    },
    {
      type: "input",
      name: "workplace",
      message: "Where do you work",
    },
    {
      type: "input",
      name: "twitter",
      message: "What's your Twitter handle (eg. cdhiraj40)",
    },
    {
      type: "input",
      name: "github",
      message: "What's your GitHub username (eg. cdhiraj40)",
    },
    {
      type: "input",
      name: "linkedin",
      message: "What's your LinkedIn username (eg. cdhiraj40)",
    },
    {
      type: "input",
      name: "youtube",
      message: "What's your YouTube channel name (eg. cdhiraj40)",
    },
    {
      type: "input",
      name: "website",
      message: "What's your website URL (eg. https://cdhiraj40.dev)",
    },
    {
      type: "input",
      name: "resume",
      message: "What's your resume link",
    },
  ];

  const answers = await inquirer.prompt(questions);

  const data = {
    intro: chalk.white(`I am ${answers.name}!`),
    work:
      chalk.white(`${answers.job_title} at `) + chalk.white(answers.workplace),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan(answers.twitter),
    github: chalk.gray("https://github.com/") + chalk.green(answers.github),
    linkedin:
      chalk.gray("https://linkedin.com/in/") + chalk.blue(answers.linkedin),
    youtube: chalk.gray("https://youtube.com/@") + chalk.red(answers.youtube),
    web: chalk.cyan.underline(answers.website),
    resume: chalk.cyan.underline(answers.resume),
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

  let output = "";
  let fileOutput = `
  import chalk from "chalk";\n 
  import boxen from "boxen";\n\n
  const options = ${JSON.stringify(options)};\n
  const answers = ${JSON.stringify(answers)};\n
  const data = ${JSON.stringify(data)};\n
  const newline = "\\n";\n
  const introduction = \`\${data.intro}\`;\n
  const working = \`\${data.labelWork}  \${data.work}\`;\n
  const twittering = \`\${data.labelTwitter}  \${data.twitter}\`;\n
  const githubing = \`\${data.labelGitHub}  \${data.github}\`;\n
  const linkedining = \`\${data.labelLinkedIn}  \${data.linkedin}\`;\n
  const youtubing = \`\${data.labelYouTube}  \${data.youtube}\`;\n
  const webing = \`\${data.labelWeb}  \${data.web}\`;\n
  const resuming = \`\${data.labelResume}  \${data.resume}\`;\n
  let output = "";\n
  \n
  if (answers.name) {
    output += introduction + newline + newline;
  }\n

  if (answers.job_title && answers.workplace) {
    output += working + newline;
  }\n

  if (answers.twitter) {
    output += twittering + newline;
  }\n

  if (answers.github) {
    output += githubing + newline;
  }\n

  if (answers.linkedin) {
    output += linkedining + newline;
  }\n

  if (answers.youtube) {
    output += youtubing + newline;
  }\n

  if (answers.website) {
    output += webing + newline;
  }\n

  if (answers.resume) {
    output += resuming + newline;
  }\n
  \nconsole.log(chalk.white(boxen(output, options)));\n
  `;

  if (answers.name) {
    output += introduction + newline + newline;
  }

  if (answers.job_title && answers.workplace) {
    output += working + newline;
  }

  if (answers.twitter) {
    output += twittering + newline;
  }

  if (answers.github) {
    output += githubing + newline;
  }

  if (answers.linkedin) {
    output += linkedining + newline;
  }

  if (answers.youtube) {
    output += youtubing + newline;
  }

  if (answers.website) {
    output += webing + newline;
  }

  if (answers.resume) {
    output += resuming + newline;
  }

  console.log("Template Created");
  console.log("Card.js has been created and contains this profile.");
  console.log("Run `node card.js` to see your profile card.");
  console.log(chalk.white(boxen(output, options)));


  await writeFile(fileOutput);
})();

function writeFile(content) {
  fs.writeFileSync("./card.js", content);
}
