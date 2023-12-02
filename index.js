// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// generateMD template for READMEs
const generateMD = ({ projectTitle, description, installationInstructions, usageInstructions, contributionGuidelines, tests, GitHubProfile, email}) =>
`# ${projectTitle}

## Add license icon

## Table of Contents
NEED TO SORT OUT CLICK TO JUMP


## Description
description template literal
${description}

## License
ADD LICENSE STUFF


## Installation Instructions
${installationInstructions}

## Usage Information
${usageInstructions}

## Contribution Guidelines
${contributionGuidelines}

## Tests
${tests}

## Questions
Please feel free to reach out to me with questions or suggestions for this app.
My GitHub user name ${GitHubProfile} and my email is ${email}

# ${projectTitle}

## Table of Contents
NEED TO SORT OUT CLICK TO JUMP

## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation-instructions)
* [Usage Instructions](#usage-instructions)
* [Contribution-Guidelines](#contribution-guidelines)
* [Tests](#tests)
* [Questions](#questions)

## Description <a name="description"></a> 


## Installation Instructions <a name="installation-instructions"></a>


## Usage Instructions <a name="usage-instructions"></a>


## Contribution Guidelines <a name="contribution-guidelines"></a>


## Tests <a name="tests"></a> 


## Questions <a name="questions"></a>
Please feel free to reach out to me with questions or suggestions for this app.`


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'How do you install this project?',
    },
    {
        type: 'input',
        name: 'usageInstructions',
        message: 'What are some usage instructions for this project?',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'What are the contribution guidelines for this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the tests for this project',
    },
    {
        type: 'input',
        name: 'GitHubProfile',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, contentText) {

    fs.writeFile(fileName, contentText, (err) =>
    err ? console.log(err) : console.log('Successfully created a project README!')
        );

};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {

        const fileNameHere = `${answers.projectTitle.split(' ').join('')}-README.md`;
        const generateMDHere = generateMD(answers);

        writeToFile(fileNameHere, generateMDHere);
    });

}

// Function call to initialize app
init();


