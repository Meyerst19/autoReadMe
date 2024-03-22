inquirer = require("inquirer");
colors = require("colors");
fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: colors.brightMagenta("Your Name:"),
      name: "name",
    },
    {
      type: "input",
      message: colors.brightMagenta("LinkedIn Username:"),
      name: "linkedInUsername",
    },
    {
      type: "input",
      message: colors.brightMagenta("Twitter Handle:"),
      name: "twitterHandle",
    },
    {
      type: "input",
      message: colors.brightMagenta("Repo Name:"),
      name: "repoName",
    },
    {
      type: "input",
      message: colors.brightMagenta("GitHub Username:"),
      name: "gitHubUserName",
    },
    {
      type: "input",
      message: colors.brightMagenta("Project Title:"),
      name: "projectTitle",
    },
    {
      type: "input",
      message: colors.brightMagenta("Project Description:"),
      name: "projectDescription",
    },
    {
      type: "input",
      message: colors.brightMagenta("Url:"),
      name: "url",
    },
    {
      type: "input",
      message: colors.brightMagenta("Url:"),
      name: "url",
    },
    {
      type: "input",
      message: colors.brightMagenta("Logo:"),
      name: "logo",
    },
    {
      type: "input",
      message: colors.brightMagenta("Email:"),
      name: "email",
    },
    {
      type: "input",
      message: colors.brightMagenta("Dependencies:"),
      name: "dependencies",
    },
    {
      type: "input",
      message: colors.brightMagenta("Useage:"),
      name: "useage",
    },
    {
      type: "input",
      message: colors.brightMagenta("Roadmap Features:"),
      name: "roadmap",
    },
    {
      type: "input",
      message: colors.brightMagenta("Acknowlegments:"),
      name: "acknowlegments",
    },
    {
      type: "checkbox",
      message: colors.brightMagenta("Built with:"),
      name: "acknowlegments",
      choices: [
        "Next.js",
        "React.js",
        "Vue.js",
        "Angula.io",
        "Svelte.dev",
        "Laravel.com",
        "Bootstrap.com",
        "JQuery.com",
      ],
    },
  ])
  .then((response) => {
    const formattedResponse = ``;
    fs.appendFile("README.md", formattedResponse, (err) =>
      err
        ? console.error(colors.red(err))
        : console.log(colors.green("Success!"))
    );
  });
