// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
 inquirer
 .prompt ([
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
    }
])
.then((answers) => {
    fs.writeFile('answers.json', JSON.stringify(answers, null, 2), err => {
        if(err) throw err;
    })
})

// TODO: Create a function to write README file
function writeFile(name, message) {
    fs.appendFile('README.md', `${process.argv[2]}\n`, err =>
    err ? console.error(err) : console.log('Commit logged!')
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
