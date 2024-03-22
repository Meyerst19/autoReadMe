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
      name: "gitHubUsername",
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
      message: colors.brightMagenta("Logo:"),
      name: "logo",
    },
    {
      type: "input",
      message: colors.brightMagenta("Screenshot file name:"),
      name: "screenshot",
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
      name: "libraries",
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
    console.log(response);
    const npm = "```";
    const npmSingle = "`";
    if (response.libraries.length === 0) {
      librariesFormat = "";
    } else if (response.libraries.length === 1) {
      librariesFormat = `- [![${response.libraries[0].split(".")[0]}][${
        response.libraries[0]
      }]][${response.libraries[0].split(".")[0]}-url`;
    } else if (response.libraries.length === 2) {
      librariesFormat = `- [![${response.libraries[0].split(".")[0]}][${
        response.libraries[0]
      }]][${response.libraries[0].split(".")[0]}-url]
- [![${response.libraries[1].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[1].split(".")[0]
      }-url]`;
    } else if (response.libraries.length === 3) {
      librariesFormat = `- [![${response.libraries[0].split(".")[0]}][${
        response.libraries[0]
      }]][${response.libraries[0].split(".")[0]}-url]
- [![${response.libraries[1].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[1].split(".")[0]
      }-url]
- [![${response.libraries[2].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[2].split(".")[0]
      }-url]`;
    } else if (response.libraries.length === 4) {
      librariesFormat = `- [![${response.libraries[0].split(".")[0]}][${
        response.libraries[0]
      }]][${response.libraries[0].split(".")[0]}-url]
- [![${response.libraries[1].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[1].split(".")[0]
      }-url]
- [![${response.libraries[2].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[2].split(".")[0]
      }-url]
- [![${response.libraries[3].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[3].split(".")[0]
      }-url]`;
    } else if (response.libraries.length === 5) {
      librariesFormat = `- [![${response.libraries[0].split(".")[0]}][${
        response.libraries[0]
      }]][${response.libraries[0].split(".")[0]}-url]
- [![${response.libraries[1].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[1].split(".")[0]
      }-url]
- [![${response.libraries[2].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[2].split(".")[0]
      }-url]
- [![${response.libraries[3].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[3].split(".")[0]
      }-url]
- [![${response.libraries[4].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[4].split(".")[0]
      }-url]`;
    } else if (response.libraries.length === 6) {
      librariesFormat = `- [![${response.libraries[0].split(".")[0]}][${
        response.libraries[0]
      }]][${response.libraries[0].split(".")[0]}-url]
- [![${response.libraries[1].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[1].split(".")[0]
      }-url]
- [![${response.libraries[2].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[2].split(".")[0]
      }-url]
- [![${response.libraries[3].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[3].split(".")[0]
      }-url]
- [![${response.libraries[4].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[4].split(".")[0]
      }-url]
- [![${response.libraries[5].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[5].split(".")[0]
      }-url]`;
    } else if (response.libraries.length === 7) {
      librariesFormat = `- [![${response.libraries[0].split(".")[0]}][${
        response.libraries[0]
      }]][${response.libraries[0].split(".")[0]}-url]
- [![${response.libraries[1].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[1].split(".")[0]
      }-url]
- [![${response.libraries[2].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[2].split(".")[0]
      }-url]
- [![${response.libraries[3].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[3].split(".")[0]
      }-url]
- [![${response.libraries[4].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[4].split(".")[0]
      }-url]
- [![${response.libraries[5].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[5].split(".")[0]
      }-url]
- [![${response.libraries[6].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[6].split(".")[0]
      }-url]`;
    } else if (response.libraries.length === 8) {
      librariesFormat = `- [![${response.libraries[0].split(".")[0]}][${
        response.libraries[0]
      }]][${response.libraries[0].split(".")[0]}-url]
- [![${response.libraries[1].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[1].split(".")[0]
      }-url]
- [![${response.libraries[2].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[2].split(".")[0]
      }-url]
- [![${response.libraries[3].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[3].split(".")[0]
      }-url]
- [![${response.libraries[4].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[4].split(".")[0]
      }-url]
- [![${response.libraries[5].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[5].split(".")[0]
      }-url]
- [![${response.libraries[6].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[6].split(".")[0]
      }-url]
- [![${response.libraries[7].split(".")[0]}][${response.libraries[0]}]][${
        response.libraries[7].split(".")[0]
      }-url]`;
    }
    console.log(librariesFormat);
    formattedResponse = `<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>
    
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
    
<br />
<div align="center">
  <a href="https://github.com/${response.gitHubUsername}/${response.repoName}">
    <img src="./readMeImages/${response.logo}" alt="Logo" width="80" height="80">
  </a>
  
  <h3 align="center">${response.projectTitle}</h3>
  <p align="center">${response.projectDescription}
    <br />
    <a href="https://github.com/${response.gitHubUsername}/${response.repoName}"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/${response.gitHubUsername}/${response.repoName}">View Demo</a>
    ·
    <a href="https://github.com/${response.gitHubUsername}/${response.repoName}/issues">Report Bug</a>
        ·
    <a href="https://github.com/${response.gitHubUsername}/${response.repoName}/issues">Request Feature</a>
  </p>
</div>
    
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
    
## About The Project
    
[![Product Name Screen Shot][product-screenshot]](https://${response.url})
     
<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
### Built With
    
${librariesFormat}
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
## Getting Started
    
To get a local copy up and running follow these simple example steps.
    
### Prerequisites
    
Install all dependencies with the command below.
    
- npm
  ${npm}sh
  npm install ${response.dependencies}
  ${npm}
    
### Installation
    
1. Get a free API Key at [https://${response.url}](https://${response.url})
2. Clone the repo
  ${npm}sh
  git clone https://github.com/${response.gitHubUsername}/${response.repoName}.git
  ${npm}
3. Install NPM packages
  ${npm}sh
  npm install
  ${npm}
4. Enter your API in ${npmSingle}config.js${npmSingle}
  ${npm}js
  const API_KEY = "ENTER YOUR API";
  ${npm}
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
## Usage
    
${response.useage}
    
_For more examples, please refer to the [Documentation](${response.url})_
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
## Roadmap
    
- [ ] ${response.roadmap}
  - [ ] Nested Feature
    
See the [open issues](https://github.com/${response.gitHubUsername}/${response.repoName}/issues) for a full list of proposed features (and known issues).
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
## Contributing
    
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
    
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
    Don't forget to give the project a star! Thanks again!
    
1. Fork the Project
2. Create your Feature Branch (${npmSingle}git checkout -b feature/AmazingFeature${npmSingle})
3. Commit your Changes (${npmSingle}git commit -m 'Add some AmazingFeature'${npmSingle})
4. Push to the Branch (${npmSingle}git push origin feature/AmazingFeature${npmSingle})
5. Open a Pull Request
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
## License
    
Distributed under the MIT License. See ${npmSingle}LICENSE.txt${npmSingle} for more information.
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
## Questions/Contact
    
${response.name} - [@${response.twitterHandle}](https://twitter.com/${response.twitterHandle}) - ${response.email}
    
Project Link: [https://github.com/${response.gitHubUsername}/${response.repoName}](https://github.com/${response.gitHubUsername}/${response.repoName})
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
## Acknowledgments
    
- [${response.acknowlegments}]()
- []()
- []()
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
    
[contributors-shield]: https://img.shields.io/github/contributors/${response.gitHubUsername}/${response.repoName}.svg?style=for-the-badge
[contributors-url]: https://github.com/${response.gitHubUsername}/${response.repoName}/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/${response.gitHubUsername}/${response.repoName}.svg?style=for-the-badge
[forks-url]: https://github.com/${response.gitHubUsername}/${response.repoName}/network/members
[stars-shield]: https://img.shields.io/github/stars/${response.gitHubUsername}/${response.repoName}.svg?style=for-the-badge
[stars-url]: https://github.com/${response.gitHubUsername}/${response.repoName}/stargazers
[issues-shield]: https://img.shields.io/github/issues/${response.gitHubUsername}/${response.repoName}.svg?style=for-the-badge
[issues-url]: https://github.com/${response.gitHubUsername}/${response.repoName}/issues
[license-shield]: https://img.shields.io/github/license/${response.gitHubUsername}/${response.repoName}.svg?style=for-the-badge
[license-url]: https://github.com/${response.gitHubUsername}/${response.repoName}/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/${response.linkedInUsername}
[product-screenshot]: ./assets/images/${response.screenshot}
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com`;

    fs.writeFile("README.md", formattedResponse, (err) =>
      err
        ? console.error(colors.red(err))
        : console.log(colors.green("Success!"))
    );
  });
