// Created a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;

    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;

    case "GNU General Public License 3 (GPL-3.0)":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;

    case "Mozilla Public License 2.0 (MPL 2.0)":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;

    case "Internet Systems Consortium (ISC) License":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      return "";
      break;

    default:
      // return empty string
      return "";
      break;
  }
}

// Created a function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return "[https://opensource.org/license/mit/](https://opensource.org/license/mit/)";
      break;

    case "Apache License 2.0":
      return "[https://opensource.org/license/apache-2-0/](https://opensource.org/license/apache-2-0/)";
      break;

    case "GNU General Public License 3 (GPL-3.0)":
      return "[https://www.gnu.org/licenses/gpl-3.0](https://www.gnu.org/licenses/gpl-3.0)";
      break;

    case "Mozilla Public License 2.0 (MPL 2.0)":
      return "[https://opensource.org/license/mpl-2-0/](https://opensource.org/license/mpl-2-0/)";
      break;

    case "Internet Systems Consortium (ISC) License":
      return "[https://opensource.org/license/isc-license-txt/](https://opensource.org/license/isc-license-txt/)";
      return "";
      break;

    default:
      // return empty string
      return "";
      break;
  }
}

// Created a function that returns the license section of README
function renderLicenseSection(license) {
  return `## License <a name="license"></a>
  This project's license is ${license}.<br>  
  The website for this license is ${renderLicenseLink(license)}.
  `;
}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation-instructions)
* [Usage](#usage-instructions)
* [License](#license)
* [Contributing](#contribution-guidelines)
* [Tests](#tests)
* [Questions](#questions)

## Description <a name="description"></a> 
${data.description}

## Installation <a name="installation-instructions"></a>
${data.installationInstructions}

## Usage <a name="usage-instructions"></a>
${data.usageInstructions}

${renderLicenseSection(data.license)}

## Contributing <a name="contribution-guidelines"></a>
${data.contributionGuidelines}

## Tests <a name="tests"></a> 
${data.tests}

## Questions
Please feel free to reach out to me with questions or suggestions for this app.<br>
My GitHub user name is ${
    data.GitHubProfile
  } and here is my profile: [https://github.com/${
    data.GitHubProfile
  }](https://github.com/${data.GitHubProfile}).<br>
My email is ${data.email}
`;
}

module.exports = generateMarkdown;
