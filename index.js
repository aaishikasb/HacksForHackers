#!/usr/bin/env node

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

  const output = [
    data.intro,
    `${data.labelWork} ${data.work}`,
    `${data.labelTwitter} ${data.twitter}`,
    `${data.labelGitHub} ${data.github}`,
    `${data.labelLinkedIn} ${data.linkedin}`,
    `${data.labelYouTube} ${data.youtube}`,
    `${data.labelWeb} ${data.web}`,
    `${data.labelResume} ${data.resume}`,
  ]
    .filter(Boolean)
    .join("\n\n");

  console.log("Template Created");
  console.log("Card.js has been created and contains this profile.");
  console.log("Run `node card.js` to see your profile card.");
  console.log(chalk.white(boxen(output, options)));

  const fileOutput = `
    import chalk from "chalk";
    import boxen from "boxen";

    const options = ${JSON.stringify(options)};
    const data = ${JSON.stringify(data)};

    const output = [
      data.intro,
      \`\${data.labelWork} \${data.work}\`,
      \`\${data.labelTwitter} \${data.twitter}\`,
      \`\${data.labelGitHub} \${data.github}\`,
      \`\${data.labelLinkedIn} \${data.linkedin}\`,
      \`\${data.labelYouTube} \${data.youtube}\`,
      \`\${data.labelWeb} \${data.web}\`,
      \`\${data.labelResume} \${data.resume}\`,
    ]
      .filter(Boolean)
      .join("\\n\\n");

    console.log(chalk.white(boxen(output, options)));
  `;

  fs.writeFileSync("./card.js", fileOutput);
})();
