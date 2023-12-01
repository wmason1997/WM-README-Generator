// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// generateMD template for READMEs
const generateMD = ({ projectTitle, description, installationInstructions, usageInstructions, contributionGuidelines, tests, GitHubProfile, email}) =>
`# ${projectTitle}

## Table of Contents
NEED TO SORT OUT CLICK TO JUMP

## Description
description template literal
${description}


## Installation Instructions
installation instructions template literal
${installationInstructions}

## Usage Information
usage information template literal
${usageInstructions}

## Contribution Guidelines
contribution guidelines template literals
${contributionGuidelines}

## Tests
tests template literals
what are tests???
${tests}

## Questions
Please feel free to reach out to me with questions or suggestions for this app.
My GitHub user name ${GitHubProfile} and my email is ${email}`

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
    // like the generateHTML arrow function in mini-project
    // mimic the Example readme template I have made in this repo
    // wrap it in backticks and writeToFile
   
    // MDPageContent = generateMD(data)
    // fs.writeFile()

    // const generateMD = ({ projectTitle, description, installationInstructions, usageInstructions, contributionGuidelines, tests, GitHubProfile, email}) =>
    // `# ${projectTitle}
    
    // ## Table of Contents
    // NEED TO SORT OUT CLICK TO JUMP
    
    // ## Description
    // description template literal
    // ${description}
    
    
    // ## Installation Instructions
    // installation instructions template literal
    // ${installationInstructions}
    
    // ## Usage Information
    // usage information template literal
    // ${usageInstructions}
    
    // ## Contribution Guidelines
    // contribution guidelines template literals
    // ${contributionGuidelines}
    
    // ## Tests
    // tests template literals
    // what are tests???
    // ${tests}
    
    // ## Questions
    // Please feel free to reach out to me with questions or suggestions for this app.
    // My GitHub user name ${GitHubProfile} and my email is ${email}`

    // const fileName = `${projectTitle.split(' ').join('')}-README.md`;

    fs.writeFile(fileName, contentText, (err) =>
    err ? console.log(err) : console.log('Successfully created a project README!')
        );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {


        // const fileName = `${answers.projectTitle.split(' ').join('')}-README.md`;

        //const MDPageContent = generateMD(data);

        const fileNameHere = `${answers.projectTitle.split(' ').join('')}-README.md`;
        const generateMDHere = generateMD(answers);

        writeToFile(fileNameHere, generateMDHere);
    });

}

// Function call to initialize app
init();


