// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


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
        type: 'list',
        message: 'Which license is your application covered under?',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License 3 (GPL-3.0)', 'Mozilla Public License 2.0 (MPL 2.0)', 'Internet Systems Consortium (ISC) License'],
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
        const generateMDHere = generateMarkdown(answers);

        writeToFile(fileNameHere, generateMDHere);
    });

}

// Function call to initialize app
init();


