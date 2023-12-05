// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation-instructions)
* [Usage Instructions](#usage-instructions)
* [Contribution-Guidelines](#contribution-guidelines)
* [Tests](#tests)
* [Questions](#questions)

## Description <a name="description"></a> 
${data.description}

## License
ADD LICENSE STUFF

## Installation Instructions <a name="installation-instructions"></a>
${data.installationInstructions}


## Usage Instructions <a name="usage-instructions"></a>
${data.usageInstructions}

## Contribution Guidelines <a name="contribution-guidelines"></a>
${data.contributionGuidelines}

## Tests <a name="tests"></a> 
${data.tests}


## Questions
Please feel free to reach out to me with questions or suggestions for this app.
My GitHub user name ${data.GitHubProfile} and here is my profile: [https://github.com/${data.GitHubProfile}](https://github.com/${data.GitHubProfile}).
My email is ${data.email}

`;
}

module.exports = generateMarkdown;
