// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Please list your table of contents for this README?',
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

inquirer
    .prompt(questions)

    // do something with a then to be able to feed a fileName and the needed data
    //.then writeToFile()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // like the generateHTML arrow function in mini-project
    // mimic the Example readme template I have made in this repo
    // wrap it in backticks and writeToFile
};

// TODO: Create a function to initialize app
function init() {
    // does this just clear the previously entered inquirer information?
}

// Function call to initialize app
init();



// ALSO NEED TOC to be clickable
