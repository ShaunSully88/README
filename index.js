// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
     {
         type:'input',
         name: 'author',
         message: 'What is the name of the Author of this project?'
     },
     {
         type: 'input',
         name: 'project',
         message: 'What is the name of your project?'
     },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project in detail.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Can you provde details on the usage information of your project?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Can you provide details on how other Developers can contribute to your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Can you provide details on how to properly test your project?'
    },
    {
        type: 'list',
        name:'license',
        message: 'Please choose a license for your project.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
    err ? console.error(err) : console.log('Commit logged!')
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
