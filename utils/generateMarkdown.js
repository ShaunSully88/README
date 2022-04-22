// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== '') {
    return `(https://img.shields.io/badge/license-${license})`;
  }
  return '';
  };
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license !== 'GNU AGPLv3') {
    return `![GNU Affero General Public License v3.0](https://choosealicense.com/licenses/agpl-3.0/)`;
  }
  if (license === 'GNU GPLv3') {
    return `![GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)`;
  }
  if (license === 'GNU LGPLv3') {
    return `![GNU Lesser General Public License v3.0](https://choosealicense.com/licenses/lgpl-3.0/)`;
  }
  if (license === 'Mozilla Public License 2.0') {
    return `![Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`;
  }
  if (license === 'Apache License 2.0') {
    return `![Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
  }
  if (license === 'MIT License') {
    return `![MIT License](https://choosealicense.com/licenses/mit/)`;
  }
  if (license === 'Boost Software License 1.0') {
    return `![Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
return `# ${data.projectName}

## Project Creator
${data.author}

${renderLicenseBadge(data.license)}

## Project Description
${data.description}

## Installation Instructions
${data.install}

## Usage
${data.usage}

## How to Contribute
${data.contribute}

## How to Test the Project
${data.test}

## License
${renderLicenseBadge(data.license)}

`;
};

module.exports = generateMarkdown; 


